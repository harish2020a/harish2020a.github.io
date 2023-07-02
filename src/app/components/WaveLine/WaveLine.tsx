"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  isInView: boolean;
};

const WaveLine = ({}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const line = useAnimation();
  useEffect(() => {
    if (isInView) {
      line.start({
        strokeOpacity: 0.3,
        pathLength: 1,
        pathOffset: 0,
        transition: {
          duration: 5,
          ease: "easeInOut",
        },
      });
    }
    if (!isInView) {
      line.start({ strokeOpacity: 0, pathLength: 0, pathOffset: 1 });
    }
  }, [isInView]);
  return (
    <svg
      ref={ref}
      className="w-full absolute top-[30%]"
      viewBox="0 0 1440 363"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        animate={line}
        d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
        stroke="#39FF14"
        strokeOpacity="0.1"
        strokeWidth="10"
      />
    </svg>
  );
};

export default WaveLine;
