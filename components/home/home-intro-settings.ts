export const homeIntroStorageKey = "admr:home-intro-completed";
export const homeIntroReducedMotion = "(prefers-reduced-motion: reduce)";

// Keep the homepage out of the first paint while the intro stylesheet loads.
export const homeIntroFirstPaint = `
html[data-home-intro-pending],
html:has([data-home-intro][open]) {
  overflow: hidden;
}
html[data-home-intro-pending] {
  background-color: var(--surface, Canvas);
}
html[data-home-intro-pending] body {
  visibility: hidden;
}
[data-home-intro] {
  position: fixed;
  inset: 0;
  z-index: 50;
  width: 100%;
  height: 100dvh;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 0;
  border: 0;
  overflow: hidden;
  background: var(--muted, Canvas);
}`;

export const homeIntroBootstrap = `(() => {
  if (location.pathname !== "/" || location.hash || matchMedia(${JSON.stringify(homeIntroReducedMotion)}).matches) return;
  try { if (localStorage.getItem(${JSON.stringify(homeIntroStorageKey)})) return; } catch {}

  const root = document.documentElement;
  root.setAttribute("data-home-intro-pending", "");
  window.addEventListener("load", () => {
    if (!root.hasAttribute("data-home-intro-pending")) return;
    setTimeout(() => root.removeAttribute("data-home-intro-pending"), 10000);
  }, { once: true });
})();`;

