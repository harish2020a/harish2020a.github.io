"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import WaveLine from "../WaveLine/WaveLine";
import { Project } from "@/app/types/typings";
import { urlFor } from "@/app/lib/sanity.client";
import Image from "next/image";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <motion.h3
        ref={ref}
        animate={animation}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.7 }}
        className="absolute top-24 md:top-20 uppercase tracking-[20px] text-gray-400 text-xl cursor-pointer"
      >
        Projects
      </motion.h3>
      <div className="z-20 absolute h-[80%] pb-5 w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12 mx-auto space-x-5 flex top-32 snap-x snap-mandatory overflow-x-scroll scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-[#39FF14]">
        {projects?.map((project) => {
          return (
            <div
              key={project?._id}
              className="bg-gray-900 mx-auto opacity-70 hover:opacity-100 snap-center rounded-2xl snap-mandatory flex flex-col flex-shrink-0 space-y-2 items-center justify-center px-5 md:px-10 pb-10 h-full w-[90%]"
            >
              <Image
                width={200}
                height={200}
                className="h-24 w-48 md:h-48 md:w-96 object-contain mt-10 sticky rounded-lg cursor-pointer hover:scale-110 duration-500"
                alt=""
                src={urlFor(project?.image)}
              />
              <div className="space-y-5 px-0 md:px-10 overflow-y-scroll">
                <h4 className="text-sm md:text-base lg:text-lg text-center cursor-pointer hover:scale-150 duration-500">
                  {project?.title}
                </h4>
                <div className="flex items-center justify-center space-x-5">
                  {project?.technologies?.map((technology) => (
                    <Image
                      className="h-8 w-8 rounded-lg bg-white p-1 hover:scale-150 duration-500 cursor-pointer"
                      width={200}
                      height={200}
                      alt=""
                      key={technology._id}
                      src={urlFor(technology.image)}
                    />
                  ))}
                </div>
                <p className="text-xs md:text-sm text-center md:text-left mx-auto">
                  {project?.summary}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <WaveLine isInView={isInView} />
    </motion.div>
  );
};

export default Projects;
