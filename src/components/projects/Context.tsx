import { Project } from "@/type/Project";

interface ContextProps {
  label: string;
  project: Project;
  el: "role" | "problem" | "solve" | "review";
}

export default function Context({ label, project, el }: ContextProps) {
  return (
    <div>
      <h2 className="text-xl font-bold">{label}</h2>
      <div className="my-2">
        {project[el] &&
          project[el].map((data, index) => (
            <div
              key={index}
              className="my-[3px] flex gap-2 leading-6 tracking-[0.15px]"
            >
              <span className="shrink-0 font-bold text-black">•</span>
              <span>{data}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
