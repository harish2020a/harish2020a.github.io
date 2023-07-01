"use client";
import { motion } from "framer-motion";
import WavyText from "../WavyText";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Building bridges between code and data!",
      "Fueled by Machine Learning, unlock the hidden potential within data!",
    ],
    loop: true,
  });
  return (
    <div className="font-extrabold h-screen flex items-center justify-center text-gray-400 flex-col text-center overflow-hidden space-y-5 px-10">
      <WavyText
        as="h1"
        text="Hello there! I'm Harish"
        once
        className="text-lg sm:text-4xl lg:text-6xl hover:bg-gray-300 hover:-skew-y-3 cursor-pointer hover:text-black rounded-3xl px-5"
      />
      <WavyText
        delay={1}
        as="h3"
        text="Full Stack Developer"
        once
        spanClassName="text-xs sm:text-2xl lg:text-4xl font-light cursor-pointer"
      />
      <WavyText
        delay={1}
        as="h3"
        text="Machine Learning Enthusiast"
        once
        spanClassName="text-xs sm:text-xl lg:text-3xl font-light cursor-pointer"
      />
      <motion.h2
        drag
        dragConstraints={{ left: 20, right: 20, top: 20, bottom: 20 }}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        dragSnapToOrigin
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{
          delay: 2,
          duration: 1.5,
          type: "spring",
          damping: 10,
          stiffness: 100,
        }}
      >
        <span className="animate-pulse text-xs sm:text-lg lg:text-xl font-thin cursor-pointer">
          {text}
        </span>
        <Cursor cursorColor="#39FF14" />
      </motion.h2>
      <div className="-mx-10 sm:mx-auto space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 pt-10">
        <Link href="#about">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5 }}
            className="heroButton cursor-pointer"
          >
            About
          </motion.button>
        </Link>
        <Link href="#experience">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5 }}
            className="heroButton cursor-pointer"
          >
            Experience
          </motion.button>
        </Link>
        <Link href="#skills">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5 }}
            className="heroButton cursor-pointer"
          >
            Skills
          </motion.button>
        </Link>
        <Link href="#projects">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5 }}
            className="heroButton cursor-pointer"
          >
            Projects
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
