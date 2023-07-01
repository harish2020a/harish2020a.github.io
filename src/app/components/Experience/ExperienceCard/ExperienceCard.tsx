import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="max-h-[500px] opacity-70 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-auto flex flex-col justify-center rounded-lg bg-gray-900 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[700px] overflow-y-scroll space-y-7 snap-center p-10">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-thin">BHEL</h4>
        <p className="font-bold text-lg mt-1">aaaaaaa</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-8 w-8 rounded-full"
            src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
          />
          <img
            className="h-8 w-8 rounded-full"
            src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
          />
          <img
            className="h-8 w-8 rounded-full"
            src="https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg"
          />
        </div>
        <p className="uppercase py-2">started - ended</p>
        <ul className="list-disc space-y-2 ml-5 text-sm break-words">
          <li>SummarySummarySu</li>
          <li>
            SummarySumrySummarySrySummarySumrySummarySrySuumrySummarySrySuumrySummarySrySuumrySummarySrySuumrySummarySrySurySummarySrySummarySmarySummar
          </li>
          <li>SummarySummarySummarySumm</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
