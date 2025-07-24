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
    title: 'Brand Logo',
    description: 'A modern and minimalistic logo for a tech startup.',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Design+Image',
    tools: ['Adobe Illustrator', 'Figma'],
  },
  {
    id: 'design2',
    title: 'Event Poster',
    description: 'A vibrant poster design for a music festival.',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Design+Image',
    tools: ['Adobe Photoshop', 'Canva'],
  },
  {
    id: 'design3',
    title: 'Business Card',
    description: 'A sleek business card design for a consulting firm.',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF?text=Design+Image',
    tools: ['Figma', 'Adobe InDesign'],
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