import HomePage from "../../components/home/page";
import { Metadata } from "next";
import { Locale } from "../../../i18n-config";

export const metadata: Metadata = {
  title: "Handi&Eco - Home",
  description: "Handi&Eco - Handmade with Care, Eco for Life",
  openGraph: {
    title: "Handi&Eco - Home",
    description: "Handi&Eco - Handmade with Care, Eco for Life",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home",
    description: "Home",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  return <HomePage lang={lang} />;
}
