import campusContributorMockup from '../assets/campus-contributor-mockup.svg';
import accessibleTransitMockup from '../assets/accessible-transit-mockup.svg';
import communityResourceMockup from '../assets/community-resource-mockup.svg';
import sfuOssDashboardMockup from '../assets/sfu-oss-dashboard-mockup.svg';

export const projects = [
  {
    name: 'Campus Contributor Portal',
    description:
      'A platform for onboarding SFU students to open source projects with curated issues, mentorship notes, and contribution guidelines.',
    tech: ['TypeScript', 'Next.js', 'GraphQL'],
    link: '#',
    image: campusContributorMockup,
    imageAlt: 'Mockup of the Campus Contributor Portal dashboard'
  },
  {
    name: 'Accessible Transit Toolkit',
    description:
      'Open data visualizations that advocate for better accessibility in public transit using real-time GTFS data.',
    tech: ['React', 'D3.js', 'Netlify Functions'],
    link: '#',
    image: accessibleTransitMockup,
    imageAlt: 'Stylized transit routes and analytics widgets'
  },
  {
    name: 'Community Resource Hub',
    description:
      'A static site generator that aggregates tutorials, events, and notes from club workshops for easy access.',
    tech: ['Astro', 'Markdown', 'Tailwind CSS'],
    link: '#',
    image: communityResourceMockup,
    imageAlt: 'Illustrated cards for workshops, notes, and tutorials'
  },
  {
    name: 'Open Source Success Dashboard',
    description:
      'A contributor success dashboard that highlights pull requests, mentorship signals, and impact metrics across club projects.',
    tech: ['Vue', 'Vite', 'Supabase'],
    link: '#',
    image: sfuOssDashboardMockup,
    imageAlt: 'Dashboard mockup showing pull request statistics and charts'
  }
];
