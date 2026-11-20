import { useEffect, type CSSProperties } from "react";

/**
 * Scroll-reveal: any element with a `data-reveal` attribute fades and slides in
 * the first time it scrolls into view (`data-reveal="zoom"` fades and settles
 * from a slight zoom instead). Elements added later, such as project cards
 * that appear after changing the filter, are picked up automatically.
 *
 * The hidden starting state only applies while <html> has the `reveal-on`
 * class, which a tiny script in _document.tsx sets before first paint, so the
 * page stays fully visible without JavaScript or with reduced motion.
 */

/** Stagger an element's reveal, e.g. `style={revealDelay(120)}`. */
export const revealDelay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

const PENDING = "[data-reveal]:not([data-shown])";

export function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.revealReady = "";

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      root.classList.remove("reveal-on");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-shown", "");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const watch = (node: Element | Document) => {
      if (node instanceof Element && node.matches(PENDING)) io.observe(node);
      node.querySelectorAll(PENDING).forEach((el) => io.observe(el));
    };

    watch(document);
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations)
        m.addedNodes.forEach((n) => n instanceof Element && watch(n));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
