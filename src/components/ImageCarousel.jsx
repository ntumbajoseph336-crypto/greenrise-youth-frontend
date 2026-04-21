import { useEffect, useMemo, useState } from "react";

export default function ImageCarousel({ items, intervalMs = 3500 }) {
  const safeItems = useMemo(() => (Array.isArray(items) ? items.filter(Boolean) : []), [items]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeItems.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % safeItems.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [safeItems.length, intervalMs]);

  useEffect(() => {
    if (index >= safeItems.length) setIndex(0);
  }, [index, safeItems.length]);

  if (safeItems.length === 0) return null;

  const current = safeItems[index];

  return (
    <div className="carousel" role="region" aria-label="Carousel d'images">
      <div className="carousel__viewport">
        {current.type === "framed" || current.type === "logo" ? (
          <div className="carousel__framedSlide" key={current.src}>
            <img
              className="carousel__framedImg"
              src={current.src}
              alt={current.alt || "Image"}
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : (
          <img
            key={current.src}
            className="carousel__img"
            src={current.src}
            alt={current.alt || "Image environnement"}
            loading="lazy"
            decoding="async"
          />
        )}
        <div className="carousel__overlay" aria-hidden="true" />
        {current.caption ? <div className="carousel__caption">{current.caption}</div> : null}
      </div>

      {safeItems.length > 1 ? (
        <div className="carousel__dots" aria-label="Navigation carousel">
          {safeItems.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`carousel__dot ${i === index ? "is-active" : ""}`}
              aria-label={`Aller à l'image ${i + 1}`}
              aria-current={i === index ? "true" : "false"}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

