import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
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
  verification: {
    google: "gYHkXwlA-x8LsGZ81afO-HwdqRmiQiT1hWm8mfwa3Ig",
  },
  openGraph: {
    title: "Security Guard Company Melbourne",
    description:
      "Professional security services across Melbourne and Victoria. Licenced, trained, and trusted.",
    url: "https://securityguardcompanymelbourne.com/",
    siteName: "Security Guard Company Melbourne",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://securityguardcompanymelbourne.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Security Guard Company Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Guard Company Melbourne | Professional Security Services",
    description: "Professional security services across Melbourne and Victoria. Licenced, trained, and trusted.",
    images: ["https://securityguardcompanymelbourne.com/og-image.jpg"],
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
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wrngxvguvl");`,
          }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-496G56Z56S" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-496G56Z56S');`,
          }}
        />
      </head>
      <body suppressHydrationWarning className="font-[var(--font-source-sans)] min-h-screen flex flex-col bg-white text-[#2d2d2d]">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
