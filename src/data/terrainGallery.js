/**
 * Galerie terrain : descentes sur terrain GreenRise Youth.
 * Images locales copiées dans public/images/terrain.
 */
export const terrainItems = Array.from({ length: 24 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/images/terrain/terrain-${n}.png`,
    alt: `Descente sur terrain ${i + 1}`,
    caption: "Descente sur terrain"
  };
});

