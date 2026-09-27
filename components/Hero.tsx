"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Circle,
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import Laptop from "./Laptop";
import { heroContent } from "@/data/portfolio";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Profile image parallax
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  const goToResume = () => {
    document.getElementById("resume")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-[#080808] text-[#f5f1e8]"
    >
      {/* Ambient gold light */}
      <motion.div
        animate={{
          x: ["-8%", "8%", "-8%"],
          y: ["-4%", "5%", "-4%"],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[18%] h-[42vw] w-[42vw] -translate-x-1/2 rounded-full bg-[#d4af37]/[0.055] blur-[120px]"
      />

      {/* Engineering grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(212,175,55,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.35)_1px,transparent_1px)] [background-size:80px_80px]" />

      {/* PROFILE IMAGE */}
      <motion.div
        style={{
          y: imageY,
          scale: imageScale,
        }}
        initial={{
          opacity: 0,
          x: 70,
          scale: 0.82,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.1,
          delay: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none absolute z-30
          left-1/2 top-[6.5rem]
          -translate-x-1/2
          md:left-auto md:right-[5%] md:top-1/2
          md:-translate-y-1/2 md:translate-x-0
          lg:right-[7%]
        "
      >
        <motion.div
          animate={{
            y: [0, -10, 0, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-center"
        >
          {/* Large ambient glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.18, 0.28, 0.18],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              inset-[-28px]
              rounded-full
              bg-[#d4af37]/10
              blur-[38px]
              sm:inset-[-38px]
              sm:blur-[48px]
              lg:inset-[-45px]
              lg:blur-[55px]
            "
          />

          {/* Outer gold ring */}
          <div
            className="
              relative rounded-full
              border border-[#d4af37]/60
              bg-[#080808]
              p-[4px]
              shadow-[0_0_35px_rgba(212,175,55,0.14)]
              sm:p-[5px]
              sm:shadow-[0_0_45px_rgba(212,175,55,0.16)]
            "
          >
            {/* Inner gold accent */}
            <div className="rounded-full border border-[#d4af37]/20 p-[3px] sm:p-[4px]">
              {/* Image */}
              <div
                className="
                  relative
                  h-[185px] w-[185px]
                  overflow-hidden rounded-full
                  border border-white/10
                  sm:h-[250px] sm:w-[250px]
                  md:h-[300px] md:w-[300px]
                  lg:h-[390px] lg:w-[390px]
                "
              >
                <Image
                  src="/images/areeba.jpg"
                  alt="Areeba Mansoor"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 639px) 185px, (max-width: 767px) 250px, (max-width: 1023px) 300px, 390px"
                />

                {/* Subtle image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Rotating orbit */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none absolute
              inset-[-12px]
              rounded-full
              border border-dashed border-[#d4af37]/20
              sm:inset-[-15px]
              md:inset-[-18px]
            "
          />

          {/* Gold orbit marker */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none absolute
              inset-[-12px]
              rounded-full
              sm:inset-[-15px]
              md:inset-[-18px]
            "
          >
            <span
              className="
                absolute left-1/2 top-0
                h-2 w-2
                -translate-x-1/2
                rounded-full
                bg-[#d4af37]
                shadow-[0_0_12px_rgba(212,175,55,0.9)]
                sm:h-2.5 sm:w-2.5
              "
            />
          </motion.div>

          {/* Online indicator */}
          <motion.span
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(212,175,55,0.45)",
                "0 0 0 9px rgba(212,175,55,0)",
                "0 0 0 0 rgba(212,175,55,0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-4 right-4
              h-4 w-4
              rounded-full
              border-[3px]
              border-[#080808]
              bg-[#d4af37]
              sm:bottom-6 sm:right-6
              sm:h-5 sm:w-5
              sm:border-[4px]
              md:bottom-7 md:right-7
            "
          />

          {/* Identity label */}
          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative z-10
              mt-4
              rounded-xl
              border border-white/10
              bg-[#080808]/85
              px-4 py-2.5
              text-center
              shadow-2xl
              backdrop-blur-xl
              sm:mt-5
              sm:rounded-2xl
              sm:px-5 sm:py-3
              md:mt-7
              md:px-6 md:py-4
            "
          >
            <p className="text-[9px] font-bold tracking-[0.2em] text-[#d4af37] sm:text-[10px] sm:tracking-[0.25em]">
              AREEBA MANSOOR
            </p>

            <p className="mt-1 text-[11px] font-bold text-white/80 sm:mt-1.5 sm:text-sm">
              CS · SOFTWARE · AI · SYSTEMS
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* MAIN HERO CONTENT */}
      <motion.div
        style={{
          y: titleY,
          scale: titleScale,
          opacity,
        }}
        className="
          relative z-30 mx-auto flex
          min-h-[100svh]
          max-w-[1500px]
          flex-col
          justify-start
          px-5
          pb-24
          pt-[25rem]
          sm:px-8
          sm:pt-[30rem]
          md:justify-center
          md:px-10
          md:pb-24
          md:pt-28
          lg:px-16
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-5 flex items-center gap-3 sm:mb-7"
        >
          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-[10px] font-semibold tracking-[0.18em] text-white/65 backdrop-blur-xl sm:px-4 sm:text-[11px] sm:tracking-[0.22em]">
            <Circle className="h-2 w-2 fill-[#d4af37] text-[#d4af37]" />

            {heroContent.status}
          </span>

          <span className="hidden text-[11px] font-semibold tracking-[0.2em] text-white/35 sm:block">
            KARACHI · PAKISTAN
          </span>
        </motion.div>

        <div className="relative max-w-[1000px]">
          <motion.p
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="mb-5 text-[10px] font-bold tracking-[0.22em] text-[#d4af37] sm:mb-6 sm:text-sm sm:tracking-[0.28em]"
          >
            {heroContent.eyebrow}
          </motion.p>

          <div className="overflow-hidden">
            {heroContent.title.map((line, index) => (
              <motion.h1
                key={line}
                initial={{
                  y: "110%",
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.95,
                  delay: 0.18 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  block
                  text-[clamp(3.1rem,13vw,9.5rem)]
                  font-black
                  leading-[0.84]
                  tracking-[-0.065em]
                  sm:text-[clamp(4rem,9.5vw,9.5rem)]
                  ${
                    index === 1
                      ? "text-[#d4af37]"
                      : "text-[#f5f1e8]"
                  }
                `}
              >
                {line}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.75,
            }}
            className="mt-7 max-w-[620px] text-sm leading-6 text-white/58 sm:mt-9 sm:text-lg sm:leading-8"
          >
            {heroContent.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.9,
            }}
            className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4"
          >
            {/* Explore My Work */}
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-xl bg-[#f5f1e8] px-5 py-3.5 text-xs font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#d4af37] sm:px-6 sm:py-4 sm:text-sm"
            >
              {heroContent.primaryAction}

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* View Resume */}
            <button
              type="button"
              onClick={goToResume}
              className="group flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-3.5 text-xs font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10 sm:px-6 sm:py-4 sm:text-sm"
            >
              View Resume

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Laptop */}
      <div
        className="
          pointer-events-none absolute inset-0 z-10
          scale-[0.62] opacity-35
          sm:scale-[0.78] sm:opacity-50
          md:scale-100 md:opacity-100
        "
      >
        <Laptop />
      </div>

      {/* Bottom rail */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
          duration: 1,
        }}
        className="
          absolute
          bottom-6 left-5 right-5
          z-40
          flex items-end justify-between
          sm:bottom-8
          sm:left-10 sm:right-10
          lg:left-16 lg:right-16
        "
      >
        <div className="hidden max-w-[280px] sm:block">
          <div className="mb-3 h-px w-20 bg-[#d4af37]" />

          <p className="text-xs leading-5 text-white/35">
            SOFTWARE ENGINEERING
            <br />
            THROUGH A COMPUTER SCIENCE LENS
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-white/40">
          SCROLL

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
            }}
          >
            <ArrowDown className="h-4 w-4 text-[#d4af37]" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}