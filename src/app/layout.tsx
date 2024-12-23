import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/layout/nav-bar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Handi&Eco",
  applicationName: "Handi&Eco",
  description: "Handi&Eco - Handmade with Care, Eco for Life",
  openGraph: {
    title: "Handi&Eco",
    description: "Handi&Eco - Handmade with Care, Eco for Life",
    url: "https://aethir-dev.netlify.app/dashboard",
    siteName: "Aethir",
    images: ["https://aethir.com/twitter-image.png?dcea0e1d09ac3bea"],
    type: "website",
  },
  twitter: {
    title: "Handi&Eco",
    card: "summary_large_image",
    images: ["https://aethir.com/twitter-image.png?dcea0e1d09ac3bea"],
    description: "Handi&Eco - Handmade with Care, Eco for Life",
  },
  keywords: ["Handmade", "Care", "Eco", "Life"],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={` ${inter.className}`}>
        <div className="min-h-screen relative flex flex-col justify-between">
          <NavBar />
          <div className="flex flex-col flex-grow h-full relative w-full">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
