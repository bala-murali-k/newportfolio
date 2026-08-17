import { resolveContent } from '../resolveContent';
import type { AboutContent } from './about.content';
import { aboutContent as baseContent } from './about.content';
import { aboutContent as defaultStyleContent } from './default/about.default.content';

const variants: Record<string, AboutContent> = {
  default: defaultStyleContent,
};

export function getAboutContent(styleId: string): AboutContent {
  return resolveContent(styleId, variants, baseContent);
}

export type { AboutContent, Social } from './about.content';
