import type { StyleConfig } from './types';
import { modernConfig } from './modern/config';
import { minimalConfig } from './minimal/config';

/**
 * Aggregates every style's own config into one lookup map. This file does
 * not define settings itself - it only imports and lists what each style's
 * own config.ts already declares. Add a new style by creating
 * styles/<id>/config.ts and registering it here.
 */
export const styleRegistry: Record<string, StyleConfig> = {
  modern: modernConfig,
  minimal: minimalConfig,
};

export const defaultStyleId = 'modern';

export function getStyleConfig(styleId: string): StyleConfig {
  return styleRegistry[styleId] ?? styleRegistry[defaultStyleId];
}

export function listStyleConfigs(): StyleConfig[] {
  return Object.values(styleRegistry);
}
