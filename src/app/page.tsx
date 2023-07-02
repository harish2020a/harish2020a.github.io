import About from "./components/About/About";
import ContactMe from "./components/ContactMe/ContactMe";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Design from "./utils/Design";

export default function Home() {
  return (
    <div className="scrollbar-thin scrollbar-track-red-700/50 scrollbar-thumb-[#39FF14] text-gray-400 cursor-default relative h-screen w-screen overflow-x-hidden snap-y snap-mandatory overflow-scroll z-0">
      <div className="w-full fixed h-screen -z-50">
        <Design />
      </div>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}
