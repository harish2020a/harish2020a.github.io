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
  const animation = useAnimation();
  useEffect(() => {
    if (isInView) {
      animation.start({
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
      animation.start({ opacity: 0, scale: 0 });
    }
  }, [isInView]);
  return (
    <div className="h-screen flex flex-col relative overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <motion.h3
        ref={ref}
        animate={animation}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.7 }}
        className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-xl cursor-pointer"
      >
        Experience
      </motion.h3>
      <div className="text-clip absolute overflow-auto w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 flex space-x-5 overflow-x-scroll pb-5 snap-x snap-mandatory mt-20 scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-[#39FF14]">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience?._id} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
