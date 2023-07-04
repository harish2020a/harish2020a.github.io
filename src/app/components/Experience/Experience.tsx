"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { Experience } from "@/app/types/typings";

type Props = {
  experiences: Experience[];
};

const Experience = ({ experiences }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
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
      <div className="text-clip overflow-auto w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-20 scrollbar-thin scrollbar-track-red-700/50 scrollbar-thumb-[#39FF14]">
        {experiences.map((exp) => (
          <ExperienceCard key={exp._id} experience={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
