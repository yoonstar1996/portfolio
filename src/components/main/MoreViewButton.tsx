"use client";

import { scrollToSection } from "@/utils/scroll";
import React from "react";

function MoreViewButton() {
  return (
    <button
      onClick={() => scrollToSection("about")}
      className="rounded-md bg-teal-500 py-[1rem] px-[2rem]"
    >
      더 알아보기 ↓
    </button>
  );
}

export default MoreViewButton;
