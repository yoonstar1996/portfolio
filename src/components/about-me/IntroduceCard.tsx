import React from "react";

interface IntroduceCardProps {
  label: string;
  value: string;
  Icon: React.ElementType;
}

function IntroduceCard({ label, value, Icon }: IntroduceCardProps) {
  return (
    <div className="flex items-center gap-5 w-full max-w-[14rem] mx-auto">
      <Icon className="w-8 h-8" />
      <div className="flex flex-col gap-1">
        <div className="font-semibold">{label}</div>
        <div className="font-bold">{value}</div>
      </div>
    </div>
  );
}

export default IntroduceCard;
