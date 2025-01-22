"use client";

import React from "react";
import LinkSection from "../common/LinkSection";
import Label from "./Label";
import ProjectCard from "./ProjectCard";
import { PortfolioProject, WattsUpProject } from "@/data/ProjectData";
import { useCheckStore } from "@/store/useCheckStore";

function Projects() {
  const isChecked = useCheckStore((state) => state.isChecked);

  const projectList = [PortfolioProject, WattsUpProject].filter(
    (project) => !isChecked || project.isImportant,
  );

  return (
    <section id="projects" className="bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl px-[1.5rem] py-[4rem] text-black">
        <LinkSection label="PROJECTS" linkTo="projects" borderColor="#111" />
        <Label />
        <div className="grid grid-cols-1 gap-[2rem] lg:grid-cols-2">
          {projectList.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
