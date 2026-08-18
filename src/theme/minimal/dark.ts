import type { Theme } from '../types';

// Minimal's color standard: warm (stone-tinted) neutrals + an orange accent,
// shared between light and dark. Neutrals stay warm rather than pure gray so
// they don't fight the accent. Dark mode uses a lighter accent tint
// (orange-400) than light mode (orange-600) since orange needs more
// luminance to read clearly against a near-black background - see
// theme/minimal/light.ts for the light-mode half of this pair.
export const darkTheme: Theme = {
  id: 'dark',
  label: 'Dark',
  colors: {
    background: '#0c0a09',
    foreground: '#f2f0ee',
    surface: '#1c1917',
    border: '#3a352f',
    accent: '#fb923c',
  },
};
