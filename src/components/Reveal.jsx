import { useEffect, useRef, useState } from "react";

/**
 * Enveloppe un bloc pour une apparition douce au scroll (opacity + translateY).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  threshold = 0.12
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setVisible(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    /** Déjà visible au chargement (certains navigateurs mobiles ne déclenchent pas l’IO assez tôt). */
    const showIfAlreadyVisible = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const vw = window.innerWidth || document.documentElement.clientWidth;
      return rect.bottom > 0 && rect.top < vh && rect.right > 0 && rect.left < vw;
    };

    if (showIfAlreadyVisible()) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px 48px 0px" }
    );

    observer.observe(el);

    const t = window.setTimeout(() => {
      if (showIfAlreadyVisible()) {
        setVisible(true);
        observer.disconnect();
      }
    }, 120);

    return () => {
      window.clearTimeout(t);
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
