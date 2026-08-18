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
    name: 'Your Name',
    title: 'Your Title',
  },
  intro: {
    summary: 'Add a short introduction here.',
  },
};
