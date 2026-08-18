import type { Theme } from '../types';

export const lightTheme: Theme = {
  id: 'light',
  label: 'Light',
  colors: {
    background: '#fafafa',
    foreground: '#1a1a1a',
    // Panel background for header/sidebar/footer - a hair off the page
    // background so fixed regions read as distinct from content.
    surface: '#f1f1ef',
    border: '#e0e0dd',
    muted: '#6b6b68',
    accent: '#2a5c4b',
  },
};
