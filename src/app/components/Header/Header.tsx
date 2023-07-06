"use client";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { useRouter } from "next/navigation";
import { Social } from "@/app/types/typings";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  const router = useRouter();
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
        {socials?.map((social) => (
          <SocialIcon
            className="hover:scale-150 duration-300"
            key={social?._id}
            style={{ cursor: "url(/cursor/xenon/blue/link.cur), pointer" }}
            url={social?.url}
            bgColor="transparent"
            fgColor="rgb(156 163 175)"
          />
        ))}
      </motion.div>
      <motion.div
        onClick={() => router.push("#contact")}
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
        <div className="hover:scale-150 duration-300">
          <SocialIcon
            network="email"
            className="cursor-pointer"
            bgColor="transparent"
            fgColor="rgb(156 163 175)"
          />
          <p className="uppercase hidden sm:inline-flex text-sm">
            Get In Touch
          </p>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
