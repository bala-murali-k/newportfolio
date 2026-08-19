import type { AboutContent } from './about.content';
import { aboutContent as defaultContent } from './about.content';
import { aboutContent as minimalContent } from './minimal/about.content';
import { aboutContent as modernContent } from './modern/about.content';

const contentMap: Record<string, AboutContent> = {
  minimal: minimalContent,
  modern: modernContent,
};

export function getAboutContent(styleId: string): AboutContent {
  return contentMap[styleId] ?? defaultContent;
}

export type { AboutContent } from './about.content';
