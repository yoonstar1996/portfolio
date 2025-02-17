import { BookOpen, X } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui";
import { Project } from "@/type/Project";

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

            {/* 진행 날짜 */}
            <div className="mb-5 text-sm font-medium">{project.subTitle}</div>

            {/* 주요 기능 */}
            <h2 className="text-xl font-bold">📄 주요기능</h2>
            <div className="mb-5 flex flex-col gap-2 font-medium">
              {project.func.map((item, index) => {
                if (item.startsWith("/")) {
                  return (
                    <ProjectImage
                      key={index}
                      src={item}
                      alt={`image_${index}`}
                    />
                  );
                } else if (item.startsWith("@")) {
                  return <MainDesc key={index}>{item.substring(1)}</MainDesc>;
                } else if (item.startsWith("#")) {
                  return <SubDesc key={index}>{item.substring(1)}</SubDesc>;
                } else if (item.startsWith("$")) {
                  return <SubTitle key={index}>{item.substring(1)}</SubTitle>;
                } else {
                  return <MainTitle key={index}>{item}</MainTitle>;
                }
              })}
            </div>

            {/* 기술 스택 */}
            <h2 className="text-xl font-bold">🛠️ 기술 스택</h2>
            <div className="mb-5 self-start break-keep px-3 py-1 text-sm">
              {project.skills}
            </div>

            {project.review && (
              <>
                <h2 className="mt-6 text-xl font-bold">📝 프로젝트 리뷰</h2>
                <div className="mt-3 whitespace-pre-line rounded-lg bg-[#f5f5f5] p-4 text-gray-700">
                  {project.review}
                </div>
              </>
            )}

            {/* 설치 및 실행 방법
            <h2 className="mb-5 text-xl font-bold">
              ⚙️ 프로젝트 설치 및 실행 방법
            </h2>
            <pre className="rounded-lg bg-[#f5f5f5] p-[1rem]">
              <code>
                # 의존성 설치
                <br />
                npm install
                <br />
                <br />
                # 개발 서버 실행
                <br />
                npm run dev
              </code>
            </pre> */}
          </article>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ReadMeButton;

const MainTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-3 text-xl font-bold text-black before:mr-2 before:content-['•']">
    {children}
  </h2>
);

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-1 text-lg font-semibold text-gray-900">{children}</h3>
);

const MainDesc = ({ children }: { children: React.ReactNode }) => (
  <p className="pl-4 text-gray-700 before:mr-2 before:content-['◦']">
    {children}
  </p>
);

const SubDesc = ({ children }: { children: React.ReactNode }) => (
  <p className="ml-10 border-l-2 border-gray-300 pl-4 text-gray-600">
    {children}
  </p>
);

const ProjectImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="my-4 flex justify-start">
    <img
      src={`/images/${src}`}
      alt={alt}
      className="max-w-md rounded-md shadow-lg"
    />
  </div>
);
