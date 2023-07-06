"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  backgroundInfo: string;
};

const About = ({ backgroundInfo }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
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
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <motion.h3
        ref={ref}
        animate={about}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.7 }}
        className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl cursor-pointer"
      >
        About
      </motion.h3>
      <div className="space-y-3 mt-10 px-0 md:px-10">
        <motion.h4
          animate={aboutMe}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.7 }}
          className="text-xl md:text-4xl w-fit text mx-auto md:mx-0 font-thin cursor-pointer"
        >
          <span className="underline decoration-[#39FF14]">About</span>{" "}
          <span className="bg-[#39FF14]/80 text-gray-900 underline decoration-gray-900">
            Me
          </span>
        </motion.h4>
        <motion.p
          animate={aboutMeParagraph}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.7 }}
          className="text-sm md:text-base lg:text-lg md:text-left cursor-pointer text-center"
        >
          {backgroundInfo}
        </motion.p>
      </div>
    </div>
  );
};

export default About;
