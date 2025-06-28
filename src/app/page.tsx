import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";


export default function Home() {
  return (
    <main className="">
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Education/>
      <TechStack/>
      <Projects/>
      <Contact/>
    </main>
  );
}
