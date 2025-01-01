"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, ChevronDown } from "lucide-react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

import MobileMenu from "./mobile-menu";
import DesktopMenu from "./desktop-menu";

import "@/app/client/hover-card.css";
import { Locale, i18n } from "../../../i18n-config";
import { useLangStore } from "@/store/lang.store";
import { type getDictionary } from "../../../get-dictionary";

type NavBarProps = {
  lang: Locale;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
};
const NavBar: React.FC<NavBarProps> = ({ lang, dictionary }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { setLang } = useLangStore();
  const [openLanguage, setOpenLanguage] = useState(false);

  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  useEffect(() => {
    setLang(lang);
    // setDictionary();
  }, [lang]);

  return (
    <nav className="m-auto sticky top-0 z-[999] bg-[#11434C] w-full border-b border-[#D4A875]">
      <div className="max-w-[1440px] m-auto flex items-center gap-6 h-12 px-5 relative">
        <Link href={`/${lang}`} className="cursor-pointer">
          <Image
            src="/logo-gold.png"
            alt="logo"
            width={792}
            height={160}
            className="h-[28px] w-[150px]"
          />
        </Link>
        <DesktopMenu dictionary={dictionary} />
        <MenuIcon
          className="absolute right-5 md:hidden text-gold-app cursor-pointer"
          onClick={() => setOpenMenu(true)}
        />
        <div className="absolute right-5 hidden md:flex items-center gap-4">
          <HoverCard
            openDelay={0}
            closeDelay={100}
            open={openLanguage}
            onOpenChange={setOpenLanguage}
          >
            <HoverCardTrigger asChild>
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="font-medium text-base text-[#FFEBC0]">
                  {dictionary.lang.title}
                </span>
                <ChevronDown
                  className={`${
                    openLanguage ? "-rotate-180" : ""
                  } transition-all duration-300 w-5 h-5 text-[#FFEBC0]`}
                />
              </div>
            </HoverCardTrigger>
            <HoverCardContent
              className="HoverCardContent bg-base border-base w-max"
              sideOffset={5}
            >
              <div className="flex flex-col gap-2">
                {i18n.locales.map((locale) => {
                  return (
                    <Link
                      key={locale}
                      href={redirectedPathname(locale)}
                      onClick={() => setLang(locale)}
                      className="cursor-pointer"
                    >
                      {dictionary.lang[locale]}
                    </Link>
                  );
                })}
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <MobileMenu open={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </nav>
  );
};

export default NavBar;
