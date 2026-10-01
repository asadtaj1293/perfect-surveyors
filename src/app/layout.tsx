import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brandName } from "@/lib/site-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${brandName} | Clear advice. Confident decisions.`,
    template: `%s | ${brandName}`,
  },
  description:
    "Independent property surveying, quantity surveying and retrofit advice for clearer decisions across the built environment.",
  openGraph: {
    type: "website",
    siteName: brandName,
    title: `${brandName} | Clear advice. Confident decisions.`,
    description:
      "Independent property, project and retrofit advice for decisions that move you forward.",
  },
  twitter: {
    card: "summary",
    title: brandName,
    description:
      "Independent property, project and retrofit advice for decisions that move you forward.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
