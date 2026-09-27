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
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Code2,
  Landmark,
  MapPin,
  Radio,
} from "lucide-react";
import { useRef, useState } from "react";

const experiences = [
  {
    number: "01",
    period: "2025 — PRESENT",
    type: "FREELANCE",
    title: "Software & Digital Marketing Freelancer",
    organization: "Independent / Remote",
    location: "Remote",
    icon: Code2,
    accent: "SOFTWARE · DIGITAL",
    description:
      "Working across web development, digital solutions, and online presence projects while continuously expanding my software engineering and technical capabilities.",
    highlights: [
      "Web development",
      "Responsive interfaces",
      "Digital solutions",
      "Client-focused delivery",
    ],
    status: "CURRENT",
  },
  {
    number: "02",
    period: "2026",
    type: "INTERNSHIP",
    title: "Software Development Intern",
    organization: "DecodeLabs",
    location: "Remote",
    icon: Code2,
    accent: "SOFTWARE · DEVELOPMENT",
    description:
      "Completed a 4-week remote unpaid internship focused on practical software development through hands-on projects and implementation work.",
    highlights: [
      "4-week remote internship",
      "Practical development work",
      "DevBoard",
      "TaskFlow API",
    ],
    status: "COMPLETED",
  },
  {
    number: "03",
    period: "2025",
    type: "INTERNSHIP",
    title: "Retail Banking Intern",
    organization: "MCB Bank Ltd.",
    location: "Branch 4074",
    icon: Landmark,
    accent: "BANKING · OPERATIONS",
    description:
      "Completed a 6-week internship gaining practical exposure to branch banking operations, customer-facing processes, and professional workplace environments.",
    highlights: [
      "6-week internship",
      "Branch operations",
      "Customer interaction",
      "Professional workflow",
    ],
    status: "COMPLETED",
  },
  {
    number: "04",
    period: "2024 — 2025",
    type: "WORK EXPERIENCE",
    title: "Data Entry Assistant",
    organization: "University Management",
    location: "Pakistan",
    icon: Building2,
    accent: "DATA · ADMINISTRATION",
    description:
      "Worked with structured information, data handling, documentation, and administrative workflows in a university environment.",
    highlights: [
      "Data handling",
      "Documentation",
      "Administrative workflow",
      "Accuracy-focused work",
    ],
    status: "COMPLETED",
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

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
    [100, -100]
  );

  const smoothBackgroundY = useSpring(backgroundY, {
    stiffness: 45,
    damping: 22,
  });

  const current = experiences[active];
  const CurrentIcon = current.icon;

  const next = () => {
    setActive((value) => (value + 1) % experiences.length);
  };

  const previous = () => {
    setActive(
      (value) =>
        (value - 1 + experiences.length) % experiences.length
    );
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="relative overflow-hidden bg-[#080808] py-28 text-[#f5f1e8] sm:py-36"
    >
      <motion.div
        style={{ y: smoothBackgroundY }}
        className="pointer-events-none absolute -right-[10vw] top-[10%] h-[38vw] w-[38vw] rounded-full bg-[#d4af37]/[0.055] blur-[120px]"
      />

      <div className="pointer-events-none absolute -left-[15vw] top-[50%] h-[35vw] w-[35vw] rounded-full bg-white/[0.018] blur-[120px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:90px_90px]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        {/* HEADER */}

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
          className="mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#d4af37]" />

            <p className="text-xs font-black tracking-[0.28em] text-white/35">
              04 / EXPERIENCE
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="max-w-[850px] text-[clamp(3.5rem,8vw,9rem)] font-black leading-[0.78] tracking-[-0.075em]">
              WHERE
              <br />
              <span className="text-[#d4af37]">
                I&apos;VE WORKED.
              </span>
            </h2>

            <div className="max-w-[470px]">
              <p className="text-base font-medium leading-7 text-white/45 sm:text-lg sm:leading-8">
                A career timeline shaped by software development,
                internships, freelance work, banking exposure, and
                continuous technical growth.
              </p>

              <div className="mt-6 flex items-center gap-3 text-xs font-black tracking-[0.16em] text-white/25">
                <span>{experiences.length} EXPERIENCES</span>

                <span className="h-px w-10 bg-white/10" />

                <span>CAREER LOG</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MAIN EXPERIENCE PANEL */}

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 70,
                }
          }
          transition={{
            delay: 0.1,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid overflow-hidden rounded-[30px] border border-white/10 bg-[#0d0d0d] shadow-[0_35px_100px_rgba(0,0,0,0.35)] lg:grid-cols-[0.72fr_1.28fr]"
        >
          {/* CAREER INDEX */}

          <div className="relative border-b border-white/10 lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/[0.035] via-transparent to-transparent" />

            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BriefcaseBusiness className="h-4 w-4 text-[#d4af37]" />

                  <span className="text-[10px] font-black tracking-[0.2em] text-white/30">
                    CAREER INDEX
                  </span>
                </div>

                <span className="font-mono text-[10px] text-white/20">
                  2024 → 2026
                </span>
              </div>

              <div className="space-y-2">
                {experiences.map((experience, index) => {
                  const Icon = experience.icon;
                  const isActive = index === active;

                  return (
                    <button
                      key={experience.number}
                      type="button"
                      onClick={() => setActive(index)}
                      className={`group relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-500 ${
                        isActive
                          ? "border-[#d4af37]/25 bg-[#d4af37]/[0.055]"
                          : "border-white/5 bg-white/[0.015] hover:border-white/10 hover:bg-white/[0.025]"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="experience-active"
                          className="absolute left-0 top-0 h-full w-[2px] bg-[#d4af37]"
                        />
                      )}

                      <div className="flex items-start gap-4">
                        <div
                          className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                            isActive
                              ? "border-[#d4af37]/30 bg-[#d4af37]/10"
                              : "border-white/8 bg-white/[0.02] group-hover:border-[#d4af37]/20"
                          }`}
                        >
                          <Icon
                            className={`h-4 w-4 ${
                              isActive
                                ? "text-[#d4af37]"
                                : "text-white/30 group-hover:text-[#d4af37]"
                            }`}
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <span
                              className={`text-[9px] font-black tracking-[0.18em] ${
                                isActive
                                  ? "text-[#d4af37]"
                                  : "text-white/25"
                              }`}
                            >
                              {experience.number}
                            </span>

                            <span className="text-[8px] font-black tracking-[0.14em] text-white/20">
                              {experience.period}
                            </span>
                          </div>

                          <h3
                            className={`mt-2 text-base font-black leading-tight transition-colors ${
                              isActive
                                ? "text-white"
                                : "text-white/55 group-hover:text-white/80"
                            }`}
                          >
                            {experience.title}
                          </h3>

                          <p className="mt-2 text-xs font-medium text-white/25">
                            {experience.organization}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ACTIVE EXPERIENCE */}

          <div className="relative min-h-[620px] overflow-hidden">
            <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#d4af37]/[0.045] blur-[110px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.number}
                initial={{
                  opacity: 0,
                  x: 55,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  x: -55,
                  filter: "blur(8px)",
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-10 lg:p-14"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-[#d4af37]/25 bg-[#d4af37]/[0.07] px-3 py-1.5 text-[9px] font-black tracking-[0.16em] text-[#d4af37]">
                        {current.status}
                      </span>

                      <span className="text-[9px] font-black tracking-[0.16em] text-white/20">
                        {current.type}
                      </span>
                    </div>

                    <span className="font-mono text-xs text-white/20">
                      {current.period}
                    </span>
                  </div>

                  <div className="mt-14">
                    <p className="mb-5 text-[10px] font-black tracking-[0.22em] text-[#d4af37]/70">
                      {current.accent}
                    </p>

                    <h3 className="max-w-[850px] text-[clamp(2.8rem,5vw,5.7rem)] font-black leading-[0.86] tracking-[-0.065em] text-white">
                      {current.title}
                    </h3>

                    <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                      <div className="flex items-center gap-2 text-sm font-bold text-white/60">
                        <Building2 className="h-4 w-4 text-[#d4af37]" />
                        {current.organization}
                      </div>

                      <div className="hidden h-4 w-px bg-white/10 sm:block" />

                      <div className="flex items-center gap-2 text-sm font-medium text-white/30">
                        <MapPin className="h-4 w-4" />
                        {current.location}
                      </div>
                    </div>
                  </div>

                  <p className="mt-10 max-w-[760px] text-base leading-7 text-white/45 sm:text-lg sm:leading-8">
                    {current.description}
                  </p>

                  <div className="mt-10 grid gap-3 sm:grid-cols-2">
                    {current.highlights.map((highlight, index) => (
                      <motion.div
                        key={highlight}
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.12 + index * 0.06,
                        }}
                        className="flex items-center gap-3 rounded-xl border border-white/7 bg-white/[0.018] px-4 py-3.5"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />

                        <span className="text-xs font-bold text-white/45">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-14 border-t border-white/8 pt-7">
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/[0.05]">
                        <CurrentIcon className="h-4 w-4 text-[#d4af37]" />
                      </div>

                      <div>
                        <p className="text-[8px] font-black tracking-[0.2em] text-white/20">
                          EXPERIENCE NODE
                        </p>

                        <p className="mt-1 text-xs font-bold text-white/50">
                          Professional Development
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={previous}
                        aria-label="Previous experience"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] transition hover:border-[#d4af37]/30 hover:bg-[#d4af37]/10"
                      >
                        <ArrowRight className="h-4 w-4 rotate-180" />
                      </button>

                      <button
                        type="button"
                        onClick={next}
                        aria-label="Next experience"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] transition hover:border-[#d4af37]/30 hover:bg-[#d4af37]/10"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CAREER SIGNAL */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          transition={{
            delay: 0.35,
            duration: 0.7,
          }}
          className="mt-5 grid gap-5 md:grid-cols-3"
        >
          <CareerSignal
            number="01"
            label="SOFTWARE"
            value="Development"
          />

          <CareerSignal
            number="02"
            label="INTERNSHIPS"
            value="Hands-on Exposure"
          />

          <CareerSignal
            number="03"
            label="DIRECTION"
            value="Software Engineering"
          />
        </motion.div>

        {/* CLOSING STATEMENT */}

        <motion.div
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
            delay: 0.48,
            duration: 0.7,
          }}
          className="mt-16 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-3">
            <Radio className="h-4 w-4 text-[#d4af37]" />

            <span className="text-[10px] font-black tracking-[0.2em] text-white/25">
              CAREER LOG / ACTIVE
            </span>
          </div>

          <p className="max-w-[600px] text-sm leading-6 text-white/25 sm:text-right">
            Each experience added another layer to the same direction:
            building useful technology and growing into software
            engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   CAREER SIGNAL
============================================================ */

function CareerSignal({
  number,
  label,
  value,
}: {
  number: string;
  label: string;
  value: string;
}) {
  return (
    <div className="group rounded-[22px] border border-white/8 bg-white/[0.018] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/20 hover:bg-[#d4af37]/[0.025]">
      <div>
        <span className="text-[9px] font-black tracking-[0.18em] text-[#d4af37]">
          {number}
        </span>
      </div>

      <p className="mt-7 text-[9px] font-black tracking-[0.2em] text-white/25">
        {label}
      </p>

      <p className="mt-2 text-lg font-black text-white/70">
        {value}
      </p>
    </div>
  );
}