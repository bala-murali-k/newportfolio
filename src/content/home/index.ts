import { resolveContent } from '../resolveContent';
import type { HomeContent } from './home.content';
import { homeContent as baseContent } from './home.content';
import { homeContent as modernStyleContent } from './modern/home.modern.content';
import { homeContent as minimalStyleContent } from './minimal/home.minimal.content';

const variants: Record<string, HomeContent> = {
  modern: modernStyleContent,
  minimal: minimalStyleContent,
};

export function getHomeContent(styleId: string): HomeContent {
  return resolveContent(styleId, variants, baseContent);
}

export type { HomeContent } from './home.content';
