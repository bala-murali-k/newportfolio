import type { StyleConfig } from '../types';
import { lightTheme } from '../../theme/modern/light';
import { darkTheme } from '../../theme/modern/dark';

export const modernConfig: StyleConfig = {
  id: 'modern',
  name: 'Modern',
  followsSlotSystem: true,
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
};
