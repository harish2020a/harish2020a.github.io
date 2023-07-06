import { urlFor } from "@/app/lib/sanity.client";
import { Skill } from "@/app/types/typings";
import { motion } from "framer-motion";

type Props = {
  skill: Skill;
};

const Skill = ({ skill }: Props) => {
  return (
    <div className="group relative basis-1/5 self-center flex flex-col items-center justify-center space-y-1 transition ease-in-out duration-300 hover:scale-125">
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
          },
        }}
        whileTap={{
          scale: 0.7,
          transition: { duration: 0.5, type: "spring", damping: 2 },
        }}
        src={urlFor(skill?.image)}
        className="h-6 md:h-10 w-6 md:w-10 cursor-pointer rounded-lg bg-white p-1"
      />
      <p className="block text-xs font-thin md:text-lg">{skill?.title}</p>
    </div>
  );
};

export default Skill;
