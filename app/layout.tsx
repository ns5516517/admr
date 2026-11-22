import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteName, siteOpenGraph, siteUrl } from "@/lib/site-metadata";
import SiteFooter from "@/components/shared/site-footer";
import { homeIntroBootstrap, homeIntroFirstPaint } from "@/components/home/home-intro-settings";

const nunitoSansHeading = Nunito_Sans({subsets:['latin'],variable:'--font-heading'});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${siteName} | Media, Advertising & Performance`,
    template: `%s | ${siteName}`,
  },
  description:
    "ADMR Technologies delivers integrated media buying, advertising releases, digital marketing, and public relations across regional and global markets.",
  applicationName: siteName,
  openGraph: siteOpenGraph,
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", nunitoSansHeading.className)}
      suppressHydrationWarning
    >
      <head>
        <style>{homeIntroFirstPaint}</style>
        <script dangerouslySetInnerHTML={{ __html: homeIntroBootstrap }} />
      </head>
      <body className="min-h-full flex flex-col">
        <main id="site-content" tabIndex={-1} className="flex-1 outline-none">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
