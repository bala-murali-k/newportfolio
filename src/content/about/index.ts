import { resolveContent } from '../resolveContent';
import type { AboutContent } from './about.content';
import { aboutContent as baseContent } from './about.content';
import { aboutContent as modernStyleContent } from './modern/about.modern.content';
import { aboutContent as minimalStyleContent } from './minimal/about.minimal.content';

const variants: Record<string, AboutContent> = {
  modern: modernStyleContent,
  minimal: minimalStyleContent,
};

export function getAboutContent(styleId: string): AboutContent {
  return resolveContent(styleId, variants, baseContent);
}

export type { AboutContent, Social } from './about.content';
