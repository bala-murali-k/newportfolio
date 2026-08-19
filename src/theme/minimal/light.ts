import type { Theme } from '../types';

// Light half of minimal's color standard - see theme/minimal/dark.ts for
// the full explanation. Same warm-neutral family, darker accent tint
// (orange-600) than dark mode since orange needs less luminance to read
// clearly against a near-white background.
export const lightTheme: Theme = {
  id: 'light',
  label: 'Light',
  colors: {
    background: '#fafaf9',
    foreground: '#1c1917',
    surface: '#ffffff',
    border: '#e7e5e4',
    accent: '#ea580c',

    backgroundinverse: '#0c0a09',
    foregroundinverse: '#f2f0ee',
    surfaceinverse: '#1c1917',
    borderinverse: '#3a352f',
    accentinverse: '#fb923c',
  },
};
