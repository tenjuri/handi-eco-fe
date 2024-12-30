import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { i18n, Locale } from "../../../i18n-config";
import "@/app/[lang]/globals.css";
import { getDictionary } from "../../../get-dictionary";

import NavBar from "../../components/layout/nav-bar";
import Footer from "../../components/layout/footer";

export const metadata: Metadata = {
  title: "Handi&Eco",
  applicationName: "Handi&Eco",
  description: "Handi&Eco - Handmade with Care, Eco for Life",
  openGraph: {
    title: "Handi&Eco",
    description: "Handi&Eco - Handmade with Care, Eco for Life",
    url: "https://handi-eco.vn",
    siteName: "Handi&Eco",
    images: ["https://handi-eco.vn/logo-lg.jpg"],
    type: "website",
  },
  twitter: {
    title: "Handi&Eco",
    card: "summary_large_image",
    images: ["https://handi-eco.vn/logo-lg.jpg"],
    description: "Handi&Eco - Handmade with Care, Eco for Life",
  },
  keywords: [
    "Handmade",
    "Care",
    "Eco",
    "Life",
    "Eco for Life",
    "Handmade with Care",
    "handi eco",
    "handi & eco",
  ],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;

  const { children } = props;

  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/handi-eco.ico" sizes="any" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="gh-wviGyqT0JuU4yfWv0g0CoZMo4W15g8iqgkGD--HA"
        />
      </head>
      <body className={` ${inter.className}`}>
        <div className="min-h-screen relative flex flex-col justify-between">
          <NavBar lang={params.lang} dictionary={dictionary} />
          <div className="flex flex-col flex-grow h-full relative w-full">
            {children}
          </div>
          <Footer lang={params.lang} dictionary={dictionary} />
        </div>
      </body>
    </html>
  );
}
