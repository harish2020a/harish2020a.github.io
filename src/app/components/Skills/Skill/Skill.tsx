import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group cursor-pointer relative basis-1/5 self-center flex justify-center">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.8 }}
        src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/tailwind-css-icon.svg"
        className="rounded-full border border-gray-400 object-cover w-10 h-10 xl:w-12 xl:h-12"
      />
    </div>
  );
};

export default Skill;
