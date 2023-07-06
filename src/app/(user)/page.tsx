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
import { fetchData } from "../utils/fetchData";

export const revalidate = 60;

export default async function Home() {
  const { pageInfo, skills, experiences, projects, socials } =
    await fetchData();

  return (
    <div className="bg-[url('/assets/bg.png')] bg-cover w-screen fixed h-screen -z-50">
      <div className="text-gray-400 cursor-default relative h-screen w-screen overflow-x-hidden snap-y snap-mandatory overflow-scroll z-0">
        <div className="w-full fixed h-screen -z-40">
          <Design />
        </div>
        <Header socials={socials} />
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
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
          <ContactMe pageInfo={pageInfo} />
        </section>
        <Link href="#hero">
          <Image
            src={HomePng}
            className="h-5 w-5 md:h-10 md:w-10 cursor-pointer mx-auto sticky bottom-3"
            alt="Home"
          />
        </Link>
      </div>
    </div>
  );
}
