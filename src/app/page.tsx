import AboutMe from "@/components/about-me/AboutMe";
import Main from "@/components/main/Main";
import Nav from "@/components/nav/Nav";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className=" box-border text-white font-roboto">
      <Nav />
      <Main />
      <AboutMe />
      <Skills />
    </div>
  );
}
