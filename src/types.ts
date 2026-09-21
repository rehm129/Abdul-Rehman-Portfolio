export interface Project {
  id: string;
  title: string;
  category: string;
  type: 'real' | 'concept';
  tagline: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featuredPoints: string[];
  role: string;
  year: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  category: 'Design' | 'Development' | 'AI & Automation' | 'Growth & Strategy';
  tags: string[];
  previewType: 'design' | 'frontend' | 'automation' | 'seo';
}

export interface SkillCategory {
  title: string;
  skills: string[];
  contextTags: string[];
}

export interface ToolItem {
  name: string;
  category: string;
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}
