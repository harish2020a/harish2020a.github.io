import { urlFor } from "@/app/lib/sanity.client";
import { Skill } from "@/app/types/typings";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({ opacity: 1, x: 0, transition: { duration: 1 } });
    }
    if (!isInView) {
      animation.start({ x: directionLeft ? -1000 : 1000, opacity: 0 });
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      className="group relative basis-1/5 self-center flex flex-col items-center justify-center space-y-1"
    >
      <motion.img
        animate={animation}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.8 }}
        src={urlFor(skill?.image)}
        className="h-6 md:h-10 w-6 md:w-10 cursor-pointer rounded-lg bg-white p-1"
      />
      <motion.p
        animate={animation}
        className="block text-xs font-thin md:text-lg"
      >
        {skill?.title}
      </motion.p>
    </div>
  );
};

export default Skill;
