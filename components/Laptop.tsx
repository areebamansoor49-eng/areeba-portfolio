"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Laptop() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [55, 20, 0, -20, -50]
  );

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [7, 0, -5]
  );

  const smoothY = useSpring(y, {
    stiffness: 55,
    damping: 22,
  });

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 45,
    damping: 20,
  });

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
      style={{
        perspective: "1600px",
      }}
    >
      {/* Entrance animation */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.82,
          y: 35,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative"
      >
        {/* Continuous subtle movement + scroll parallax */}
        <motion.div
          style={{
            y: smoothY,
            rotateX: smoothRotateX,
          }}
          animate={{
            rotateY: [-1.5, 1.5, -1.5],
            rotateZ: [-0.25, 0.25, -0.25],
          }}
          transition={{
            rotateY: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotateZ: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative"
        >
          {/* Soft gold atmospheric glow */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[55%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/[0.07] blur-[80px]" />

          <Image
            src="/images/laptop/laptop.png"
            alt="Laptop"
            width={520}
            height={400}
            priority
            className="h-auto w-[360px] object-contain opacity-[0.86] drop-shadow-[0_25px_40px_rgba(0,0,0,0.55)] sm:w-[420px] lg:w-[460px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}