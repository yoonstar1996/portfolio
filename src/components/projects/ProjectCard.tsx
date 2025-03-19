import { ProjectCardProps } from "@/type/Project";
import Link from "next/link";
import ImageButton from "./ImageButton";
import ReadMeButton from "./ReadMeButton";

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-2xl p-[2rem] shadow-custom">
      {/* 이름 */}
      <h4
        className="mb-2 self-start rounded-lg px-3 py-2 font-bold text-white"
        style={{
          backgroundColor: project.isImportant ? "#1492b8 " : "#6c757d",
        }}
      >
        {project.title}
      </h4>
      {/* 진행날짜 */}
      <div className="mb-2 border-b-[1px] pb-2 text-sm text-subTextColor">
        {project.subTitle}
      </div>
      {/* 프로젝트 설명 */}
      <div className="mb-4 break-keep">
        <h5 className="mb-2 font-bold">{project.desc}</h5>
      </div>
      {/* 링크 */}
      {project.url && (
        <div className="mb-4 flex items-center gap-2 lg:gap-4">
          <div className="min-w-[46px]">URL</div>
          <div className="border-l-4 border-blue-500 pl-3">
            <Link
              href={project.url}
              target="_blank"
              className="break-words text-blue-500 hover:cursor-pointer hover:underline"
              style={{ overflowWrap: "anywhere" }}
            >
              {project.url}
            </Link>
          </div>
        </div>
      )}
      {project.github && (
        <div className="mb-4 flex items-center gap-2 lg:gap-4">
          <div className="min-w-[46px]">Github</div>
          <div className="border-l-4 border-[#0d1117] pl-3">
            <Link
              href={project.github || "#"}
              target="_blank"
              className="break-words text-[#0d1117] hover:cursor-pointer hover:underline"
              style={{ overflowWrap: "anywhere" }}
            >
              {project.github}
            </Link>
          </div>
        </div>
      )}
      {/* 기술 */}
      <div className="mb-4 self-start break-keep rounded-lg border border-yellow-500 bg-amber-100 px-3 py-1 text-sm">
        {project.skills}
      </div>

      {/* README */}
      <div className="flex gap-2">
        <ReadMeButton project={project} />
        {project.hasImage && project.imgSrc && (
          <ImageButton images={project.imgSrc} />
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
