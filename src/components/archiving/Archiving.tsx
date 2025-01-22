import React from "react";
import LinkSection from "../common/LinkSection";

import ArchivingCard from "./ArchivingCard";

function Archiving() {
  return (
    <section id="archiving" className="bg-[#222]">
      <div className="mx-auto max-w-7xl px-[1.5rem] py-[4rem] text-black">
        <LinkSection label="ARCHIVING" linkTo="archiving" textColor="#fff" />
        <div className="flex flex-col items-center gap-[2rem] lg:flex-row lg:justify-center">
          <ArchivingCard
            imgSrc="/images/archiving/github-logo.webp"
            alt="github-logo"
            label="https://github.com/yoonstar1996"
            desc="소스코드 저장소"
          />
          <ArchivingCard
            imgSrc="/images/archiving/velog-logo.png"
            alt="velog-logo"
            label="https://velog.io/@yoonstar/posts"
            desc="공부 및 지식 공유 블로그"
          />
        </div>
      </div>
    </section>
  );
}

export default Archiving;
