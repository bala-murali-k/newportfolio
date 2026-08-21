import type { Project } from '../projects.content';

interface TechStack {
  index: number,
  stack: string[],
  stackExpert: number[]
}

export interface MinimalProject extends Project {
  techStack: TechStack[] | [],
  status: "Completed" | "Ongoing" | "Abandoned";
  isOneVersion: boolean,
  featured: boolean,
  version: string,
  year: number,
  isHosted: boolean,
  isImageAvailable: boolean,
  isCodePublic: boolean,
  versions: MinimalProject[] | [],
  hostedLink: string | null,
  imageType: "Link" | "Local" | null,
  imageSource: string | null,
  imageAltText: string | null,
  publicCodeLink: string | null,
  publicCodeSource: string | null,
}

export const projectsContent: MinimalProject[] = [
  {
    id: '1',
    title: 'This Portfolio',
    description: 'One line. That is all it needs.',
    tags: [],
    link: 'https://example.com',
    techStack: [],
    status: "Ongoing",
    isOneVersion: false,
    featured: true,
    version: '2.0.0',
    year: 2026,
    isHosted: false,
    isImageAvailable: true,
    isCodePublic: false,
    versions: [],
    hostedLink: null,
    imageType: 'Local',
    imageSource: 'Local',
    imageAltText: 'Home page screenshot',
    publicCodeLink: null,
    publicCodeSource: null
  }
];
