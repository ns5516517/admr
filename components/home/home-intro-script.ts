import { resolve } from "node:path";
import { build } from "esbuild";

let productionScript: Promise<string> | undefined;

async function bundleHomeIntro() {
	const result = await build({
		entryPoints: [resolve(process.cwd(), "components/home/home-intro-client.ts")],
		bundle: true,
		format: "iife",
		platform: "browser",
		target: "es2020",
		minify: true,
		write: false,
	});
	return result.outputFiles[0].text.replace(/<\/script/gi, "<\\/script");
}

// Inline the entry so first-visit motion can start before React or another network request.
export function getHomeIntroScript() {
	if (process.env.NODE_ENV === "development") return bundleHomeIntro();
	return productionScript ??= bundleHomeIntro();
}
