import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "../../app/globals.css";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { DictionaryProvider } from "../../components/providers/DictionaryProvider";
import { getDictionary, Locale } from "../../lib/dictionaries";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-sans-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABSIIDP - Abia State Integrated Infrastructure Development Project",
  description: "Building resilient infrastructure for a stronger Abia.",
};

export default async function RootLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>
  }
) {
  const { children } = props;
  const params = await props.params;
  const dictionary = await getDictionary(params.lang as Locale);

  return (
    <html
      lang={params.lang}
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <DictionaryProvider dictionary={dictionary}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </DictionaryProvider>
      </body>
    </html>
  );
}
