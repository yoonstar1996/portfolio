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
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-[2rem] w-full">
      <div className="flex gap-[1rem] items-center w-full sm:w-40">
        <Image src={imgSrc} width={32} height={32} alt="skill-image" />
        <div className="font-semibold text-lg">{text}</div>
      </div>

      <ul className="flex flex-wrap justify-start gap-[0.5rem] w-full">
        {labels.map((item) => (
          <li
            key={item.name}
            className="px-3 py-1 rounded-lg font-medium text-sm md:text-base"
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
