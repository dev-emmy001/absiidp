import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
