import React from "react";
import LinkSection from "../common/LinkSection";
import { BACKEND_SKILLS, ETC_SKILLS, FRONTEND_SKILLS } from "@/utils/skill";
import SkillCard from "./SKillCard";

function Skills() {
  return (
    <section id="skills" className="w-full bg-yellow-400">
      <div className="max-w-7xl mx-auto text-black px-4 md:px-[1.5rem] py-[4rem]">
        <LinkSection label="SKILLS" borderColor="#111" />
        <div className="bg-white/80 w-full rounded-3xl shadow-xl p-6 md:p-8 flex flex-col gap-10 md:gap-8">
          <SkillCard
            labels={FRONTEND_SKILLS}
            text="Frontend"
            imgSrc="/images/skills/frontend.svg"
          />
          <SkillCard labels={BACKEND_SKILLS} text="Backend" imgSrc="/images/skills/backend.svg" />
          <SkillCard labels={ETC_SKILLS} text="ETC" imgSrc="/images/skills/etc.svg" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
