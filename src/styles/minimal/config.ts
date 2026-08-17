import type { StyleConfig } from '../types';
import CoreLayout from '../../layout/minimal/core.layout';
import { lightTheme } from '../../theme/minimal/light';
import { darkTheme } from '../../theme/minimal/dark';

export const minimalConfig: StyleConfig = {
  id: 'minimal',
  name: 'Minimal',
  followsSlotSystem: true,
  layout: CoreLayout,
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
};
