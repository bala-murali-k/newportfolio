import type { Project } from '../projects.content';

interface TechStack {
  index: number,
  stack: string[],
  stackExpert: number[]
}

export interface MinimalProject extends Project {
  techStack: TechStack[],
  status: "Completed" | "Ongoing" | "Abandoned";
  isOneVersion: boolean,
  featured: boolean,
  version: number,
  year: number,
  isHosted: boolean,
  isImageAvailable: boolean,
  isCodePublic: boolean,
  versions: MinimalProject[] | null,
  hostedLink: string | null,
  imageType: "Link" | "Local" | null,
  imageSource: string | null,
  imageAltText: string | null,
  publicCodeLink: string | null,
  publicCodeSource: string | null,
}

export const projectsContent: Project[] = [
  {
    id: 'project-one',
    title: 'Project One',
    description: 'One line. That is all it needs.',
    tags: ['React'],
    link: 'https://example.com',
  },
  {
    id: 'project-two',
    title: 'Project Two',
    description: 'Another line.',
    tags: ['Vite'],
    link: 'https://example.com',
  },
];
