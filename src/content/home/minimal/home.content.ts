import type { HomeContent } from '../home.content';

export const homeContent: HomeContent = {
  hero: {
    name: 'Bala Murali',
    title: 'Software Engineer.',
  },
  intro: {
    summary: 'Less noise, more signal.',
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
