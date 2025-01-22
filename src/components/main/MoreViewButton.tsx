"use client";

import { scrollToSection } from "@/utils/scroll";
import React from "react";

function MoreViewButton() {
  return (
    <button
      onClick={() => scrollToSection("about")}
      className="rounded-md bg-mainColor px-[2rem] py-[1rem]"
    >
      더 알아보기 ↓
    </button>
  );
}

export default MoreViewButton;
