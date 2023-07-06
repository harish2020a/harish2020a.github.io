import { urlFor } from "@/app/lib/sanity.client";
import { Experience } from "@/app/types/typings";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="max-h-[500px] opacity-70 hover:opacity-100 transition-opacity snap-mandatory duration-200 overflow-auto flex flex-col justify-center rounded-2xl bg-gray-900 flex-shrink-0 w-[90%] overflow-y-hidden space-y-7 snap-center px-10 pt-10 pb-5 mx-auto">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
      >
        <Image
          className="mx-auto w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center cursor-pointer hover:scale-110 duration-500"
          width={200}
          height={200}
          alt=""
          src={urlFor(experience?.companyImage)}
        />
      </motion.div>
      <div className="px-0 md:px-10 overflow-y-scroll">
        <h4 className="text-xl font-thin flex justify-center text-center items-center cursor-pointer hover:scale-110 duration-500">
          {experience?.company}
        </h4>
        <p className="font-bold text-lg mt-1 flex justify-center text-center items-center cursor-pointer hover:scale-150 duration-500">
          {experience?.jobTitle}
        </p>
        <div className="flex space-x-5 my-2 items-center justify-center">
          {experience?.technologies?.map((technology) => (
            <Image
              className="h-8 w-8 rounded-lg bg-white p-1 hover:scale-150 duration-500 cursor-pointer"
              width={200}
              height={200}
              alt=""
              key={technology?._id}
              src={urlFor(technology.image)}
            />
          ))}
        </div>
        <p className="uppercase py-2 text-sm flex text-center items-center justify-center cursor-pointer hover:scale-150 duration-500">{`${
          experience?.dateStarted
        } - ${
          experience?.isCurrentlyWorkingHere ? "Present" : experience?.dateEnded
        }`}</p>
        <ul className="list-disc space-y-2 text-xs break-words">
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
