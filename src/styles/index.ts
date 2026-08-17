import type { StyleConfig } from './types';
import { modernConfig } from './modern/config';
import { minimalConfig } from './minimal/config';

// Side-effect imports: every rule in these files is scoped under
// [data-style="<id>"] (set on <html> by StyleProvider), so loading all of
// them up front is safe - only the currently active style's rules ever
// take effect. Modern's are still empty placeholders (bare HTML, on
// purpose - it's the baseline used to confirm everything else works).
import './modern/typography.css';
import './modern/spacing.css';
import './minimal/typography.css';
import './minimal/spacing.css';

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
