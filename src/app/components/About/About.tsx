"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {};

const About = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const about = useAnimation();
  const aboutMe = useAnimation();
  const aboutMeParagraph = useAnimation();

  useEffect(() => {
    if (isInView) {
      about.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
      aboutMe.start({
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.5,
          duration: 0.3,
        },
      });
      aboutMeParagraph.start({
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.8,
          duration: 0.3,
        },
      });
    }
    if (!isInView) {
      about.start({ opacity: 0, scale: 0 });
      aboutMe.start({ opacity: 0, scale: 0 });
      aboutMeParagraph.start({ opacity: 0, scale: 0 });
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <motion.h3
        animate={about}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.7 }}
        className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl cursor-pointer"
      >
        About
      </motion.h3>
      <div className="space-y-10 px-0 md:px-10">
        <motion.h4
          animate={aboutMe}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.7 }}
          className="text-4xl font-thin cursor-pointer"
        >
          About{" "}
          <span className="bg-[#39FF14]/80 text-gray-900 skew-y-6">Me</span>
        </motion.h4>
        <motion.p
          animate={aboutMeParagraph}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.7 }}
          className="text-xs sm:text-sm cursor-pointer"
        >
          I am an ambitious, self-taught developer pursuing my undergraduate
          studies in Computer Science and Engineering at Vellore Institute of
          Technology - Chennai. Constantly striving to stay at the forefront of
          technological advancements, I have ventured beyond traditional Full
          Stack Development. My recent explorations include Blockchain, DevOps,
          and Data Science, with a particular passion for machine learning.
          Through practical projects, I have honed my skills in various areas,
          showcasing my proficiency in creating web applications and
          implementing secure blockchain solutions. With a solid foundation in
          Full Stack Development and a drive to push the boundaries of
          technology, I am eager to contribute my expertise to the industry and
          collaborate on innovative solutions.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
