import { resolveContent } from '../resolveContent';
import type { HomeContent } from './home.content';
import { homeContent as baseContent } from './home.content';
import { homeContent as defaultStyleContent } from './default/home.default.content';

const variants: Record<string, HomeContent> = {
  default: defaultStyleContent,
};

export function getHomeContent(styleId: string): HomeContent {
  return resolveContent(styleId, variants, baseContent);
}

export type { HomeContent } from './home.content';
