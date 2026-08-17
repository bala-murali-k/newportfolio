export interface Social {
  label: string;
  url: string;
}

export interface AboutContent {
  summary: string;
  socials: Social[];
}

/**
 * Fallback content, used when the active style has no content of its own
 * at content/about/<style-id>/about.<style-id>.content.ts yet.
 */
export const aboutContent: AboutContent = {
  summary: 'Add a short introduction here.',
  socials: [],
};
