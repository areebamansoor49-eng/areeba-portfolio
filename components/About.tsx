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
  BriefcaseBusiness,
  Check,
  CircleDot,
  Compass,
  Cpu,
  GraduationCap,
  MapPin,
  Maximize2,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { aboutProfile } from "@/data/about";

type ModuleId =
  | "identity"
  | "education"
  | "experience"
  | "technical"
  | "direction";

type Module = {
  id: ModuleId;
  number: string;
  label: string;
  title: string;
  icon: React.ReactNode;
  eyebrow: string;
  summary: string;
  preview: string[];
};

const modules: Module[] = [
  {
    id: "identity",
    number: "01",
    label: "IDENTITY",
    title: "Who I Am",
    icon: <CircleDot className="h-5 w-5" />,
    eyebrow: "DIGITAL IDENTITY",
    summary:
      "Computer Science student building practical software across full-stack development, AI, data, and systems.",
    preview: ["Computer Science", "Full-Stack", "AI", "Systems"],
  },
  {
    id: "education",
    number: "02",
    label: "EDUCATION",
    title: "Computer Science",
    icon: <GraduationCap className="h-5 w-5" />,
    eyebrow: "ACADEMIC FOUNDATION",
    summary:
      "Building a strong Computer Science foundation through programming, software development, problem solving, and systems thinking.",
    preview: ["BS Computer Science", "Iqra University", "2024 – 2027"],
  },
  {
    id: "experience",
    number: "03",
    label: "EXPERIENCE",
    title: "Practical Exposure",
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    eyebrow: "REAL-WORLD EXPERIENCE",
    summary:
      "Practical exposure across software development, digital work, data management, banking operations, and technical internship experience.",
    preview: [
      "DecodeLabs",
      "Freelancing",
      "MCB Bank",
      "University",
    ],
  },
  {
    id: "technical",
    number: "04",
    label: "FOUNDATION",
    title: "Technical Core",
    icon: <Cpu className="h-5 w-5" />,
    eyebrow: "COMPUTER SCIENCE CORE",
    summary:
      "A growing technical foundation spanning programming, web development, data, development tools, and software concepts.",
    preview: [
      "Programming",
      "Web",
      "Data & Tools",
      "Digital",
    ],
  },
  {
    id: "direction",
    number: "05",
    label: "DIRECTION",
    title: "Where I'm Going",
    icon: <Compass className="h-5 w-5" />,
    eyebrow: "ENGINEERING DIRECTION",
    summary:
      "Moving toward software engineering through full-stack products, practical AI, systems, and IoT-oriented development.",
    preview: [
      "Software Engineering",
      "Full-Stack",
      "AI Products",
      "Systems & IoT",
    ],
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const [active, setActive] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const inView = useInView(sectionRef, {
    once: false,
    amount: 0.18,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [55, 0, -55]
  );

  const smoothImageY = useSpring(imageY, {
    stiffness: 45,
    damping: 20,
  });

  const activeModule = modules[active] ?? modules[0];

  const goNext = () => {
    setActive((current) => (current + 1) % modules.length);
  };

  const goPrevious = () => {
    setActive(
      (current) => (current - 1 + modules.length) % modules.length
    );
  };

  useEffect(() => {
    if (popupOpen || isPaused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % modules.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [popupOpen, isPaused]);

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (popupOpen) return;

      if (event.key === "ArrowRight") {
        setActive((current) => (current + 1) % modules.length);
      }

      if (event.key === "ArrowLeft") {
        setActive(
          (current) => (current - 1 + modules.length) % modules.length
        );
      }

      if (event.key === "Escape") {
        setPopupOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
    };
  }, [popupOpen]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080808] py-24 text-[#f5f1e8] sm:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <motion.div
        animate={{
          x: ["-8%", "8%", "-8%"],
          y: ["0%", "5%", "0%"],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[-15vw] top-[15%] h-[42vw] w-[42vw] rounded-full bg-[#d4af37]/[0.035] blur-[120px]"
      />

      <motion.div
        animate={{
          x: ["8%", "-8%", "8%"],
          y: ["0%", "-5%", "0%"],
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[5%] right-[-15vw] h-[40vw] w-[40vw] rounded-full bg-[#d4af37]/[0.025] blur-[120px]"
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(212,175,55,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.5)_1px,transparent_1px)] [background-size:90px_90px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: inView ? 1 : 0,
          scale: inView ? 1 : 0.9,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[8%] -translate-x-1/2 select-none text-[clamp(8rem,24vw,25rem)] font-black leading-none tracking-[-0.1em] text-white/[0.018]"
      >
        ABOUT
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-14">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 45,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-12 sm:mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <motion.span
              initial={{ width: 0 }}
              animate={{
                width: inView ? 48 : 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="h-px bg-[#d4af37]"
            />

            <p className="text-[11px] font-bold tracking-[0.28em] text-[#d4af37]">
              01 / ABOUT
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-[1fr_420px] lg:items-end">
            <h2 className="max-w-[850px] text-[clamp(3.2rem,7vw,7rem)] font-black leading-[0.84] tracking-[-0.075em]">
              THE PERSON
              <br />
              <span className="text-[#d4af37]">
                BEHIND THE BUILD.
              </span>
            </h2>

            <p className="max-w-[440px] text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
              A Computer Science student turning technical foundations
              into practical software, AI-powered products, and
              systems-oriented ideas.
            </p>
          </div>
        </motion.div>

        {/* =========================================================
            MAIN EXPERIENCE
        ========================================================= */}

        <div className="grid gap-5 lg:grid-cols-[0.68fr_1.32fr]">
          {/* =====================================================
              PROFILE VISUAL
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.96,
            }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 50,
              scale: inView ? 1 : 0.96,
            }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: "easeOut",
            }}
            className="relative min-h-[430px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0c0c0c] sm:min-h-[500px]"
          >
            <div className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(212,175,55,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.45)_1px,transparent_1px)] [background-size:55px_55px]" />

            {/* TOP LABEL */}

            <div className="absolute left-6 top-6 z-30 sm:left-8 sm:top-8">
              <p className="text-[10px] font-bold tracking-[0.25em] text-[#d4af37]">
                PROFILE / 001
              </p>

              <p className="mt-1.5 text-[11px] font-semibold tracking-[0.08em] text-white/30">
                DIGITAL IDENTITY
              </p>
            </div>

            {/* ORBITAL SYSTEM */}

            <motion.div
              style={{
                y: smoothImageY,
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.08, 0.18, 0.08],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-[250px] w-[250px] rounded-full bg-[#d4af37]/10 blur-[55px] sm:h-[320px] sm:w-[320px]"
              />

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[310px] w-[310px] rounded-full border border-dashed border-[#d4af37]/20 sm:h-[390px] sm:w-[390px]"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#d4af37] shadow-[0_0_18px_rgba(212,175,55,0.9)]"
                />
              </motion.div>

              <motion.div
                animate={{
                  rotate: [0, 3, 0, -3, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-[235px] w-[235px] rounded-full border border-[#d4af37]/40 p-1.5 sm:h-[295px] sm:w-[295px]"
              >
                <div className="h-full w-full rounded-full border border-white/10" />
              </motion.div>

              {/* PHOTO */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.72,
                }}
                animate={{
                  opacity: inView ? 1 : 0,
                  scale: inView ? 1 : 0.72,
                }}
                transition={{
                  duration: 1,
                  delay: 0.35,
                  ease: "easeOut",
                }}
                className="relative z-10 h-[185px] w-[185px] overflow-hidden rounded-full border-[4px] border-[#080808] bg-[#111] shadow-[0_25px_70px_rgba(0,0,0,0.75)] sm:h-[235px] sm:w-[235px]"
              >
                <Image
                  src="/images/areeba.jpg"
                  alt="Areeba Mansoor"
                  fill
                  priority
                  sizes="235px"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-white/5" />
              </motion.div>

              {/* FLOATING STATUS */}

              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[17%] right-[7%] z-30 rounded-xl border border-white/10 bg-black/70 px-3.5 py-2.5 backdrop-blur-xl sm:right-[9%]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-50" />
                    <span className="relative h-2 w-2 rounded-full bg-[#d4af37]" />
                  </span>

                  <span className="text-[9px] font-bold tracking-[0.16em] text-white/60">
                    BUILDING
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* FOOTER */}

            <div className="absolute bottom-6 left-6 right-6 z-30 sm:bottom-8 sm:left-8 sm:right-8">
              <div className="mb-4 h-px bg-white/10" />

              <div className="flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black tracking-tight sm:text-2xl">
                    {aboutProfile.name}
                  </h3>

                  <p className="mt-1 text-xs text-white/35 sm:text-sm">
                    {aboutProfile.role}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-white/30">
                  <MapPin className="h-3 w-3 text-[#d4af37]" />
                  <span>{aboutProfile.location}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              INTERACTIVE MODULE DECK
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.96,
            }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 50,
              scale: inView ? 1 : 0.96,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "easeOut",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative min-h-[430px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0c0c0c] sm:min-h-[500px]"
          >
            {/* DECORATIVE SCAN LINE */}

            <motion.div
              animate={{
                y: ["0%", "1000%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent"
            />

            <div className="absolute right-[-100px] top-[-100px] h-[280px] w-[280px] rounded-full bg-[#d4af37]/[0.025] blur-[80px]" />

            <div className="relative flex min-h-[430px] flex-col p-6 sm:min-h-[500px] sm:p-8 lg:p-10">
              {/* TOP */}

              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.22em] text-[#d4af37]">
                    PERSONAL SYSTEM
                  </p>

                  <div className="mt-1.5 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />

                    <p className="text-[11px] text-white/25">
                      Auto exploration enabled
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={goPrevious}
                    aria-label="Previous module"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-0.5 hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next module"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-0.5 hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* SLIDE */}

              <div className="relative flex flex-1 items-center py-9 sm:py-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeModule.id}
                    initial={{
                      opacity: 0,
                      x: 70,
                      scale: 0.96,
                      filter: "blur(12px)",
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      x: -70,
                      scale: 0.97,
                      filter: "blur(10px)",
                    }}
                    transition={{
                      duration: 0.65,
                      ease: "easeOut",
                    }}
                    className="w-full"
                  >
                    {/* MODULE LABEL */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.1,
                      }}
                      className="mb-5 flex items-center gap-3"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/[0.06] text-[#d4af37]">
                        {activeModule.icon}
                      </div>

                      <div>
                        <p className="text-[10px] font-black tracking-[0.2em] text-[#d4af37]">
                          {activeModule.number}
                        </p>

                        <p className="mt-1 text-[9px] font-bold tracking-[0.18em] text-white/25">
                          {activeModule.eyebrow}
                        </p>
                      </div>
                    </motion.div>

                    {/* TITLE */}

                    <motion.h3
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: 0.16,
                      }}
                      className="max-w-[650px] text-[clamp(2.5rem,5vw,5rem)] font-black leading-[0.88] tracking-[-0.065em]"
                    >
                      {activeModule.title}
                    </motion.h3>

                    {/* SUMMARY */}

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.24,
                      }}
                      className="mt-6 max-w-[650px] text-sm leading-6 text-white/45 sm:text-base sm:leading-7"
                    >
                      {activeModule.summary}
                    </motion.p>

                    {/* PREVIEW CHIPS */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 18,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.32,
                      }}
                      className="mt-6 flex max-w-[700px] flex-wrap gap-2"
                    >
                      {activeModule.preview.map((item, index) => (
                        <motion.span
                          key={item}
                          initial={{
                            opacity: 0,
                            scale: 0.85,
                            y: 8,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.35,
                            delay: 0.34 + index * 0.06,
                          }}
                          className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 text-[10px] font-semibold text-white/45 sm:text-xs"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* CTA */}

                    <motion.button
                      type="button"
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: 0.55,
                      }}
                      onClick={() => setPopupOpen(true)}
                      className="group mt-7 flex items-center gap-2.5 rounded-xl border border-[#d4af37]/25 bg-[#d4af37]/[0.055] px-4 py-3 text-xs font-bold tracking-[0.04em] text-[#d4af37] transition duration-300 hover:-translate-y-1 hover:bg-[#d4af37] hover:text-black"
                    >
                      <Maximize2 className="h-3.5 w-3.5 transition group-hover:rotate-6" />
                      OPEN DETAILS
                    </motion.button>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* PROGRESS */}

              <div className="mb-5 h-px overflow-hidden bg-white/10">
                {!isPaused && !popupOpen && (
                  <motion.div
                    key={active}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 4.2,
                      ease: "linear",
                    }}
                    className="h-full bg-[#d4af37]"
                  />
                )}
              </div>

              {/* MODULE NAV */}

              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold tracking-[0.18em] text-white/20">
                  SYSTEM MODULES
                </span>

                <span className="text-[9px] font-bold tracking-[0.16em] text-white/20">
                  {String(active + 1).padStart(2, "0")} / 05
                </span>
              </div>

              <div className="mt-3 grid grid-cols-5 gap-1.5">
                {modules.map((module, index) => (
                  <button
                    key={module.id}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Open ${module.label}`}
                    className="group relative h-8 overflow-hidden rounded-md"
                  >
                    <motion.div
                      animate={{
                        scaleX: active === index ? 1 : 0.35,
                        opacity: active === index ? 1 : 0.45,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className={`absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 origin-left rounded-full ${
                        active === index
                          ? "bg-[#d4af37]"
                          : "bg-white/20"
                      }`}
                    />

                    <span
                      className={`absolute bottom-0 left-0 right-0 hidden text-[8px] font-bold tracking-[0.08em] sm:block ${
                        active === index
                          ? "text-[#d4af37]"
                          : "text-white/20"
                      }`}
                    >
                      {module.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM IDENTITY STRIP
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 30,
          }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="mt-5 grid gap-3 sm:grid-cols-3"
        >
          {[
            {
              label: "CURRENT FOCUS",
              value: "Software Engineering",
            },
            {
              label: "BUILDING",
              value: "AI · Full-Stack · Systems",
            },
            {
              label: "APPROACH",
              value: "Learn → Build → Iterate",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{
                y: -4,
                borderColor: "rgba(212,175,55,0.25)",
              }}
              transition={{
                duration: 0.25,
              }}
              className="rounded-2xl border border-white/10 bg-[#0c0c0c] p-5"
            >
              <p className="text-[9px] font-bold tracking-[0.2em] text-[#d4af37]">
                {item.label}
              </p>

              <p className="mt-2 text-base font-black sm:text-lg">
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* =========================================================
          DETAILS POPUP
      ========================================================= */}

      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
            }}
            onClick={() => setPopupOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl sm:p-6"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.94,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-[900px] overflow-y-auto rounded-[28px] border border-white/10 bg-[#101010] shadow-2xl"
            >
              {/* POPUP HEADER */}

              <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#101010]/90 px-6 py-5 backdrop-blur-xl sm:px-8">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.22em] text-[#d4af37]">
                    MODULE / {activeModule.number}
                  </p>

                  <p className="mt-1 text-xs text-white/25">
                    {activeModule.eyebrow}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setPopupOpen(false)}
                  aria-label="Close details"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <motion.h3
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="max-w-[700px] text-[clamp(2.6rem,6vw,5.5rem)] font-black leading-[0.86] tracking-[-0.065em]"
                >
                  {activeModule.title}
                </motion.h3>

                {/* IDENTITY */}

                {activeModule.id === "identity" && (
                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <DetailBox
                      label="ABOUT"
                      text={aboutProfile.intro}
                    />

                    <DetailBox
                      label="MY STORY"
                      text={aboutProfile.story}
                    />

                    <DetailBox
                      label="POSITIONING"
                      text={aboutProfile.positioning}
                    />

                    <DetailBox
                      label="LOCATION"
                      text={aboutProfile.location}
                    />
                  </div>
                )}

                {/* EDUCATION */}

                {activeModule.id === "education" && (
                  <div className="mt-8">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                      <div className="flex flex-col justify-between gap-4 sm:flex-row">
                        <div>
                          <p className="text-[10px] font-bold tracking-[0.18em] text-[#d4af37]">
                            DEGREE
                          </p>

                          <h4 className="mt-2 text-xl font-black sm:text-2xl">
                            {aboutProfile.education.degree}
                          </h4>

                          <p className="mt-2 text-sm text-white/35">
                            {aboutProfile.education.institution}
                          </p>
                        </div>

                        <span className="h-fit rounded-full border border-[#d4af37]/20 bg-[#d4af37]/[0.05] px-3 py-1.5 text-xs font-bold text-[#d4af37]">
                          {aboutProfile.education.period}
                        </span>
                      </div>

                      <p className="mt-6 max-w-[720px] text-sm leading-7 text-white/45 sm:text-base">
                        {aboutProfile.education.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* EXPERIENCE */}

                {activeModule.id === "experience" && (
                  <div className="relative mt-8 space-y-4">
                    <div className="absolute bottom-5 left-[15px] top-5 hidden w-px bg-gradient-to-b from-[#d4af37]/50 via-white/10 to-transparent sm:block" />

                    {aboutProfile.experience.map((experience, index) => (
                      <motion.div
                        key={experience.id}
                        initial={{
                          opacity: 0,
                          x: 25,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.4,
                        }}
                        className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:ml-8 sm:p-6"
                      >
                        <span className="absolute -left-[25px] top-7 hidden h-3 w-3 rounded-full border-2 border-[#101010] bg-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.5)] sm:block" />

                        <div className="flex flex-col justify-between gap-3 sm:flex-row">
                          <div>
                            <p className="text-[9px] font-bold tracking-[0.18em] text-[#d4af37]">
                              {experience.number}
                            </p>

                            <h4 className="mt-1 text-lg font-black sm:text-xl">
                              {experience.title}
                            </h4>

                            <p className="mt-1 text-xs text-white/30">
                              {experience.company}
                            </p>
                          </div>

                          <span className="text-[10px] font-bold tracking-[0.1em] text-white/25">
                            {experience.period}
                          </span>
                        </div>

                        <p className="mt-5 text-sm leading-7 text-white/40">
                          {experience.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {experience.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-lg border border-white/10 bg-black/20 px-2.5 py-1.5 text-[10px] text-white/40"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* TECHNICAL */}

                {activeModule.id === "technical" && (
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {aboutProfile.technical.map((group, index) => (
                      <motion.div
                        key={group.category}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: index * 0.08,
                          duration: 0.4,
                        }}
                        className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6"
                      >
                        <p className="text-[10px] font-black tracking-[0.18em] text-[#d4af37]">
                          {group.category}
                        </p>

                        <div className="mt-5 grid gap-2.5">
                          {group.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-2.5 text-sm font-semibold text-white/50"
                            >
                              <Check className="h-3.5 w-3.5 shrink-0 text-[#d4af37]" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* DIRECTION */}

                {activeModule.id === "direction" && (
                  <div className="mt-8">
                    <p className="max-w-[720px] text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                      My direction combines Computer Science foundations,
                      software engineering, full-stack development,
                      practical AI, and systems-oriented projects.
                    </p>

                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {aboutProfile.direction.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{
                            opacity: 0,
                            y: 15,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: index * 0.08,
                            duration: 0.4,
                          }}
                          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-[#d4af37]/25"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/10 text-xs font-black text-[#d4af37]">
                            0{index + 1}
                          </span>

                          <span className="text-sm font-bold text-white/60">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 px-6 py-5 sm:px-8">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold tracking-[0.18em] text-white/20">
                    AREEBA MANSOOR
                  </span>

                  <button
                    type="button"
                    onClick={() => setPopupOpen(false)}
                    className="flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] text-[#d4af37]"
                  >
                    CLOSE
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function DetailBox({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6"
    >
      <p className="text-[9px] font-bold tracking-[0.18em] text-[#d4af37]">
        {label}
      </p>

      <p className="mt-3 text-sm leading-7 text-white/45">
        {text}
      </p>
    </motion.div>
  );
}