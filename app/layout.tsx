import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--nf-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--nf-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--nf-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Salaro — AI-Native Web Consultancy",
    template: "%s | Salaro",
  },
  description:
    "30 years of technology, now applied to AI. Salaro is a boutique web consultancy building with AI agent factories — faster delivery, deeper expertise.",
  metadataBase: new URL("https://salaro.com"),
  openGraph: {
    siteName: "Salaro",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
