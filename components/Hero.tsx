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

      {/* RIGHT CENTER PROFILE IMAGE */}
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
        className="pointer-events-none absolute right-[5%] top-1/2 z-30 hidden -translate-y-1/2 md:block lg:right-[7%]"
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
            className="absolute inset-[-45px] rounded-full bg-[#d4af37]/10 blur-[55px]"
          />

          {/* Outer gold ring */}
          <div className="relative rounded-full border border-[#d4af37]/60 bg-[#080808] p-[5px] shadow-[0_0_45px_rgba(212,175,55,0.16)]">
            {/* Inner gold accent */}
            <div className="rounded-full border border-[#d4af37]/20 p-[4px]">
              {/* Image */}
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border border-white/10 sm:h-[340px] sm:w-[340px] lg:h-[390px] lg:w-[390px]">
                <Image
                  src="/images/areeba.jpg"
                  alt="Areeba Mansoor"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="390px"
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
            className="pointer-events-none absolute inset-[-18px] rounded-full border border-dashed border-[#d4af37]/20"
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
            className="pointer-events-none absolute inset-[-18px] rounded-full"
          >
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#d4af37] shadow-[0_0_14px_rgba(212,175,55,0.9)]" />
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
            className="absolute bottom-7 right-7 h-5 w-5 rounded-full border-[4px] border-[#080808] bg-[#d4af37]"
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
            className="relative z-10 mt-7 rounded-2xl border border-white/10 bg-[#080808]/85 px-6 py-4 text-center shadow-2xl backdrop-blur-xl"
          >
            <p className="text-[10px] font-bold tracking-[0.25em] text-[#d4af37]">
              AREEBA MANSOOR
            </p>

            <p className="mt-1.5 text-sm font-bold text-white/80">
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
        className="relative z-30 mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-center px-6 pb-24 pt-28 sm:px-10 lg:px-16"
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
          className="mb-7 flex items-center gap-3"
        >
          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[11px] font-semibold tracking-[0.22em] text-white/65 backdrop-blur-xl">
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
            className="mb-6 text-xs font-bold tracking-[0.28em] text-[#d4af37] sm:text-sm"
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
                className={`block text-[clamp(3.8rem,9.5vw,9.5rem)] font-black leading-[0.82] tracking-[-0.065em] ${
                  index === 1
                    ? "text-[#d4af37]"
                    : "text-[#f5f1e8]"
                }`}
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
            className="mt-9 max-w-[620px] text-base leading-7 text-white/58 sm:text-lg sm:leading-8"
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
            className="mt-9 flex flex-wrap gap-4"
          >
            {/* Explore My Work */}
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-xl bg-[#f5f1e8] px-6 py-4 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#d4af37]"
            >
              {heroContent.primaryAction}

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* View Resume */}
            <button
              type="button"
              onClick={goToResume}
              className="group flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-6 py-4 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10"
            >
              View Resume

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Laptop */}
      <div className="pointer-events-none absolute inset-0 z-20">
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
        className="absolute bottom-8 left-6 right-6 z-40 flex items-end justify-between sm:left-10 sm:right-10 lg:left-16 lg:right-16"
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