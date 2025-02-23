import { cn } from "@/utils/cn";
import React from "react";

interface NavButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

function NavButton({ text, className, onClick, ...props }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-0 font-medium opacity-70 hover:opacity-100",
        className,
      )}
      {...props}
    >
      {text}
    </button>
  );
}

export default NavButton;
