import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "Security Guard Company Melbourne | Professional Security Services",
  description:
    "Melbourne's trusted security guard company. We provide professional security services for corporate, retail, events, and residential clients across Melbourne and Victoria.",
  keywords:
    "security guard melbourne, security company melbourne, security services victoria, event security, corporate security melbourne",
  metadataBase: new URL("https://securityguardcompanymelbourne.com"),
  openGraph: {
    title: "Security Guard Company Melbourne",
    description:
      "Professional security services across Melbourne and Victoria. Licenced, trained, and trusted.",
    url: "https://securityguardcompanymelbourne.com/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={sourceSans.variable}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body suppressHydrationWarning className="font-[var(--font-source-sans)] min-h-screen flex flex-col bg-white text-[#2d2d2d]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
