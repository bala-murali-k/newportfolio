import type { SidebarContent } from './sidebar.content';
import { sidebarContent as defaultContent } from './sidebar.content';
import { sidebarContent as minimalContent } from './minimal/sidebar.content';
import { sidebarContent as modernContent } from './modern/sidebar.content';

const contentMap: Record<string, SidebarContent> = {
  minimal: minimalContent,
  modern: modernContent,
};

export function getSidebarContent(styleId: string): SidebarContent {
  return contentMap[styleId] ?? defaultContent;
}

export type { SidebarContent } from './sidebar.content';
