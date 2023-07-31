"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

type Props = {
  phoneNumber: string;
};

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = ({ phoneNumber }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const contact = useAnimation();
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const onSubmit = handleSubmit((formData) => {
    if (!formData.name || !formData.email || !formData.message)
      return toast.error("Please fill all the required fields.");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          toast.success("Thankyou for your response!");
          reset({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          toast.error("Something went wrong!!!", error);
        }
      );
  });

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
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <motion.h3
        ref={ref}
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
          <p className="underline">{phoneNumber}</p>
        </motion.div>
        <form
          onSubmit={onSubmit}
          id="form"
          className="grid grid-cols-1 md:grid-cols-2 w-fit mx-auto my-auto"
        >
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput col-span-1 cursor-text"
            type="text"
            required
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput col-span-1 cursor-text"
            type="email"
            required
          />
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput md:col-span-2 cursor-text"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput md:col-span-2 cursor-text"
            required
          />
          <button className="cursor-pointer hover:animate-bounce md:col-span-2 bg-[#39FF14] py-4 px-6 my-2 mx-auto rounded-md text-black font-bold text-lg">
            Submit <RocketLaunchIcon className="h-6 w-6 inline-flex" />
          </button>
        </form>
      </div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "12px",
          },
        }}
      />
    </div>
  );
};

export default ContactMe;
