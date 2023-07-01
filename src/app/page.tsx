import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <div className="text-gray-400 cursor-default relative h-screen w-screen bg-customBlue snap-y snap-mandatory overflow-scroll z-0  bg-[url('/assets/noise2.png')]">
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
    </div>
  );
}
