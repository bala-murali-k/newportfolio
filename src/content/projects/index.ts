import { resolveContent } from '../resolveContent';
import type { Project } from './projects.content';
import { projectsContent as baseContent } from './projects.content';
import { projectsContent as defaultStyleContent } from './default/projects.default.content';

const variants: Record<string, Project[]> = {
  default: defaultStyleContent,
};

export function getProjectsContent(styleId: string): Project[] {
  return resolveContent(styleId, variants, baseContent);
}

export type { Project } from './projects.content';
