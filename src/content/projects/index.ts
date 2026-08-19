import type { Project } from './projects.content';
import { projectsContent as defaultContent } from './projects.content';
import { projectsContent as minimalContent } from './minimal/projects.content';
import { projectsContent as modernContent } from './modern/projects.content';

const contentMap: Record<string, Project[]> = {
  minimal: minimalContent,
  modern: modernContent,
};

export function getProjectsContent(styleId: string): Project[] {
  return contentMap[styleId] ?? defaultContent;
}

export type { Project } from './projects.content';
