export interface Job {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  skills: string[];
}

export const JOBS: Job[] = [
  {
    company: 'Snapchat',
    role: 'Software Engineer',
    startDate: '2022',
    endDate: '2025',
    responsibilities: [
      'Worked within Agile scrum teams, actively participating in sprints and daily stand-ups to deliver high-quality features for Snapchat for Web and Ads Monetization.',
      '(Snapchat for Web): Built responsive emoji picker for Snapchat Web chat, improving user interaction across browsers. Created UI flows for browser-level camera and mic permission requests (Safari & Chrome). Contributed to My AI (Snapchat + OpenAI), authored shared UI component docs for visual consistency across teams, and enabled LaTeX/markdown support.',
      //   "(Ads Monetization): Worked on Instant Create, a tool for small businesses to rapidly launch ads using smart templates, helping improve ad creation time and usability, including quick budget/duration settings and preview tools. Spearheaded the development and expansion of Snapchat's internal UI component library and design system, contributing over 10 key components and conducting regular code reviews to ensure visual consistency and quality across diverse product teams. Authored and maintained technical documentation for optimizing reusable UI components, facilitating efficient adoption and consistent implementation of the internal design system across the engineering organization.",
      '(Performance Review Internal Application): Developed features like outlier detection in employee performance cycles and designed bucket categorization UI for performance review allocations. Fully rebuilt and optimized the rich text editor, replacing deprecated third-party dependencies and enabling stable custom formatting, reducing internal support tickets.',
      '(Falcon): Led front-end work on internal performance analytics tools used by Snap engineers to monitor regressions and A/B test metrics across commits. Implemented GitHub integration to dynamically pull commit data and track metric impacts like camera load time, app startup, etc.',
    ],
    skills: [
      'TypeScript',
      'React',
      'Storybook',
      'Jest/RTL',
      'Redux',
      'Java',
      'CSS/SASS',
    ],
  },
  {
    company: 'Sandia National Labs',
    role: 'Software Engineer',
    startDate: '2021',
    endDate: '2022',
    responsibilities: [
      'Developed and deployed over 200 mission-critical internal web pages using Vue.js, significantly boosting accessibility metrics from 35% to 95% and improving the user experience for all personnel. Collaborated effectively within Agile development teams and participated in regular stand-ups.',
      "Spearheaded the creation and adoption of a comprehensive UI component library, serving as a foundational element of Sandia's internal design system and improving development efficiency across multiple teams by standardizing design patterns.",
      'Collaborated with UX/UI teams and product owners to translate complex requirements into intuitive and high-performing interfaces.',
    ],
    skills: ['JavaScript', 'React', 'CSS'],
  },
  {
    company: 'Villa',
    role: 'Founder / Full-Stack Product Engineer',
    startDate: '2024',
    endDate: 'Current',
    responsibilities: [
      'Led product design and development of Villa, a full stack app (Next.js + Firebase for auth and database handling) that streamlines the creative and administrative process for music professionals. Led Figma prototyping and early user testing.',
      'Designed and launched a legally-compliant split sheet agreement creator with email-based signature tracking and status updates.',
    ],
    skills: ['JavaScript', 'React', 'CSS'],
  },
];

export interface PortfolioProject {
  name: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  skills: string[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    name: 'Villa',
    description:
      'A full stack app that streamlines the creative and administrative process for music professionals. Built with Next.js and Firebase.',
    imageUrl: '/portfolio_project_photos/villa_app_screenshot.svg',
    projectUrl: 'https://villa-kappa.vercel.app/',
    skills: ['Next.js', 'Firebase', 'TypeScript', 'CSS/SASS'],
  },
  {
    name: 'Champagne Therapy Site',
    description:
      'Designed and developed the official website for Champagne Therapy, a music publishing label. The site features artist profiles, catalog browsing, and a modern, responsive design to showcase the label’s roster and releases. ',
    imageUrl: '/portfolio_project_photos/villa_app_screenshot.svg',
    projectUrl: 'https://champagne-frontend.vercel.app/',
    skills: ['Next.js', 'Firebase', 'TypeScript', 'CSS/SASS'],
  },
  {
    name: 'Saint Steph Official Site',
    description:
      'Designed and developed the official website for Saint Steph, a music publishing label. The site features artist profiles, catalog browsing, and a modern, responsive design to showcase the label’s roster and releases. ',
    imageUrl: '/portfolio_project_photos/villa_app_screenshot.svg',
    projectUrl: 'http://saintstephmusic.com',
    skills: ['Next.js', 'Firebase', 'TypeScript', 'CSS/SASS'],
  },
];
