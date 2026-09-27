"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Compass,
  Layers3,
  Maximize2,
  X,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [paused, setPaused] = useState(false);

  const inView = useInView(ref, {
    once: false,
    amount: 0.15,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const smoothY = useSpring(y, {
    stiffness: 50,
    damping: 20,
  });

  const current = skills[active];

  const next = () => {
    setActive((value) => (value + 1) % skills.length);
  };

  const previous = () => {
    setActive((value) => (value - 1 + skills.length) % skills.length);
  };

  useEffect(() => {
    if (paused || modalOpen) return;

    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % skills.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, [paused, modalOpen]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (modalOpen) return;

      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [modalOpen]);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative overflow-hidden bg-[#080808] py-28 text-[#f5f1e8] sm:py-36"
    >
      {/* BACKGROUND */}

      <motion.div
        style={{ y: smoothY }}
        className="pointer-events-none absolute -right-[15vw] top-[10%] h-[45vw] w-[45vw] rounded-full bg-[#d4af37]/[0.035] blur-[120px]"
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(212,175,55,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.4)_1px,transparent_1px)] [background-size:100px_100px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        {/* HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 60 }
          }
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14"
        >
          <p className="mb-4 text-xs font-bold tracking-[0.28em] text-[#d4af37]">
            02 / SKILLS
          </p>

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <h2 className="text-[clamp(3.2rem,7vw,8rem)] font-black leading-[0.82] tracking-[-0.07em]">
              WHAT I
              <br />
              <span className="text-[#d4af37]">BUILD WITH.</span>
            </h2>

            <p className="max-w-[500px] text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              Explore the technical layers behind my work. Each module shows
              not only what I use, but how I have learned and applied it.
            </p>
          </div>
        </motion.div>

        {/* MAIN STAGE */}

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0c0c0c]"
        >
          <div className="grid min-h-[650px] lg:grid-cols-[1.25fr_0.75fr]">
            {/* LEFT SIDE */}

            <div className="relative flex flex-col justify-between overflow-hidden p-7 sm:p-10 lg:p-14">
              <motion.div
                animate={{
                  x: ["-120%", "150%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute top-0 h-full w-[25%] bg-gradient-to-r from-transparent via-[#d4af37]/[0.045] to-transparent blur-2xl"
              />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-white/30">
                  ENGINEERING CORE
                </span>

                <span className="rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-[#d4af37]">
                  {current.accent}
                </span>
              </div>

              {/* ACTIVE CONTENT */}

              <div className="relative z-10 my-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.number}
                    initial={{
                      opacity: 0,
                      x: 100,
                      scale: 0.96,
                      filter: "blur(14px)",
                      clipPath: "inset(0 0 0 100%)",
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      filter: "blur(0px)",
                      clipPath: "inset(0 0 0 0%)",
                    }}
                    exit={{
                      opacity: 0,
                      x: -100,
                      scale: 0.96,
                      filter: "blur(14px)",
                      clipPath: "inset(0 100% 0 0)",
                    }}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="mb-5 flex items-center gap-4">
                      <span className="text-sm font-black tracking-[0.15em] text-[#d4af37]">
                        {current.number}
                      </span>

                      <div className="h-px w-16 bg-[#d4af37]/30" />
                    </div>

                    <h3 className="max-w-[850px] text-[clamp(3rem,6vw,6.8rem)] font-black leading-[0.86] tracking-[-0.065em]">
                      {current.name}
                    </h3>

                    <p className="mt-8 max-w-[650px] text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
                      {current.description}
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                      {current.stack.map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{
                            opacity: 0,
                            y: 18,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.18 + index * 0.07,
                            duration: 0.4,
                          }}
                          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/70"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                          {tech}
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      onClick={() => setModalOpen(true)}
                      whileHover={{
                        y: -4,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="group mt-10 flex items-center gap-3 rounded-xl border border-[#d4af37]/30 bg-[#d4af37]/[0.06] px-5 py-3.5 text-sm font-bold text-[#d4af37] transition-colors hover:bg-[#d4af37] hover:text-black"
                    >
                      <Maximize2 className="h-4 w-4" />
                      Explore Module
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* NAVIGATION */}

              <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.16em] text-white/25">
                    MY STACK
                  </span>

                  <span className="text-xs font-bold tracking-[0.16em] text-white/30">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(skills.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="grid grid-cols-6 gap-2">
                  {skills.map((skill, index) => (
                    <button
                      key={skill.number}
                      onClick={() => setActive(index)}
                      className="group text-left"
                    >
                      <div
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          active === index
                            ? "bg-[#d4af37]"
                            : "bg-white/10 group-hover:bg-white/30"
                        }`}
                      />

                      <div
                        className={`mt-3 text-[10px] font-bold tracking-[0.12em] transition ${
                          active === index
                            ? "text-[#d4af37]"
                            : "text-white/25"
                        }`}
                      >
                        {skill.title}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 flex gap-2">
                  <button
                    onClick={previous}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] transition hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10"
                    aria-label="Previous skill"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>

                  <button
                    onClick={next}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] transition hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10"
                    aria-label="Next skill"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* VISUAL SIDE */}

            <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden border-t border-white/10 bg-[#0a0a0a] lg:border-l lg:border-t-0">
              <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(212,175,55,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.4)_1px,transparent_1px)] [background-size:55px_55px]" />

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.18, 0.28, 0.18],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-[260px] w-[260px] rounded-full bg-[#d4af37]/10 blur-[70px]"
              />

              {/* Animated orbital rings */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[310px] w-[310px] rounded-full border border-[#d4af37]/10"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[230px] w-[230px] rounded-full border border-white/[0.06]"
              />

              {/* Robot */}

              <motion.div
                animate={{
                  y: [0, -12, 0, 9, 0],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20"
              >
                <Image
                  src="/images/robot.png"
                  alt="Portfolio robot"
                  width={250}
                  height={330}
                  className="h-auto w-[190px] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)] sm:w-[220px]"
                />
              </motion.div>

              {/* ACTIVE MODULE LABEL */}

              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37]">
                      ACTIVE MODULE
                    </p>

                    <p className="mt-1 text-xl font-black tracking-tight">
                      {current.title}
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10">
                    <span className="h-2 w-2 rounded-full bg-[#d4af37] shadow-[0_0_14px_rgba(212,175,55,0.8)]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* DEEP SKILL MODAL */}
      {/* ========================================================= */}

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl sm:p-6"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-[1050px] overflow-y-auto rounded-[30px] border border-white/10 bg-[#101010] shadow-2xl"
            >
              {/* MODAL HEADER */}

              <div className="sticky top-0 z-20 border-b border-white/10 bg-[#101010]/90 px-6 py-6 backdrop-blur-xl sm:px-10 lg:px-12">
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10"
                  aria-label="Close module"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="pr-14">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black tracking-[0.2em] text-[#d4af37]">
                      MODULE / {current.number}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-white/20" />

                    <span className="text-xs font-bold tracking-[0.15em] text-white/30">
                      {current.accent}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[0.88] tracking-[-0.06em]">
                    {current.name}
                  </h3>

                  <p className="mt-5 max-w-[760px] text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                    A closer look at how this capability developed, where I
                    have applied it, and what I am currently building toward.
                  </p>
                </div>
              </div>

              {/* MODAL CONTENT */}

              <div className="p-6 sm:p-10 lg:p-12">
                <div className="grid gap-4 lg:grid-cols-2">
                  <DetailCard
                    icon={<BookOpen className="h-5 w-5" />}
                    number="01"
                    title="How I Learned"
                    text={current.details.learningPath}
                    delay={0}
                  />

                  <DetailCard
                    icon={<Layers3 className="h-5 w-5" />}
                    number="02"
                    title="How I Applied It"
                    text={current.details.appliedIn}
                    delay={0.08}
                  />

                  <DetailCard
                    icon={<Check className="h-5 w-5" />}
                    number="03"
                    title="Hands-On Evidence"
                    text={current.details.evidence}
                    delay={0.16}
                  />

                  <DetailCard
                    icon={<Compass className="h-5 w-5" />}
                    number="04"
                    title="Current Direction"
                    text={current.details.currentDirection}
                    delay={0.24}
                  />
                </div>

                {/* IMPROVING */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.32,
                    duration: 0.5,
                  }}
                  className="mt-4 rounded-2xl border border-[#d4af37]/15 bg-[#d4af37]/[0.035] p-6 sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/10">
                      <Wrench className="h-5 w-5 text-[#d4af37]" />
                    </div>

                    <div>
                      <p className="text-xs font-black tracking-[0.2em] text-[#d4af37]">
                        05 / CONTINUOUS DEVELOPMENT
                      </p>

                      <p className="mt-3 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
                        {current.details.improving}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* TECHNOLOGY FOOTER */}

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.4,
                  }}
                  className="mt-8 border-t border-white/10 pt-7"
                >
                  <p className="mb-4 text-xs font-black tracking-[0.2em] text-white/25">
                    TECHNOLOGIES / METHODS
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {current.stack.map((item, index) => (
                      <motion.span
                        key={item}
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.42 + index * 0.05,
                        }}
                        className="rounded-lg border border-white/10 bg-white/[0.035] px-3.5 py-2.5 text-sm font-semibold text-white/60"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function DetailCard({
  icon,
  number,
  title,
  text,
  delay,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  text: string;
  delay: number;
}) {
  return (
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
        delay,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-[#d4af37]/20 hover:bg-white/[0.035] sm:p-7"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d4af37]/15 bg-[#d4af37]/[0.06] text-[#d4af37] transition-transform duration-300 group-hover:scale-105">
          {icon}
        </div>

        <span className="text-xs font-black tracking-[0.18em] text-white/20">
          {number}
        </span>
      </div>

      <h4 className="mt-7 text-xl font-black tracking-tight text-white sm:text-2xl">
        {title}
      </h4>

      <p className="mt-4 text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
        {text}
      </p>
    </motion.div>
  );
}