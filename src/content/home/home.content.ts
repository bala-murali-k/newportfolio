export interface ExpertiseItem {
  /** Display index, e.g. '01' - stored explicitly rather than derived so
   *  items can be reordered or skip numbers without the markup changing. */
  number: string;
  title: string;
  description: string;
  /** Proficiency shown by the percentage bar, 0-100. */
  level: number;
}

export interface HomeContent {
  hero: {
    name: string;
    title: string;
  };
  intro: {
    summary: string;
  };
  expertise: ExpertiseItem[];
}

/**
 * Fallback content, used when the active style has no content of its own
 * at content/home/<style-id>/home.<style-id>.content.ts yet.
 */
export const homeContent: HomeContent = {
  hero: {
    name: 'Bala Murali',
    title: 'Software developer',
  },
  intro: {
    summary: 'Add a short introduction here.',
  },
  expertise: [
    {
      number: '01',
      title: 'Frontend',
      description: 'Interfaces, interactions & design systems',
      level: 90,
    },
    {
      number: '02',
      title: 'Backend',
      description: 'APIs, databases & application architecture',
      level: 80,
    },
    {
      number: '03',
      title: 'UI / UX',
      description: 'Visual systems, usability & interaction',
      level: 75,
    },
    {
      number: '04',
      title: 'Full-Stack',
      description: 'Turning ideas into complete products',
      level: 85,
    },
  ],
};
