"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import WaveLine from "../WaveLine/WaveLine";
import { Project } from "@/app/types/typings";
import { urlFor } from "@/app/lib/sanity.client";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const DUMMY = [1, 2, 3, 4, 5, 5];
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
      ref={ref}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <motion.h3
        animate={animation}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.7 }}
        className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-xl cursor-pointer"
      >
        Projects
      </motion.h3>
      <div className="z-20 absolute space-x-5 w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 top-32 snap-x snap-mandatory flex overflow-x-scroll h-[80%] scrollbar-thin scrollbar-track-red-700/50 scrollbar-thumb-[#39FF14]">
        {projects?.map((project) => {
          return (
            <div
              key={project._id}
              className="bg-gray-900 opacity-70 hover:opacity-100 snap-center rounded-2xl snap-mandatory flex flex-col flex-shrink-0 space-y-5 items-center overflow-y-scroll justify-center py-10 h-full w-11/12"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                className="h-20 w-40 md:h-48 md:w-96 object-contain object-center"
                src={urlFor(project?.image)}
              />
              <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl text-center">{project?.title}</h4>
                <div className="flex items-center justify-center space-x-2">
                  {project?.technologies.map((technology) => (
                    <img
                      key={technology._id}
                      className="h-8 w-8 rounded-lg bg-white p-1"
                      src={urlFor(technology.image)}
                    />
                  ))}
                </div>

                <p className="text-sm text-center md:text-left mx-auto">
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
