"use client";

import React, { useEffect, useState } from "react";
import NavButton from "./NavButton";
import { scrollToSection, scrollToTop } from "@/utils/scroll";
import { Menu } from "lucide-react";

function Nav() {
  const [isOpened, setIsOpened] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);

  const handleMenuClick = () => {
    setIsOpened((prev) => !prev);
  };

  // 화면 크기기
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpened(false);
      }
    };

    // 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 클린업 함수 (컴포넌트 언마운트 시 이벤트 리스너 제거)
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 스크롤
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-10 text-black ${
        isScrollDown ? "bg-white text-black shadow-md" : "lg:bg-transparent lg:text-white"
      }`}
    >
      <div className="flex justify-between max-w-7xl mx-auto px-6 py-5 bg-white lg:bg-transparent">
        <NavButton onClick={scrollToTop} text="Yoonstar's Portfolio" className="text-2xl" />
        <Menu
          onClick={handleMenuClick}
          className="hover:cursor-pointer opacity-70 hover:opacity-100 block lg:hidden text-black lg:text-white"
        />
        <nav className="hidden lg:block">
          <NavButton onClick={() => scrollToSection("about")} text="About me" />
          <NavButton onClick={() => scrollToSection("skills")} text="Skills" />
          <NavButton onClick={() => scrollToSection("archiving")} text="Archiving" />
          <NavButton onClick={() => scrollToSection("projects")} text="Projects" />
        </nav>
      </div>
      <div
        className={`transition-all duration-200 ease-linear overflow-hidden ${
          isOpened ? "max-h-[252px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col bg-white items-start px-8">
          <NavButton className="py-3" onClick={() => scrollToSection("about")} text="About me" />
          <NavButton className="py-3" onClick={() => scrollToSection("skills")} text="Skills" />
          <NavButton
            className="py-3"
            onClick={() => scrollToSection("archiving")}
            text="Archiving"
          />
          <NavButton className="py-3" onClick={() => scrollToSection("projects")} text="Projects" />
        </nav>
      </div>
    </header>
  );
}

export default Nav;
