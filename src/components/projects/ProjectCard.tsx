import { ProjectCardProps } from "@/type/Project";
import Link from "next/link";
import ImageButton from "./ImageButton";
import ReadMeButton from "./ReadMeButton";

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl p-[2rem] shadow-custom">
      {/* 상단 정보 묶음 */}
      <div className="flex flex-grow flex-col">
        {/* 이름 */}
        <h4
          className="mb-2 self-start rounded-lg px-3 py-2 font-bold text-white"
          style={{
            backgroundColor: project.isImportant ? "#1492b8" : "#6c757d",
          }}
        >
          {project.title}
        </h4>

        {/* 진행날짜 */}
        <div className="mb-2 border-b-[1px] pb-2 text-sm text-subTextColor">
          {project.subTitle}
        </div>

        {/* 설명 */}
        <div className="mb-4 break-keep">
          <h5 className="mb-2 font-bold">{project.desc}</h5>
        </div>

        {/* URL */}
        <div className="mb-4 flex min-h-[24px] items-center gap-2 lg:gap-4">
          <div className="min-w-[46px]">URL</div>
          <div className="border-l-4 border-blue-500 pl-3">
            {project.url ? (
              <Link
                href={project.url}
                target="_blank"
                className="break-words text-blue-500 hover:cursor-pointer hover:underline"
                style={{ overflowWrap: "anywhere" }}
              >
                {project.url}
              </Link>
            ) : (
              <span className="text-gray-400">-</span>
            )}
          </div>
        </div>

        {/* Github */}
        <div className="mb-4 flex min-h-[24px] items-center gap-2 lg:gap-4">
          <div className="min-w-[46px]">Github</div>
          <div className="border-l-4 border-[#0d1117] pl-3">
            {project.github ? (
              <Link
                href={project.github}
                target="_blank"
                className="break-words text-[#0d1117] hover:cursor-pointer hover:underline"
                style={{ overflowWrap: "anywhere" }}
              >
                {project.github}
              </Link>
            ) : (
              <span className="text-gray-400">-</span>
            )}
          </div>
        </div>

        {/* 기술 스택 */}
        <div className="mb-4 self-start break-keep rounded-lg border border-yellow-500 bg-amber-100 px-3 py-1 text-sm">
          {project.skills}
        </div>
      </div>

      {/* 하단 버튼 고정 */}
      <div className="mt-auto flex gap-2 pt-2">
        <ReadMeButton project={project} />
        {project.hasImage && project.imgSrc && (
          <ImageButton images={project.imgSrc} />
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
