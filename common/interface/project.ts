export interface ProjectInfo {
  projectTitle: string;
  projectSubTitle: string;
  projectImageSrc: {
    dark: string;
    light: string;
  };
  projectSubDescs: {
    text: string;
    url?: string;
    onClick?: (url: string) => void;
    descText?: string;
  }[];
  projectImageAlt: string;
  projectSummary: string;
  projectMainFunction: string[];
  projectTechStack: {
    frontEnd: string;
    backEnd?: string;
  };
}
