import Nav from "@/components/nav/Nav";
import Main from "@/components/main/Main";
import AboutMe from "@/components/about-me/AboutMe";
import Skills from "@/components/skills/Skills";
import Archiving from "@/components/archiving/Archiving";
import Projects from "@/components/projects/Projects";
import Career from "@/components/career/Career";
import UpButton from "@/components/nav/UpButton";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="relative box-border font-roboto text-white">
      <Nav />
      <Main />
      <AboutMe />
      <Skills />
      <Archiving />
      <Projects />
      <Career />
      <UpButton />
      <Footer />
    </div>
  );
}
