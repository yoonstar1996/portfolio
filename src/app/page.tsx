import AboutMe from "@/components/about-me/AboutMe";
import Archiving from "@/components/archiving/Archiving";
import Main from "@/components/main/Main";
import Nav from "@/components/nav/Nav";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="box-border font-roboto text-white">
      <Nav />
      <Main />
      <AboutMe />
      <Skills />
      <Archiving />
      <Projects />
    </div>
  );
}
