export interface Project {
  isImportant: boolean;
  title: string;
  subTitle: string;
  desc: string;
  url?: string;
  github?: string;
  skills: string;
  role: string[];
  problem: string[];
  solve: string[];
  review: string[];
  imgSrc?: string[];
  hasImage: boolean;
  el?: "role" | "problem" | "solve" | "review";
}

export interface ProjectCardProps {
  project: Project;
}
