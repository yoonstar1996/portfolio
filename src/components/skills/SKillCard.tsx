import Image from "next/image";
import React from "react";

type LabelType = {
  name: string;
  textColor: string;
  bgColor: string;
};

interface SkillCardProps {
  labels: LabelType[];
  text: string;
  imgSrc: string;
}

function SkillCard({ labels, text, imgSrc }: SkillCardProps) {
  return (
    <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center md:gap-[2rem]">
      <div className="flex w-full items-center gap-[1rem] sm:w-40">
        <Image src={imgSrc} width={32} height={32} alt="skill-image" />
        <div className="text-lg font-semibold">{text}</div>
      </div>

      <ul className="flex w-full flex-wrap justify-start gap-[0.5rem]">
        {labels.map((item) => (
          <li
            key={item.name}
            className="rounded-lg px-3 py-1 text-sm font-medium md:text-base"
            style={{ color: item.textColor, backgroundColor: item.bgColor }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;
