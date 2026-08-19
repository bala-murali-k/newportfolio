export interface ExpertiseItem {
  /** Display index, e.g. '01' - stored explicitly rather than derived so
   *  items can be reordered or skip numbers without the markup changing. */
  number: string;
  title: string;
  description: string;
  /** Proficiency shown by the percentage bar, 0-100. */
  level: number;
}

export interface SpotlightContent {
  /** Display index, e.g. '01' - same rationale as ExpertiseItem.number. */
  number: string;
  title: string;
  /** Short, punchy lines describing the featured work - rendered one per line. */
  highlights: string[];
  preview: {
    /** Placeholder label shown until a real preview image/embed exists. */
    label: string;
  };
  cta: {
    label: string;
    /** Internal route, e.g. '/projects'. */
    href: string;
  };
}

export interface ConnectContent {
  heading: string;
  questions: string[];
  statement: string;
  cta: {
    label: string;
    href: string;
  };
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
  spotlight: SpotlightContent;
  connect: ConnectContent;
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
  spotlight: {
    number: '01',
    title: 'This Portfolio',
    highlights: [
      'Minimal interface.',
      'Thoughtful interactions.',
      'Built from scratch.',
    ],
    preview: {
      label: 'Preview',
    },
    cta: {
      label: 'Explore',
      href: '/projects',
    },
  },
  connect: {
    heading: 'CONNECT',
    questions: [
      'Got an idea, a project,',
      'or just want to say hello?',
    ],
    statement: 'My inbox is always open.',
    cta: {
      label: 'Say hello',
      href: 'mailto:hello@example.com',
    },
  },
};
