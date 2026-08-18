export interface Social {
  label: string;
  url: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface AboutContent {
  summary: string;
  socials: Social[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
}

/**
 * Fallback content, used when the active style has no content of its own
 * at content/about/<style-id>/about.<style-id>.content.ts yet.
 */
export const aboutContent: AboutContent = {
  summary: 'Add a short introduction here.',
  socials: [],
  experience: [],
  education: [],
  skills: [],
};
