"use client";

import { ArrowUp } from "lucide-react";
import React, { useState, useEffect } from "react";

function UpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      const scrollPercentage =
        (scrollTop / (scrollHeight - clientHeight)) * 100;

      if (scrollPercentage > 30) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleUpClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleUpClick}
      className={`fixed bottom-8 z-50 rounded-full bg-slate-500 p-2 opacity-70 transition-all duration-500 ease-in-out hover:opacity-100 ${isVisible ? "right-5 translate-x-0 opacity-70" : "right-[-60px] translate-x-10 opacity-0"} `}
    >
      <ArrowUp size={32} />
    </button>
  );
}

export default UpButton;
