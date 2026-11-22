import Lenis from "lenis";
import { animate } from "motion";
import { homeIntroReducedMotion, homeIntroStorageKey } from "./home-intro-settings";

const easeOut = [0.23, 1, 0.32, 1] as const;
const morphEase = [0.77, 0, 0.175, 1] as const;
const scrollThreshold = 0.07;

function enablePageScrolling(preference: MediaQueryList) {
	let lenis: Lenis | undefined;
	const settleScrollForControl = (event: Event) => {
		if (lenis?.isScrolling !== "smooth" || !(event.target instanceof Element)) return;
		if (event.target.closest("form, [data-lenis-prevent]")) {
			lenis.scrollTo(lenis.actualScroll, { immediate: true });
		}
	};
	const update = () => {
		lenis?.destroy();
		lenis = preference.matches ? undefined : new Lenis({ autoRaf: true });
	};
	update();
	document.addEventListener("pointerdown", settleScrollForControl, { capture: true });
	document.addEventListener("focusin", settleScrollForControl);
	preference.addEventListener("change", update);
}

function startHomeIntro() {
	const root = document.documentElement;
	const preference = matchMedia(homeIntroReducedMotion);

	if (!root.hasAttribute("data-home-intro-pending")) {
		enablePageScrolling(preference);
		return;
	}

	const dialog = document.querySelector<HTMLDialogElement>("[data-home-intro]");
	const scroll = dialog?.querySelector<HTMLElement>(".home-intro-scroll");
	const content = dialog?.querySelector<HTMLElement>(".home-intro-scroll-content");
	const loader = dialog?.querySelector<HTMLElement>(".home-intro-loading");
	const wordmark = dialog?.querySelector<HTMLElement>(".home-intro-wordmark");
	const position = dialog?.querySelector<HTMLElement>(".home-intro-mark-position");
	const mark = dialog?.querySelector<HTMLElement>(".home-intro-zoom");
	const cue = dialog?.querySelector<HTMLElement>(".home-intro-cue");
	const button = cue?.querySelector("button");

	if (!dialog || !scroll || !content || !loader || !wordmark || !position || !mark || !cue || !button || preference.matches || typeof dialog.showModal !== "function") {
		root.removeAttribute("data-home-intro-pending");
		enablePageScrolling(preference);
		return;
	}

	const listeners = new AbortController();
	const { signal } = listeners;
	let animation: ReturnType<typeof animate> | undefined;
	let cueExit: ReturnType<typeof animate> | undefined;
	let progress = 0;
	let scrollRange = 0;
	let coverScale = 1;

	dialog.showModal();
	root.removeAttribute("data-home-intro-pending");
	scroll.focus({ preventScroll: true });

	const lenis = new Lenis({
		wrapper: scroll,
		content,
		autoRaf: true,
		virtualScroll: () => scroll.dataset.phase !== "zooming",
	});

	const finish = () => {
		if (signal.aborted) return;
		listeners.abort();
		animation?.stop();
		cueExit?.stop();
		lenis.destroy();
		try { localStorage.setItem(homeIntroStorageKey, "1"); } catch {}
		scroll.dataset.phase = "finished";
		dialog.close();
		document.getElementById("site-content")?.focus({ preventScroll: true });
		enablePageScrolling(preference);
	};

	const scaleMark = (value: number) => {
		progress = value;
		mark.style.transform = `scale(${coverScale ** value})`;
	};

	const measure = () => {
		lenis.resize();
		scrollRange = scroll.scrollHeight - scroll.clientHeight;
		// Zoom far enough for the orange inset to cover the viewport.
		coverScale = 9 * Math.max(scroll.clientWidth, scroll.clientHeight) / Math.max(1, mark.offsetWidth);
		scaleMark(progress);
	};

	const completeScroll = async () => {
		if (scroll.dataset.phase !== "ready") return;
		scroll.dataset.phase = "zooming";
		cue.inert = true;
		cueExit = animate(cue, { opacity: 0, y: 5 }, { duration: 0.22, ease: easeOut });

		animation = animate(progress, 1, {
			duration: 1.25,
			ease: "easeInOut",
			onUpdate: (value) => {
				scaleMark(value);
				lenis.scrollTo(value * scrollRange, { immediate: true, force: true });
			},
		});
		await animation;
		if (signal.aborted) return;

		animation = animate(dialog, { opacity: 0 }, { duration: 0.32, ease: easeOut });
		await animation;
		finish();
	};

	const syncScroll = () => {
		if (scroll.dataset.phase !== "ready" || !scrollRange) return;
		const input = scroll.scrollTop / scrollRange;
		scaleMark(Math.min(Math.max(input, 0), scrollThreshold));
		if (input >= scrollThreshold) void completeScroll().catch(finish);
	};

	const playIntro = async () => {
		animation = animate(0, 100, {
			duration: 1.15,
			ease: easeOut,
			onUpdate: (value) => loader.style.setProperty("--home-intro-progress", String(Math.round(value))),
		});
		await animation;
		if (signal.aborted) return;

		scroll.dataset.phase = "morphing";
		animation = animate([
			[position, { transform: ["translate(-138.28%, -21dvh)", "translate(0%, 0dvh)"] }, { at: 0, duration: 0.54, ease: morphEase }],
			[wordmark, { opacity: 0 }, { at: 0, duration: 0.2, ease: easeOut }],
			[loader, { opacity: 0, y: -8 }, { at: 0, duration: 0.24, ease: easeOut }],
			[cue, { opacity: 1, y: [5, 0] }, { at: 0.32, duration: 0.22, ease: easeOut }],
		]);
		await animation;
		if (signal.aborted) return;

		scroll.dataset.phase = "ready";
		cue.inert = false;
		syncScroll();
	};

	measure();
	window.addEventListener("resize", measure, { signal });
	scroll.addEventListener("scroll", syncScroll, { signal, passive: true });
	dialog.addEventListener("cancel", (event) => { event.preventDefault(); finish(); }, { signal });
	preference.addEventListener("change", (event) => { if (event.matches) finish(); }, { signal });
	button.addEventListener("click", (event) => {
		if (event.detail === 0) finish();
		else void completeScroll().catch(finish);
	}, { signal });

	void playIntro().catch(finish);
}

startHomeIntro();
