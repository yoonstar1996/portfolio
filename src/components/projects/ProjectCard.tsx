import { Image } from "lucide-react";
import Link from "next/link";
import React from "react";
import ProjectButton from "./ProjectButton";

interface Project {
  isImportant: boolean;
  title: string;
  subTitle: string;
  desc: string;
  func: string[];
  url: string;
  skills: string;
  hasImage: boolean;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-2xl p-[2rem] shadow-lg">
      {/* 이름 */}
      <h4
        className="mb-2 self-start rounded-lg px-2 py-1 font-bold text-white"
        style={{
          backgroundColor: project.isImportant ? "#14b8a6 " : "#6c757d",
        }}
      >
        {project.title}
      </h4>
      {/* 진행날짜 */}
      <div className="mb-2 border-b-[1px] pb-2 text-sm text-[#6c757d]">
        {project.subTitle}
      </div>
      {/* 프로젝트 설명 */}
      <div className="mb-4 break-keep">
        <h5 className="mb-2 font-bold">{project.desc}</h5>
        <ul>
          {project.func.map((item, index) => (
            <li key={`${item} - ${index + 1}`} className="text-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* 링크 */}
      <div className="mb-4 border-l-4 border-blue-500 pl-3">
        <Link
          href={project.url}
          target="_blank"
          className="text-blue-500 hover:cursor-pointer hover:underline"
        >
          {project.url}
        </Link>
      </div>
      {/* 기술 */}
      <div className="mb-4 self-start break-keep rounded-lg border border-yellow-500 bg-amber-100 px-3 py-1 text-sm">
        {project.skills}
      </div>
      {/* README */}
      <div className="flex gap-2">
        <ProjectButton />
        {project.hasImage && <ProjectButton label="이미지" Icon={Image} />}
      </div>
    </div>
  );
}

export default ProjectCard;
