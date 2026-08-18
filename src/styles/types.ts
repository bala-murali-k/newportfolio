import type { Theme } from '../theme/types';

export interface StyleConfig {
  id: string;
  name: string;
  // whether this style follows the shared slot placement convention,
  // or is free to lay itself out however it wants
  followsSlotSystem: boolean;
  themes: Record<string, Theme>;
}
