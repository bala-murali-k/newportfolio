export interface HomeContent {
  hero: {
    name: string;
    title: string;
  };
  intro: {
    summary: string;
  };
}

/**
 * Fallback content, used when the active style has no content of its own
 * at content/home/<style-id>/home.<style-id>.content.ts yet.
 */
export const homeContent: HomeContent = {
  hero: {
    name: 'Bala Murali',
    title: 'Frontend / Full Stack Developer (React)',
  },
  intro: {
    summary:
      'Junior Full Stack Developer with 1+ year of experience building responsive web applications with React.',
  },
};
