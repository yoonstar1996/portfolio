import { Link } from "lucide-react";
import React from "react";

interface LinkSectionProps {
  label: string;
  borderColor?: string;
}

function LinkSection({ label, borderColor = "#ccc" }: LinkSectionProps) {
  return (
    <div className="flex gap-3 items-center justify-center mb-[3rem]">
      <Link size={32} className="opacity-65 hover:opacity-100 hover:cursor-pointer" />
      <h3 className="text-4xl font-black border-b-[1px] pb-2" style={{ borderColor }}>
        {label}
      </h3>
    </div>
  );
}

export default LinkSection;
