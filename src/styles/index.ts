import type { StyleConfig } from './default/config';
import { defaultConfig } from './default/config';

/**
 * Aggregates every style's own config into one lookup map. This file does
 * not define settings itself - it only imports and lists what each style's
 * own config.ts already declares. Add a new style by creating
 * styles/<id>/config.ts and registering it here.
 */
export const styleRegistry: Record<string, StyleConfig> = {
  default: defaultConfig,
};

export const defaultStyleId = 'default';

export function getStyleConfig(styleId: string): StyleConfig {
  return styleRegistry[styleId] ?? styleRegistry[defaultStyleId];
}

export function listStyleConfigs(): StyleConfig[] {
  return Object.values(styleRegistry);
}
