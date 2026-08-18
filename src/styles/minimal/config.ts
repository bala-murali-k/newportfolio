import type { StyleConfig } from '../types';
import { lightTheme } from '../../theme/minimal/light';
import { darkTheme } from '../../theme/minimal/dark';

export const minimalConfig: StyleConfig = {
  id: 'minimal',
  name: 'Minimal',
  followsSlotSystem: true,
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
};
