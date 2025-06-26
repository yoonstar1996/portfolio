"use client";

import { useCheckStore } from "@/store/useCheckStore";

function Label() {
  const { isChecked, toggleChecked } = useCheckStore();

  return (
    <div className="mb-[2rem] flex items-center justify-center gap-1">
      <label htmlFor="checkbox" className="hover:cursor-pointer">
        주요 프로젝트만 보기
      </label>

      <input
        type="checkbox"
        id="checkbox"
        className="h-5 w-5 hover:cursor-pointer"
        checked={isChecked}
        onChange={toggleChecked}
      />
    </div>
  );
}

export default Label;
