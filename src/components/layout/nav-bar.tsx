"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import MobileMenu from "./mobile-menu";
import DesktopMenu from "./desktop-menu";

import "@/app/client/hover-card.css";
import { Locale } from "../../../i18n-config";
import { useLangStore } from "@/store/lang.store";

type NavBarProps = {
  lang: Locale;
};
const NavBar: React.FC<NavBarProps> = ({ lang }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { setLang } = useLangStore();

  useEffect(() => {
    setLang(lang);
  }, [lang]);

  return (
    <nav className="m-auto sticky top-0 z-[999] bg-[#11434C] w-full border-b border-[#D4A875]">
      <div className="max-w-[1440px] m-auto flex items-center gap-6 h-12 px-5">
        <Link href={`/${lang}`} className="cursor-pointer">
          <Image src="/logo-gold.png" alt="logo" width={150} height={28} />
        </Link>
        <DesktopMenu />
        <MenuIcon
          className="absolute right-5 md:hidden text-gold-app cursor-pointer"
          onClick={() => setOpenMenu(true)}
        />
        <MobileMenu open={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </nav>
  );
};

export default NavBar;
