"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../i18n-config";
import { useLangStore } from "@/store/lang.store";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const { setLang } = useLangStore();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link
                href={redirectedPathname(locale)}
                onClick={() => setLang(locale)}
              >
                {locale}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
