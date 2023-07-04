import { urlFor } from "@/app/lib/sanity.client";
import { Experience } from "@/app/types/typings";
import { motion } from "framer-motion";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="max-h-[500px] opacity-70 hover:opacity-100 cursor-pointer transition-opacity snap-mandatory duration-200 overflow-auto flex flex-col justify-center rounded-2xl bg-gray-900 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[700px] overflow-y-hidden space-y-7 snap-center p-20 mx-auto">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="mx-auto w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={urlFor(experience.companyImage)}
      />
      <div className="px-0 md:px-10 overflow-y-scroll">
        <h4 className="text-2xl font-thin">{experience.company}</h4>
        <p className="font-bold text-lg mt-1">{experience.jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-8 w-8 rounded-lg bg-white p-1"
              src={urlFor(technology.image)}
            />
          ))}
        </div>
        <p className="uppercase py-2 text-sm">{`${experience.dateStarted} - ${
          experience.isCurrentlyWorkingHere ? "Present" : experience.dateEnded
        }`}</p>
        <ul className="list-disc space-y-2 ml-5 text-sm break-words">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
