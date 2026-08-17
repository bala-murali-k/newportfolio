import { useStyle } from '@context/global/style-context';

/**
 * Rotates through availableStyles one at a time ("< modern >") instead of
 * a dropdown. Always wraps - past the last style it loops back to the
 * first, and vice versa.
 */
export default function StyleSwitcher() {
  const { styleId, availableStyles, switchStyle } = useStyle();

  const currentIndex = availableStyles.findIndex((s) => s.id === styleId);
  const current = availableStyles[currentIndex] ?? availableStyles[0];

  function step(direction: -1 | 1) {
    if (availableStyles.length === 0) return;
    const total = availableStyles.length;
    const nextIndex = (currentIndex + direction + total) % total;
    switchStyle(availableStyles[nextIndex].id);
  }

  return (
    <div data-component="style-switcher" aria-label="Style">
      <button type="button" aria-label="Previous style" onClick={() => step(-1)}>
        &lsaquo;
      </button>
      <span data-current-style={current?.id}>{current?.name}</span>
      <button type="button" aria-label="Next style" onClick={() => step(1)}>
        &rsaquo;
      </button>
    </div>
  );
}
