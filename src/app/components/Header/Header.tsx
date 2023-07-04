"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-2xl mx-auto z-20 sm:items-center p-5">
      <motion.div
        className="flex flex-row items-center"
        initial={{
          y: 500,
          opacity: 0,
          scale: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        <SocialIcon
          style={{ cursor: "url(/cursor/xenon/blue/link.cur), pointer" }}
          url="https://www.linkedin.com/in/harishb2020/"
          bgColor="transparent"
          fgColor="rgb(156 163 175)"
        />
        <SocialIcon
          style={{ cursor: "url(/cursor/xenon/blue/link.cur), pointer" }}
          url="https://www.linkedin.com/in/harishb2020/"
          bgColor="transparent"
          fgColor="rgb(156 163 175)"
        />
      </motion.div>
      <Link href="#contact">
        <motion.div
          className="flex flex-row items-center text-gray-400 cursor-pointer"
          initial={{
            y: 500,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          <SocialIcon
            network="email"
            className="cursor-pointer"
            bgColor="transparent"
            fgColor="rgb(156 163 175)"
          />
          <p className="uppercase hidden sm:inline-flex text-sm">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
