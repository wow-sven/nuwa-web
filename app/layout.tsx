import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ThemeProvider from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stablo — Minimal Next.js Blog Template",
    template: "%s | Stablo",
  },
  description:
    "Stablo is a polished blog starter built with Next.js, Tailwind CSS, and Markdown content.",
  openGraph: {
    type: "website",
    title: "Stablo — Minimal Next.js Blog Template",
    description:
      "A faithful Next.js recreation of the Stablo Astro theme with Markdown-powered posts.",
    url: siteUrl,
    siteName: "Stablo",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@nuwa",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
