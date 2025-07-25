// Portfolio Data Types and Example Data

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface DesignPiece {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tools: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  dates: string;
  responsibilities: string[];
  tools: string[];
}

export const projects: Project[] = [
  {
    id: 'dev1',
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my work and skills.',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Project+Image',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    liveUrl: 'https://example.com/portfolio',
    githubUrl: 'https://github.com/rollyparedes/portfolio',
  },
  {
    id: 'dev2',
    title: 'E-commerce Store',
    description: 'A full-featured e-commerce platform with shopping cart and payment integration.',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Project+Image',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
    liveUrl: 'https://example.com/store',
    githubUrl: 'https://github.com/rollyparedes/ecommerce-store',
  },
  {
    id: 'dev3',
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support and user authentication.',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Project+Image',
    technologies: ['Next.js', 'TypeScript', 'Prisma'],
    liveUrl: 'https://example.com/blog',
    githubUrl: 'https://github.com/rollyparedes/blog-platform',
  },
];

export const designPieces: DesignPiece[] = [
  {
    id: 'design1',
    title: 'E-sports Banner',
    description: 'Event banner design for the "Clash of Barangays MLBB 2K24 Tournament," demonstrating effective layout, typography, and brand integration for a local esports event',
    imageUrl: '/images/esports.jpg',
    tools: ['Adobe Illustrator', 'Photoshop'],
  },
  {
    id: 'design2',
    title: 'Clash of Barangays: Official Shoutcasters',
    description: 'Event graphic showcasing official shoutcasters for an esports tournament, demonstrating effective use of imagery, text hierarchy, and branding.',
    imageUrl: '/images/ casters.png',
    tools: ['Adobe Photoshop'],
  },
  {
    id: 'design3',
    title: 'Coeus Review: National Online Review for School Heads',
    description: 'Designed a promotional graphic for the "National Online Review for School Heads (NQEHS 2024)" by Coeus Review and Training Specialists, Inc. This visual effectively highlights key program details, benefits, and contact information, aiming to attract school heads for professional development.',
    imageUrl: '/images/promo.png',
    tools: ['Adobe Photoshop',],
  },
];

export const services: Service[] = [
  {
    id: 'service1',
    title: 'Web Development',
    description: 'Building responsive and modern websites tailored to your needs.',
  },
  {
    id: 'service2',
    title: 'Graphic Design',
    description: 'Creating stunning graphics, logos, and branding materials.',
  },
  {
    id: 'service3',
    title: 'Virtual Assistance',
    description: 'Providing administrative support and organization for your business.',
  },
];

export const workExperience: WorkExperience[] = [
  {
    id: 'work1',
    title: 'Review Program Coordinator/Administrator',
    company: 'Coeus Review and Training Specialist, Inc.',
    dates: '2023-2025',
    responsibilities: [
      'Coordinated review schedules for lecturers and students',
      'Managed logistics such as appointments and seating',
      'Handled social media for branding and updates',
      'Assisted with internal operations for virtual learning'
    ],
    tools: ['Google Workspace', 'Zoom', 'Canva', 'Trello', 'Asana']
  },
  {
    id: 'work2',
    title: 'Graphic Designer / Social Media Manager / Web Designer',
    company: 'Freelancer Jobs',
    dates: '2018-2020',
    responsibilities: [
      'Created logos, branding kits, and web layouts',
      'Managed client social media via content planning and ads',
      'Conducted basic SEO and online marketing for visibility',
      'Collaborated with development teams for website updates'
    ],
    tools: ['Adobe Photoshop', 'Illustrator', 'WordPress', 'Hootsuite', 'Mailchimp', 'HubSpot']
  }
]; 