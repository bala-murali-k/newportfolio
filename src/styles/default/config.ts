import type { ComponentType } from 'react';
import type { Theme } from '../../theme/types';
import CoreLayout from '../../layout/default/core.layout';
import { lightTheme } from '../../theme/default/light';
import { darkTheme } from '../../theme/default/dark';

export interface StyleConfig {
  id: string;
  name: string;
  // whether this style follows the shared slot placement convention,
  // or is free to lay itself out however it wants
  followsSlotSystem: boolean;
  layout: ComponentType<any>;
  themes: Record<string, Theme>;
}

export const defaultConfig: StyleConfig = {
  id: 'default',
  name: 'Default',
  followsSlotSystem: true,
  layout: CoreLayout,
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
};
