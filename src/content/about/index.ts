import type { About } from './about.content';
import { aboutContent as defaultContent } from './about.content';
import { aboutContent as minimalContent } from './minimal/about.content';
import { aboutContent as modernContent } from './modern/about.content';

const contentMap: Record<string, About> = {
  minimal: minimalContent,
  modern: modernContent,
};

export function getAboutContent<T extends About = About>(styleId: string): T {
  return (contentMap[styleId] ?? defaultContent) as T;
}

export type { AboutContent } from './about.content';
