import type { Metadata } from "next";

export const siteName = "ADMR Technologies";

const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const origin = process.env.SITE_URL || (productionDomain && `https://${productionDomain}`);

export const siteUrl = origin ? new URL(origin) : undefined;

export const siteOpenGraph = {
	type: "website",
	siteName,
	locale: "en_IN",
} satisfies Metadata["openGraph"];
