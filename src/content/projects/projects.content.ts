export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

/**
 * Fallback content, used when the active style has no content of its own
 * at content/projects/<style-id>/projects.<style-id>.content.ts yet.
 */
export const projectsContent: Project[] = [];
