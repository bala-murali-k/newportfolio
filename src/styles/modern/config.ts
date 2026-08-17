import type { StyleConfig } from '../types';
import CoreLayout from '../../layout/modern/core.layout';
import { lightTheme } from '../../theme/modern/light';
import { darkTheme } from '../../theme/modern/dark';

export const modernConfig: StyleConfig = {
  id: 'modern',
  name: 'Modern',
  followsSlotSystem: true,
  layout: CoreLayout,
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
};
