import { resolveContent } from '../resolveContent';
import type { Project } from './projects.content';
import { projectsContent as baseContent } from './projects.content';
import { projectsContent as modernStyleContent } from './modern/projects.modern.content';
import { projectsContent as minimalStyleContent } from './minimal/projects.minimal.content';

const variants: Record<string, Project[]> = {
  modern: modernStyleContent,
  minimal: minimalStyleContent,
};

export function getProjectsContent(styleId: string): Project[] {
  return resolveContent(styleId, variants, baseContent);
}

export type { Project } from './projects.content';
