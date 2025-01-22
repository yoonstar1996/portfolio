import { Calendar, Mail, MapPin, Pencil, Phone, User } from "lucide-react";
import React from "react";
import IntroduceCard from "./IntroduceCard";
import LinkSection from "../common/LinkSection";

function AboutMe() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-[1.5rem] py-[4rem] text-black">
        <LinkSection label="ABOUT ME" linkTo="about" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <IntroduceCard label="이름" value="윤경민" Icon={User} />
          <IntroduceCard label="생년월일" value="96.11.10" Icon={Calendar} />
          <IntroduceCard label="위치" value="서울특별시 광진구" Icon={MapPin} />
          <IntroduceCard label="연락처" value="010-8950-0693" Icon={Phone} />
          <IntroduceCard
            label="이메일"
            value="yagobo1110@naver.com"
            Icon={Mail}
          />
          <IntroduceCard
            label="학력"
            value="경민대학교(세무회계과)"
            Icon={Pencil}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
