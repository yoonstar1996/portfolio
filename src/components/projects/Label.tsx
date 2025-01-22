"use client";

import { useCheckStore } from "@/store/useCheckStore";
import React from "react";

function Label() {
  const { isChecked, toggleChecked } = useCheckStore();

  return (
    <div className="mb-[2rem] flex items-center justify-center gap-1">
      <label htmlFor="checkbox">주요 프로젝트만 보기</label>
      <input
        type="checkbox"
        id="checkbox"
        className="h-5 w-5"
        checked={isChecked}
        onChange={toggleChecked}
      />
    </div>
  );
}

export default Label;
