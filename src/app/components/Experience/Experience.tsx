"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const experience = useAnimation();
  useEffect(() => {
    if (isInView) {
      experience.start({
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
        },
      });
    }
    if (!isInView) {
      experience.start({ opacity: 0, scale: 0 });
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      className="h-screen flex flex-col relative overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <motion.h3
        animate={experience}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.7 }}
        className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-xl cursor-pointer"
      >
        Experience
      </motion.h3>
      <div className="text-clip overflow-auto w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-20">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;
