"use client";

import { scrollToSection } from "@/utils/scroll";

function MoreViewButton() {
  return (
    <button
      onClick={() => scrollToSection("about")}
      className="rounded-md bg-mainColor px-[2rem] py-[1rem] hover:opacity-90 active:scale-[0.97]"
    >
      더 알아보기 ↓
    </button>
  );
}

export default MoreViewButton;
