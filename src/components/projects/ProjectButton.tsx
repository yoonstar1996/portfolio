import { BookOpen } from "lucide-react";
import React from "react";

interface ProjectButtonProps {
  Icon?: React.ElementType;
  label?: string;
}

function ProjectButton({
  label = "README",
  Icon = BookOpen,
}: ProjectButtonProps) {
  return (
    <button className="flex items-center gap-1 rounded-lg border border-[#ccc] px-3 py-1">
      <Icon size={16} />
      <div className="font-semibold">{label}</div>
    </button>
  );
}

export default ProjectButton;
