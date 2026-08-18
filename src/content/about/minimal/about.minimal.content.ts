import type { AboutContent } from '../about.content';

export const aboutContent: AboutContent = {
  summary:
    'Frontend/full-stack dev, 1+ year in. React, REST APIs, clean components. I like fast pages and readable code.',
  socials: [],
  experience: [
    {
      role: 'Junior Software Developer',
      organization: 'Gove',
      location: 'Thirunelveli, Tamil Nadu',
      period: '09/2025 - Present',
      highlights: [
        'Built responsive React features for internal tools',
        'Wired up REST APIs with Axios and Fetch for transactions and records',
        'Sped up rendering, cut down UI bugs via peer review',
        'Worked Agile, cross-functional',
      ],
    },
    {
      role: 'Mentor, Software Testing (Volunteer)',
      organization: 'Gove',
      location: 'Thirunelveli, Tamil Nadu',
      period: '12/2025 - 01/2026',
      highlights: ['Trained and mentored three testers on workflows and QA practices'],
    },
  ],
  education: [
    {
      degree: "Master's in Computer Application",
      school: 'PET Engineering College',
      location: 'Vallioor, Tirunelveli, TN',
      period: '07/2021 - 07/2023',
      gpa: '7.3',
    },
    {
      degree: "Bachelor's in Computer Science",
      school: 'Thiagarajar College, Madurai',
      location: 'Madurai, TN',
      period: '07/2017 - 07/2020',
      gpa: '6.5',
    },
  ],
  skills: [
    { category: 'Frontend', items: ['React', 'JavaScript', 'Svelte', 'HTML5', 'CSS3', 'Responsive Design'] },
    { category: 'APIs & Data', items: ['REST APIs', 'Axios', 'Fetch API', 'JSON'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'Debugging', 'Agile Basics'] },
  ],
};
