import React from "react";
import MoreViewButton from "./MoreViewButton";

function Main() {
  return (
    <div
      className="relative w-full"
      style={{
        background:
          "linear-gradient(180deg, rgba(112, 93, 80, 0.8) 0%, rgba(112, 93, 80, 0.8) 90%), url('/images/mainBg.jpg') center / cover no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto pt-[8.5rem] px-[1.5rem] pb-[4rem] text-center">
        <div className="flex flex-col gap-2 justify-center text-4xl font-black">
          <h1>윤경민</h1>
          <h1>프론트 엔드 개발자 포트폴리오</h1>
        </div>
        <hr className="w-[3.25rem] mx-auto my-[1.5rem] border-t-[0.2rem] border-[#f4623a]" />
        <div className="flex flex-col gap-2 justify-center text-2xl font-bold opacity-80 mb-8">
          <h2>안녕하세요.</h2>
          <h2>함께 성장하는 프론트엔드 개발자</h2>
          <h2>윤경민입니다.</h2>
        </div>
        <MoreViewButton />
      </div>
    </div>
  );
}

export default Main;
