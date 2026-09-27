"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  ExternalLink,
  GitBranch,
  Layers3,
  Radio,
  Sparkles,
  X,
  Server,
  Cpu,
  Database,
  Activity,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/portfolio";

const projectImages: Record<string, string[]> = {
  "CareerPilot AI": [
    "/images/careerpilot-1.png",
    "/images/careerpilot-2.png",
  ],

  "Employee Attrition AI": [
    "/images/attrition-1.png",
    "/images/attrition-2.png",
    "/images/attrition-3.png",
  ],

  DevBoard: ["/images/devboard.png"],
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const inView = useInView(ref, {
    once: false,
    amount: 0.12,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [120, -120]
  );

  const smoothBackgroundY = useSpring(backgroundY, {
    stiffness: 45,
    damping: 22,
  });

  const current = projects[active];
  const currentImages = projectImages[current.title] ?? [];

  const next = () => {
    setActive((value) => (value + 1) % projects.length);
    setImageIndex(0);
  };

  const previous = () => {
    setActive(
      (value) => (value - 1 + projects.length) % projects.length
    );
    setImageIndex(0);
  };

  const nextImage = () => {
    if (currentImages.length > 1) {
      setImageIndex(
        (value) => (value + 1) % currentImages.length
      );
    }
  };

  const previousImage = () => {
    if (currentImages.length > 1) {
      setImageIndex(
        (value) =>
          (value - 1 + currentImages.length) %
          currentImages.length
      );
    }
  };

  /*
   * Automatically cycle through screenshots every 4 seconds.
   */
  useEffect(() => {
    if (currentImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setImageIndex(
        (value) => (value + 1) % currentImages.length
      );
    }, 4000);

    return () => window.clearInterval(interval);
  }, [active, currentImages.length]);

  /*
   * Reset screenshot whenever project changes.
   */
  useEffect(() => {
    setImageIndex(0);
  }, [active]);

  /*
   * Keyboard project navigation.
   */
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (modalOpen) return;

      if (event.key === "ArrowRight") {
        next();
      }

      if (event.key === "ArrowLeft") {
        previous();
      }

      if (event.key === "Escape") {
        setModalOpen(false);
      }
    };

    window.addEventListener("keydown", handler);

    return () =>
      window.removeEventListener("keydown", handler);
  }, [modalOpen]);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative overflow-hidden bg-[#f3efe6] py-28 text-[#080808] sm:py-36"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <motion.div
        style={{ y: smoothBackgroundY }}
        className="pointer-events-none absolute -right-[12vw] top-[8%] h-[42vw] w-[42vw] rounded-full bg-[#d4af37]/[0.13] blur-[120px]"
      />

      <div className="pointer-events-none absolute left-[-12vw] top-[48%] h-[30vw] w-[30vw] rounded-full bg-black/[0.035] blur-[100px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:90px_90px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 60,
                }
          }
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#d4af37]" />

            <p className="text-xs font-black tracking-[0.28em] text-black/45">
              03 / SELECTED WORK
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-[900px] text-[clamp(3.5rem,8vw,9rem)] font-black leading-[0.78] tracking-[-0.075em]">
              THINGS
              <br />
              <span className="text-[#b38d1d]">
                I&apos;VE BUILT.
              </span>
            </h2>

            <div className="max-w-[470px]">
              <p className="text-base font-medium leading-7 text-black/55 sm:text-lg sm:leading-8">
                A selection of software, AI, backend, and
                systems-oriented work — built through personal
                projects, internships, and continuous
                experimentation.
              </p>

              <div className="mt-6 flex items-center gap-3 text-xs font-black tracking-[0.16em] text-black/35">
                <span>{projects.length} PROJECTS</span>

                <span className="h-px w-10 bg-black/15" />

                <span>GITHUB / LIVE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FEATURED / STAR PROJECT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 80,
                }
          }
          transition={{
            delay: 0.12,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden rounded-[30px] border border-black/10 bg-[#0a0a0a] text-[#f5f1e8] shadow-[0_30px_100px_rgba(0,0,0,0.12)]"
        >
          <div className="grid min-h-[620px] lg:grid-cols-[1.05fr_0.95fr]">

            {/* =================================================
                PROJECT INFORMATION
            ================================================= */}

            <div className="relative flex flex-col justify-between overflow-hidden p-7 sm:p-10 lg:p-14">
              <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#d4af37]/10 blur-[100px]" />

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black tracking-[0.2em] text-[#d4af37]">
                    {current.title === "CareerPilot AI"
                      ? "MY STAR PROJECT"
                      : "FEATURED PROJECT"}
                  </span>

                  <span className="h-px w-10 bg-[#d4af37]/30" />
                </div>

                <span className="text-xs font-black tracking-[0.18em] text-white/25">
                  {current.number} /{" "}
                  {projects.length
                    .toString()
                    .padStart(2, "0")}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.number}
                  initial={{
                    opacity: 0,
                    x: 70,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    x: -70,
                    filter: "blur(10px)",
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative z-10 my-12"
                >
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-[#d4af37]/25 bg-[#d4af37]/[0.07] px-3 py-1.5 text-[10px] font-black tracking-[0.15em] text-[#d4af37]">
                      {current.status}
                    </span>

                    {current.title === "CareerPilot AI" && (
                      <span className="rounded-full border border-[#d4af37]/20 bg-[#d4af37]/[0.04] px-3 py-1.5 text-[10px] font-black tracking-[0.15em] text-[#f0d77b]">
                        AI · FULL-STACK · FLAGSHIP
                      </span>
                    )}

                    <span className="text-[10px] font-bold tracking-[0.18em] text-white/25">
                      {current.category}
                    </span>
                  </div>

                  <h3 className="max-w-[780px] text-[clamp(3rem,6vw,6.7rem)] font-black leading-[0.84] tracking-[-0.065em]">
                    {current.title}
                  </h3>

                  {current.title === "CareerPilot AI" && (
                    <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-[#d4af37]/80">
                      My most extensive personal product to date.
                    </p>
                  )}

                  <p className="mt-8 max-w-[650px] text-base leading-7 text-white/48 sm:text-lg sm:leading-8">
                    {current.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2.5">
                    {current.tech.map((item, index) => (
                      <motion.span
                        key={item}
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.16 + index * 0.05,
                        }}
                        className="rounded-lg border border-white/10 bg-white/[0.035] px-3.5 py-2.5 text-xs font-bold text-white/55"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-wrap gap-3">
                    <ProjectLink
                      href={current.github}
                      icon={
                        <GitBranch className="h-4 w-4" />
                      }
                      label="GitHub"
                    />

                    {current.live && (
                      <ProjectLink
                        href={current.live}
                        icon={
                          <ExternalLink className="h-4 w-4" />
                        }
                        label="Live Demo"
                        secondary
                      />
                    )}

                    <button
                      onClick={() => setModalOpen(true)}
                      className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-bold text-white/60 transition-all hover:border-[#d4af37]/30 hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                    >
                      More

                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* =================================================
                  PROJECT NAVIGATION
              ================================================= */}

              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-[0.2em] text-white/20">
                    PROJECT INDEX
                  </span>

                  <div className="flex gap-2">
                    <button
                      onClick={previous}
                      aria-label="Previous project"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] transition hover:border-[#d4af37]/30 hover:bg-[#d4af37]/10"
                    >
                      <ArrowRight className="h-4 w-4 rotate-180" />
                    </button>

                    <button
                      onClick={next}
                      aria-label="Next project"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] transition hover:border-[#d4af37]/30 hover:bg-[#d4af37]/10"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {projects.map((project, index) => (
                    <button
                      key={project.number}
                      onClick={() => setActive(index)}
                      className="group text-left"
                    >
                      <div
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          active === index
                            ? "bg-[#d4af37]"
                            : "bg-white/10 group-hover:bg-white/25"
                        }`}
                      />

                      <p
                        className={`mt-3 truncate text-[9px] font-black tracking-[0.12em] transition ${
                          active === index
                            ? "text-[#d4af37]"
                            : "text-white/20 group-hover:text-white/45"
                        }`}
                      >
                        {project.title}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================
                REAL PROJECT VISUAL
            ================================================= */}

            <div className="relative min-h-[480px] overflow-hidden border-t border-white/10 bg-[#111] lg:border-l lg:border-t-0">
              <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(212,175,55,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.4)_1px,transparent_1px)] [background-size:60px_60px]" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${current.number}-${imageIndex}`}
                  initial={{
                    opacity: 0,
                    scale: 0.96,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.03,
                    x: -20,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 flex items-center justify-center p-6 sm:p-10"
                >
                  <ProjectVisual
                    title={current.title}
                    image={currentImages[imageIndex]}
                    imageCount={currentImages.length}
                    imageIndex={imageIndex}
                    onPrevious={previousImage}
                    onNext={nextImage}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                <div>
                  <p className="text-[9px] font-black tracking-[0.2em] text-white/20">
                    PROJECT VISUAL
                  </p>

                  <p className="mt-1 text-lg font-black tracking-tight text-white/80">
                    {current.title}
                  </p>
                </div>

                <ArrowDownRight className="h-6 w-6 text-[#d4af37]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            ALL PROJECTS STRIP
        ===================================================== */}

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {projects.map((project, index) => {
            const isStarProject =
              project.title === "CareerPilot AI";

            return (
              <motion.button
                key={project.number}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {
                        opacity: 0,
                        y: 45,
                      }
                }
                transition={{
                  delay: 0.18 + index * 0.08,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() =>
                  setActive(
                    projects.findIndex(
                      (item) => item.number === project.number
                    )
                  )
                }
                className={`group relative overflow-hidden rounded-[24px] p-6 text-left transition-all duration-500 hover:-translate-y-2 sm:p-7 ${
                  isStarProject
                    ? "border-2 border-[#b38d1d]/45 bg-[#fffaf0] shadow-[0_20px_70px_rgba(179,141,29,0.14)] hover:border-[#b38d1d]/70 hover:shadow-[0_30px_90px_rgba(179,141,29,0.20)]"
                    : "border border-black/10 bg-white hover:border-black/20 hover:shadow-[0_25px_70px_rgba(0,0,0,0.10)]"
                }`}
              >
                {/* Star project glow */}

                {isStarProject && (
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#d4af37]/10 blur-3xl" />
                )}

                <div className="absolute right-5 top-5 text-[10px] font-black tracking-[0.16em] text-black/20">
                  {project.number}
                </div>

                {/* Star badge */}

                {isStarProject && (
                  <div className="absolute left-5 top-5 rounded-full border border-[#b38d1d]/30 bg-[#d4af37]/10 px-2.5 py-1.5">
                    <span className="text-[8px] font-black tracking-[0.13em] text-[#8d6d12]">
                      MY STAR PROJECT
                    </span>
                  </div>
                )}

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 ${
                    isStarProject
                      ? "mt-7 border-[#b38d1d]/25 bg-[#d4af37]/10 group-hover:border-[#b38d1d]/50 group-hover:bg-[#d4af37]/20"
                      : "border-black/10 bg-black/[0.025] group-hover:border-[#d4af37]/30 group-hover:bg-[#d4af37]/10"
                  }`}
                >
                  {project.title.includes("CareerPilot") ? (
                    <Sparkles className="h-5 w-5 text-[#b38d1d]" />
                  ) : project.title.includes("Attrition") ? (
                    <Sparkles className="h-5 w-5 text-[#b38d1d]" />
                  ) : project.title.includes("TaskFlow") ? (
                    <Layers3 className="h-5 w-5 text-[#b38d1d]" />
                  ) : project.title.includes("DevBoard") ? (
                    <ArrowDownRight className="h-5 w-5 text-[#b38d1d]" />
                  ) : (
                    <Radio className="h-5 w-5 text-[#b38d1d]" />
                  )}
                </div>

                <p className="mt-7 text-[9px] font-black tracking-[0.17em] text-[#b38d1d]">
                  {project.status}
                </p>

                <h3 className="mt-2 pr-8 text-2xl font-black leading-none tracking-[-0.04em]">
                  {project.title}
                </h3>

                {isStarProject && (
                  <p className="mt-3 text-[9px] font-black uppercase tracking-[0.14em] text-[#8d6d12]">
                    AI · FULL-STACK · FLAGSHIP
                  </p>
                )}

                <p className="mt-4 line-clamp-3 text-sm leading-6 text-black/48">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className={`rounded-md px-2.5 py-1.5 text-[9px] font-bold ${
                        isStarProject
                          ? "bg-[#d4af37]/10 text-[#8d6d12]"
                          : "bg-black/[0.04] text-black/45"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div
                  className={`mt-7 flex items-center justify-between border-t pt-5 ${
                    isStarProject
                      ? "border-[#b38d1d]/20"
                      : "border-black/10"
                  }`}
                >
                  <span
                    className={`text-xs font-black tracking-[0.08em] ${
                      isStarProject
                        ? "text-[#8d6d12]"
                        : "text-black/35"
                    }`}
                  >
                    {isStarProject
                      ? "EXPLORE FLAGSHIP"
                      : "VIEW PROJECT"}
                  </span>

                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                      isStarProject
                        ? "border-[#b38d1d]/30 bg-[#d4af37]/10 group-hover:border-[#b38d1d]/50 group-hover:bg-[#d4af37]"
                        : "border-black/10 group-hover:border-[#d4af37]/40 group-hover:bg-[#d4af37]"
                    }`}
                  >
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* =====================================================
            GITHUB
        ===================================================== */}

        <motion.a
          href="https://github.com/areebamansoor49-eng"
          target="_blank"
          rel="noreferrer"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          transition={{
            delay: 0.5,
            duration: 0.6,
          }}
          className="group mt-6 flex items-center justify-between rounded-[24px] border border-black/10 bg-[#0a0a0a] p-6 text-white transition-transform duration-500 hover:-translate-y-1 sm:p-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05]">
              <GitBranch className="h-5 w-5 text-[#d4af37]" />
            </div>

            <div>
              <p className="text-[9px] font-black tracking-[0.2em] text-[#d4af37]">
                MORE WORK
              </p>

              <p className="mt-1 text-lg font-black sm:text-xl">
                Explore my GitHub profile
              </p>
            </div>
          </div>

          <ArrowRight className="h-5 w-5 text-white/35 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-[#d4af37]" />
        </motion.a>
      </div>

      {/* =======================================================
          PROJECT DETAIL MODAL
      ======================================================= */}

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl sm:p-6"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.95,
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
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="relative max-h-[90vh] w-full max-w-[900px] overflow-y-auto rounded-[30px] border border-white/10 bg-[#101010] p-7 text-white shadow-2xl sm:p-10 lg:p-12"
            >
              <button
                onClick={() => setModalOpen(false)}
                aria-label="Close project details"
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="pr-14">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs font-black tracking-[0.2em] text-[#d4af37]">
                    PROJECT / {current.number}
                  </p>

                  {current.title === "CareerPilot AI" && (
                    <span className="rounded-full border border-[#d4af37]/25 bg-[#d4af37]/10 px-3 py-1.5 text-[9px] font-black tracking-[0.15em] text-[#d4af37]">
                      MY STAR PROJECT
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-[clamp(2.7rem,6vw,5.5rem)] font-black leading-[0.86] tracking-[-0.06em]">
                  {current.title}
                </h3>

                {current.title === "CareerPilot AI" && (
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#d4af37]/80">
                    My most extensive personal product to date.
                  </p>
                )}

                <p className="mt-6 max-w-[700px] text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
                  {current.description}
                </p>
              </div>

              {/* Real screenshot */}

              {currentImages.length > 0 && (
                <div className="mt-9 overflow-hidden rounded-2xl border border-white/10 bg-black">
                  <div className="relative aspect-video">
                    <Image
                      src={currentImages[imageIndex]}
                      alt={`${current.title} project screenshot`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 900px) 100vw, 800px"
                    />
                  </div>
                </div>
              )}

              {/* TaskFlow modal visual */}

              {current.title === "TaskFlow API" && (
                <div className="mt-9">
                  <TaskFlowVisual />
                </div>
              )}

              {/* Industrial modal visual */}

              {current.title ===
                "Industrial Tank Monitoring" && (
                <div className="mt-9">
                  <IndustrialVisual />
                </div>
              )}

              <div className="mt-9 flex flex-wrap gap-2">
                {current.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.035] px-3.5 py-2.5 text-xs font-bold text-white/55"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <ProjectLink
                  href={current.github}
                  icon={
                    <GitBranch className="h-4 w-4" />
                  }
                  label="View Source on GitHub"
                />

                {current.live && (
                  <ProjectLink
                    href={current.live}
                    icon={
                      <ExternalLink className="h-4 w-4" />
                    }
                    label="Open Live Project"
                    secondary
                  />
                )}
              </div>

              <div className="mt-8 rounded-2xl border border-[#d4af37]/15 bg-[#d4af37]/[0.035] p-6">
                <p className="text-[10px] font-black tracking-[0.2em] text-[#d4af37]">
                  QUICK VIEW
                </p>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  {current.category} · {current.status}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ============================================================
   PROJECT VISUAL
============================================================ */

function ProjectVisual({
  title,
  image,
  imageCount,
  imageIndex,
  onPrevious,
  onNext,
}: {
  title: string;
  image?: string;
  imageCount: number;
  imageIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}) {
  /*
   * Actual project screenshot
   */

  if (image) {
    return (
      <div className="relative h-full w-full max-w-[650px]">
        <div className="absolute -inset-8 rounded-[35px] bg-[#d4af37]/[0.06] blur-3xl" />

        <motion.div
          whileHover={{
            scale: 1.015,
            y: -4,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[22px] border border-white/15 bg-[#181818] shadow-[0_35px_100px_rgba(0,0,0,0.55)]"
        >
          {/* Browser header */}

          <div className="flex h-11 items-center gap-3 border-b border-white/10 bg-[#101010] px-4">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>

            <div className="flex-1 rounded-md border border-white/5 bg-white/[0.025] px-3 py-1.5">
              <p className="truncate text-[8px] font-medium tracking-wide text-white/20">
                {title
                  .toLowerCase()
                  .replaceAll(" ", "-")}
                .app
              </p>
            </div>

            <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
          </div>

          {/* ACTUAL IMAGE */}

          <div className="relative aspect-[16/10] overflow-hidden bg-white">
            <Image
              src={image}
              alt={`${title} screenshot`}
              fill
              priority
              className="object-contain object-center transition-transform duration-700 hover:scale-[1.015]"
              sizes="(max-width: 1024px) 90vw, 600px"
            />
          </div>

          {/* Screenshot controls */}

          {imageCount > 1 && (
            <>
              <button
                onClick={onPrevious}
                aria-label="Previous screenshot"
                className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition hover:border-[#d4af37]/60 hover:bg-[#d4af37] hover:text-black"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>

              <button
                onClick={onNext}
                aria-label="Next screenshot"
                className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition hover:border-[#d4af37]/60 hover:bg-[#d4af37] hover:text-black"
              >
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full border border-white/10 bg-black/70 px-3 py-2 backdrop-blur-md">
                {Array.from({
                  length: imageCount,
                }).map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 rounded-full transition-all ${
                      imageIndex === index
                        ? "w-5 bg-[#d4af37]"
                        : "w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </motion.div>

        <div className="mt-4 flex items-center justify-between px-2">
          <span className="text-[8px] font-black tracking-[0.2em] text-white/20">
            ACTUAL PROJECT PREVIEW
          </span>

          {imageCount > 1 && (
            <span className="text-[8px] font-black tracking-[0.15em] text-[#d4af37]/70">
              {String(imageIndex + 1).padStart(
                2,
                "0"
              )}{" "}
              / {String(imageCount).padStart(2, "0")}
            </span>
          )}
        </div>
      </div>
    );
  }

  if (title === "TaskFlow API") {
    return <TaskFlowVisual />;
  }

  if (title === "Industrial Tank Monitoring") {
    return <IndustrialVisual />;
  }

  return null;
}

/* ============================================================
   TASKFLOW API
============================================================ */

function TaskFlowVisual() {
  return (
    <div className="relative w-full max-w-[580px]">
      <div className="absolute -inset-10 rounded-full bg-[#d4af37]/[0.06] blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#080808] shadow-[0_35px_100px_rgba(0,0,0,0.55)]">

        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>

          <span className="text-[8px] font-black tracking-[0.2em] text-[#d4af37]/70">
            TASKFLOW / API
          </span>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <Server className="h-5 w-5 text-[#d4af37]" />

            <div>
              <p className="text-[9px] font-black tracking-[0.2em] text-white/30">
                REST API
              </p>

              <p className="mt-1 text-xl font-black text-white">
                TaskFlow Backend
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <ApiRow
              method="GET"
              path="/api/tasks"
              status="200 OK"
            />

            <ApiRow
              method="POST"
              path="/api/tasks"
              status="201 CREATED"
            />

            <ApiRow
              method="PUT"
              path="/api/tasks/:id"
              status="200 UPDATED"
            />

            <ApiRow
              method="DELETE"
              path="/api/tasks/:id"
              status="200 DELETED"
            />
          </div>

          <div className="mt-7 grid grid-cols-3 gap-2">
            <CrudMetric
              label="CREATE"
              value="POST"
            />

            <CrudMetric
              label="UPDATE"
              value="PUT"
            />

            <CrudMetric
              label="DELETE"
              value="DELETE"
            />
          </div>

          <div className="mt-6 rounded-xl border border-[#d4af37]/15 bg-[#d4af37]/[0.035] p-4">
            <p className="text-[8px] font-black tracking-[0.2em] text-[#d4af37]">
              BACKEND WORKFLOW
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-[9px] font-bold text-white/35">
              <span>REQUEST</span>

              <ArrowRight className="h-3 w-3 text-[#d4af37]" />

              <span>VALIDATION</span>

              <ArrowRight className="h-3 w-3 text-[#d4af37]" />

              <span>CRUD</span>

              <ArrowRight className="h-3 w-3 text-[#d4af37]" />

              <span>RESPONSE</span>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-[#d4af37]" />

              <span className="text-[8px] font-black tracking-[0.15em] text-white/30">
                API STATUS
              </span>
            </div>

            <span className="text-xs font-black text-[#d4af37]">
              OPERATIONAL
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-[8px] font-black tracking-[0.2em] text-white/20">
        BACKEND / REST / CRUD / DEPLOYED
      </p>
    </div>
  );
}

function ApiRow({
  method,
  path,
  status,
}: {
  method: string;
  path: string;
  status: string;
}) {
  const methodClass =
    method === "GET"
      ? "text-emerald-400"
      : method === "POST"
        ? "text-blue-400"
        : method === "PUT"
          ? "text-yellow-400"
          : "text-red-400";

  return (
    <div className="rounded-xl border border-white/7 bg-white/[0.025] px-4 py-3">
      <div className="flex items-center justify-between gap-3">
        <span
          className={`min-w-[48px] text-[9px] font-black tracking-[0.12em] ${methodClass}`}
        >
          {method}
        </span>

        <span className="flex-1 font-mono text-[10px] text-white/45">
          {path}
        </span>

        <span className="text-[8px] font-black tracking-wide text-white/25">
          {status}
        </span>
      </div>
    </div>
  );
}

function CrudMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.025] p-3 text-center">
      <p className="text-[7px] font-black tracking-[0.16em] text-white/25">
        {label}
      </p>

      <p className="mt-2 font-mono text-xs font-black text-[#d4af37]">
        {value}
      </p>
    </div>
  );
}

/* ============================================================
   INDUSTRIAL TANK MONITORING
============================================================ */

function IndustrialVisual() {
  return (
    <div className="relative w-full max-w-[600px]">
      <div className="absolute -inset-12 rounded-full bg-[#d4af37]/[0.05] blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-[#d4af37]/15 bg-[#080808] p-6 shadow-[0_35px_100px_rgba(0,0,0,0.55)] sm:p-8">

        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-[8px] font-black tracking-[0.25em] text-[#d4af37]">
              SYSTEM / IN DEVELOPMENT
            </p>

            <h4 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">
              Industrial Tank
              <br />
              Monitoring
            </h4>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/[0.05]">
            <Cpu className="h-5 w-5 text-[#d4af37]" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-[0.8fr_1.2fr] gap-5">
          <div className="relative flex items-center justify-center rounded-2xl border border-white/8 bg-white/[0.02] p-5">
            <div className="relative h-48 w-24 overflow-hidden rounded-[30px] border-2 border-white/15 bg-white/[0.02]">
              <motion.div
                animate={{
                  height: ["58%", "64%", "58%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#d4af37]/50 to-[#d4af37]/10"
              />

              <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/15" />

              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center">
                <span className="text-[10px] font-black text-white/60">
                  SIMULATED
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <SystemMetric
              icon={<Activity className="h-4 w-4" />}
              label="MONITORING"
              value="IN DEVELOPMENT"
            />

            <SystemMetric
              icon={<Radio className="h-4 w-4" />}
              label="SENSOR LAYER"
              value="PLANNED"
            />

            <SystemMetric
              icon={<Database className="h-4 w-4" />}
              label="INVENTORY"
              value="PLANNED"
            />

            <SystemMetric
              icon={<Cpu className="h-4 w-4" />}
              label="CONTROL LAYER"
              value="PLANNED"
            />
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.02] p-5">
          <p className="text-[8px] font-black tracking-[0.2em] text-white/25">
            SYSTEM ARCHITECTURE
          </p>

          <div className="mt-4 flex items-center justify-between gap-2">
            <FlowNode label="SENSORS" />

            <FlowLine />

            <FlowNode label="CONTROL" />

            <FlowLine />

            <FlowNode label="DATA" />

            <FlowLine />

            <FlowNode label="UI" />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-[8px] font-black tracking-[0.2em] text-white/20">
            CONCEPT / SYSTEM DESIGN
          </span>

          <span className="rounded-full border border-[#d4af37]/25 bg-[#d4af37]/[0.07] px-3 py-1.5 text-[8px] font-black tracking-[0.15em] text-[#d4af37]">
            CURRENTLY BUILDING
          </span>
        </div>
      </div>

      <p className="mt-4 text-center text-[8px] font-black tracking-[0.2em] text-white/20">
        IOT / MONITORING / INVENTORY / SYSTEMS
      </p>
    </div>
  );
}

function SystemMetric({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.025] p-3.5">
      <div className="flex items-center gap-2 text-[#d4af37]">
        {icon}

        <span className="text-[7px] font-black tracking-[0.16em] text-white/25">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm font-black text-white/75">
        {value}
      </p>
    </div>
  );
}

function FlowNode({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-[#d4af37]/15 bg-[#d4af37]/[0.035] px-2 py-2 text-center">
      <span className="text-[7px] font-black tracking-[0.12em] text-[#d4af37]/75">
        {label}
      </span>
    </div>
  );
}

function FlowLine() {
  return (
    <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/60 to-[#d4af37]/20" />
  );
}

/* ============================================================
   LINKS
============================================================ */

function ProjectLink({
  href,
  icon,
  label,
  secondary = false,
}: {
  href: string | null;
  icon: React.ReactNode;
  label: string;
  secondary?: boolean;
}) {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-all ${
        secondary
          ? "border border-white/10 bg-white/[0.03] text-white/60 hover:border-[#d4af37]/30 hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
          : "bg-[#d4af37] text-black hover:-translate-y-1 hover:bg-[#e2c55a]"
      }`}
    >
      {icon}

      {label}

      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}