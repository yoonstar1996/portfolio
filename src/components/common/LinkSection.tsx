"use client";

import { scrollToSection } from "@/utils/scroll";
import { Link } from "lucide-react";
import React from "react";

interface LinkSectionProps {
  label: string;
  linkTo: string;
  borderColor?: string;
  textColor?: string;
}

function LinkSection({
  label,
  linkTo,
  borderColor = "#ccc",
  textColor = "#111",
}: LinkSectionProps) {
  return (
    <div className="mb-[3rem] flex items-center justify-center gap-3">
      <Link
        onClick={() => scrollToSection(linkTo)}
        size={32}
        className="text-gray-600 opacity-50 hover:cursor-pointer hover:opacity-100"
      />
      <h3
        className="border-b-[1px] text-[32px] font-black lg:text-[44px]"
        style={{ borderColor, color: textColor }}
      >
        {label}
      </h3>
    </div>
  );
}

export default LinkSection;
