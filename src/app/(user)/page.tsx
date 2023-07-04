import Link from "next/link";
import About from "../components/About/About";
import ContactMe from "../components/ContactMe/ContactMe";
import Experience from "../components/Experience/Experience";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Design from "../utils/Design";
import Image from "next/image";
import HomePng from "../../../public/assets/home.png";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchsocials } from "../utils/fetchsocials";

export const revalidate = 60;

export default async function Home() {
  const pageInfo = await fetchPageInfo();
  const skills = await fetchSkills();
  const experiences = await fetchExperiences();
  const projects = await fetchProjects();
  const socials = await fetchsocials();
  console.log(projects.length);
  return (
    <div className="scrollbar-thin scrollbar-track-red-700/50 scrollbar-thumb-[#39FF14] text-gray-400 cursor-default relative h-screen w-screen overflow-x-hidden snap-y snap-mandatory overflow-scroll z-0">
      <div className="w-full fixed h-screen -z-50">
        <Design />
      </div>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <Image
          src={HomePng}
          className="h-10 w-10 cursor-pointer mx-auto sticky bottom-5"
          alt="Home"
        />
      </Link>
    </div>
  );
}
