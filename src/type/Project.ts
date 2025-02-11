export interface Project {
  isImportant: boolean;
  title: string;
  subTitle: string;
  desc: string;
  url?: string;
  github: string;
  skills: string;
  func: string[];
  hasImage: boolean;
  imgSrc?: string[];
  review?: string;
}

export interface ProjectCardProps {
  project: Project;
}
