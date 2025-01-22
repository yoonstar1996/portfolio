import React from "react";
import LinkSection from "../common/LinkSection";
import { BACKEND_SKILLS, ETC_SKILLS, FRONTEND_SKILLS } from "@/utils/skill";
import SkillCard from "./SKillCard";

function Skills() {
  return (
    <section id="skills" className="w-full bg-yellow-400">
      <div className="mx-auto max-w-7xl px-[1.5rem] py-[4rem] text-black">
        <LinkSection label="SKILLS" linkTo="skills" borderColor="#111" />
        <div className="flex w-full flex-col gap-10 rounded-3xl bg-white/80 p-6 shadow-xl md:gap-8 md:p-8">
          <SkillCard
            labels={FRONTEND_SKILLS}
            text="Frontend"
            imgSrc="/images/skills/frontend.svg"
          />
          <SkillCard
            labels={BACKEND_SKILLS}
            text="Backend"
            imgSrc="/images/skills/backend.svg"
          />
          <SkillCard
            labels={ETC_SKILLS}
            text="ETC"
            imgSrc="/images/skills/etc.svg"
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
