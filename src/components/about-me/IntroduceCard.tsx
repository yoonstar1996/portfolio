import React from "react";

interface IntroduceCardProps {
  label: string;
  value: string;
  Icon: React.ElementType;
}

function IntroduceCard({ label, value, Icon }: IntroduceCardProps) {
  return (
    <div className="mx-auto flex w-full max-w-[14rem] items-center gap-5">
      <Icon className="h-8 w-8" />
      <div className="flex flex-col gap-1">
        <div className="font-semibold">{label}</div>
        <div className="font-bold">{value}</div>
      </div>
    </div>
  );
}

export default IntroduceCard;
