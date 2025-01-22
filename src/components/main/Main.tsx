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
      <div className="mx-auto max-w-7xl px-[1.5rem] pb-[4rem] pt-[8.5rem] text-center">
        <div className="flex flex-col justify-center text-[58px] font-black">
          <h1>윤경민</h1>
          <h1>프론트 엔드 개발자 포트폴리오</h1>
        </div>
        <hr className="mx-auto my-[1.5rem] w-[3.25rem] border-t-[0.2rem] border-mainColor" />
        <div className="mb-8 flex flex-col justify-center gap-1 text-2xl font-bold opacity-80">
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
