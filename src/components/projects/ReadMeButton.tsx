import { BookOpen, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui";

import { Project } from "@/type/Project";
import Context from "./Context";

interface ReadMeButtonProps {
  project: Project;
}

function ReadMeButton({ project }: ReadMeButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-1 rounded-lg border border-[#ccc] px-3 py-1">
          <BookOpen size={16} />
          <div className="font-semibold">{"README"}</div>
        </button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader className="rounded-tl-lg rounded-tr-lg bg-black p-4 text-white">
          <div className="flex justify-between">
            <DialogTitle>README.md</DialogTitle>
            <DialogClose asChild>
              <X className="opacity-70 hover:cursor-pointer hover:opacity-100" />
            </DialogClose>
          </div>
        </DialogHeader>
        <div className="max-h-[75vh] overflow-y-auto break-keep p-4">
          <article className="px-3">
            {/* 타이틀 */}
            <h1 className="mb-6 border-b-[1px] border-b-[#ccc] pb-6 text-2xl font-bold">
              {project.title}
            </h1>

            <div className="flex flex-col gap-5">
              {/* 프로젝트 개요 */}
              <div>
                <h2 className="text-xl font-bold">🗒️ 프로젝트 개요</h2>
                <div className="my-3 flex flex-col gap-[2px]">
                  <div className="flex items-center gap-2">
                    <div>프로젝트명:</div>
                    <div className="text-lg font-semibold">{project.title}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div>기간:</div>
                    <div className="text-base font-medium text-[#4e4e4e]">
                      {project.subTitle}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div>목적:</div>
                    <div className="text-base font-medium">{project.desc}</div>
                  </div>
                </div>
              </div>

              {/* 기술 스택 */}
              <div>
                <h2 className="text-xl font-bold">🛠️ 기술 스택</h2>
                <div className="my-2 self-start break-keep">
                  {project.skills}
                </div>
              </div>

              {/* 주요 기능 */}
              <Context
                label="👨‍💻 주요 역할 및 기여"
                project={project}
                el="role"
              />

              {/* 문제 상황 */}
              {project.problem.length > 0 && (
                <Context label="❗ 문제 상황" project={project} el="problem" />
              )}

              {/* 해결 과정 */}
              {project.solve.length > 0 && (
                <Context label="🔎 해결 과정" project={project} el="solve" />
              )}

              {/* 성과 및 느낀 점 */}
              <Context
                label="🌱 성과 및 느낀 점"
                project={project}
                el="review"
              />
            </div>
          </article>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ReadMeButton;
