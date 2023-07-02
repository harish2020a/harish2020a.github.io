"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { useForm, Resolver } from "react-hook-form";

type Props = {};

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const contact = useAnimation();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit((formData) => console.log(formData));

  useEffect(() => {
    if (isInView) {
      contact.start({
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
      contact.start({ opacity: 0, scale: 0 });
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <motion.h3
        animate={contact}
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.7 }}
        className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-xl cursor-pointer"
      >
        Contact
      </motion.h3>
      <div className="absolute flex flex-col space-y-5 text-xs md:text-lg font-light">
        <h4 className="mx-auto">
          Let's{" "}
          <span className="bg-[#39FF14] animate-pulse text-gray-900  underline decoration-slice">
            connect
          </span>{" "}
          and create something{" "}
          <span className="bg-[#39FF14] animate-pulse text-gray-900 underline decoration-slice">
            amazing!
          </span>
        </h4>

        <motion.div
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.8 }}
          className="flex cursor-pointer items-center space-x-5 justify-center"
        >
          <DevicePhoneMobileIcon className="h-7 w-7 animate-pulse text-[#39FF14]" />
          <p className="underline">(+91) 7904179970</p>
        </motion.div>
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 md:grid-cols-2 w-fit mx-auto my-auto"
        >
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput col-span-1"
            type="text"
            required
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput col-span-1"
            type="email"
            required
          />
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput md:col-span-2"
            type="text"
            required
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput md:col-span-2"
            required
          />
          <button className="cursor-pointer hover:animate-bounce md:col-span-2 bg-[#39FF14] py-4 px-6 my-2 mx-auto rounded-md text-black font-bold text-lg">
            Submit <RocketLaunchIcon className="h-6 w-6 inline-flex" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
