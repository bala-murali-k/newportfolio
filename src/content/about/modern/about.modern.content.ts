import type { AboutContent } from '../about.content';

export const aboutContent: AboutContent = {
  summary:
    'Junior Full Stack Developer with 1+ year of experience building and maintaining responsive web applications using JavaScript and React to support daily internal operations. Experienced in REST API integration, frontend performance optimization, and collaborative development using Git, with a strong focus on clean, maintainable code and user-centric UI development.',
  socials: [],
  experience: [
    {
      role: 'Junior Software Developer',
      organization: 'Gove',
      location: 'Thirunelveli, Tamil Nadu',
      period: '09/2025 - Present',
      highlights: [
        'Developed responsive frontend features using React to support internal web applications',
        'Integrated REST APIs using Axios and Fetch API for transaction and records management',
        'Improved page load performance and UI responsiveness through optimized component rendering',
        'Reduced UI bugs by debugging issues and participating in peer code reviews',
        'Collaborated with cross-functional teams in an Agile development environment',
      ],
    },
    {
      role: 'Mentor, Software Testing (Volunteer)',
      organization: 'Gove',
      location: 'Thirunelveli, Tamil Nadu',
      period: '12/2025 - 01/2026',
      highlights: [
        'Trained and mentored three software testers on project workflows, testing practices, and collaboration with developers',
      ],
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
    {
      category: 'Frontend',
      items: ['CSS3', 'HTML5', 'JavaScript', 'React', 'Responsive Web Design', 'Svelte', 'UI Development'],
    },
    { category: 'APIs & Data', items: ['Axios', 'Fetch API', 'JSON', 'REST API Integration'] },
    {
      category: 'Tools & Practices',
      items: [
        'Agile Development Basics',
        'Clean Code Practices',
        'Debugging',
        'Git',
        'GitHub',
        'Version Control',
        'Web Performance Optimization',
      ],
    },
  ],
};
