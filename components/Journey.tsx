"use client";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  BrainCircuit,
  Code2,
  Cpu,
  GraduationCap,
  Layers3,
  Network,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

const journey = [
  {
    number: "01",
    year: "2024",
    title: "Computer Science",
    subtitle: "FOUNDATION",
    description:
      "Building the core foundation in computer science through programming, algorithms, databases, systems, and software development.",
    technologies: ["Programming", "Algorithms", "Databases", "Systems"],
    icon: GraduationCap,
  },
  {
    number: "02",
    year: "2026",
    title: "Full-Stack Development",
    subtitle: "BUILDING",
    description:
      "Moving from academic concepts into real software products, APIs, dashboards, authentication, deployment, and responsive web experiences.",
    technologies: ["React", "Next.js", "Node.js", "REST APIs"],
    icon: Code2,
  },
  {
    number: "03",
    year: "2026",
    title: "AI & Data",
    subtitle: "INTELLIGENCE",
    description:
      "Exploring machine learning and AI-powered applications through projects involving prediction, data, career intelligence, and automation.",
    technologies: ["Python", "Machine Learning", "AI", "Data"],
    icon: BrainCircuit,
  },
  {
    number: "04",
    year: "2026",
    title: "Systems & IoT",
    subtitle: "ENGINEERING",
    description:
      "Expanding toward systems thinking through industrial monitoring, connected components, controllers, data flow, and software-hardware interaction.",
    technologies: ["IoT", "Monitoring", "Controllers", "System Design"],
    icon: Cpu,
  },
  {
    number: "05",
    year: "NEXT",
    title: "Software Engineering",
    subtitle: "DIRECTION",
    description:
      "Bringing software, AI, full-stack development, and systems thinking together into scalable engineering products.",
    technologies: ["Architecture", "Scalability", "AI Systems", "Products"],
    icon: Network,
  },
];

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 25%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.35,
  });

  const lineScale = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080808] px-5 py-28 text-[#f5f1e8] sm:px-8 lg:px-12 lg:py-40"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-[#d4af37]/[0.035] blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] h-96 w-96 rounded-full bg-[#d4af37]/[0.025] blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-20 max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#d4af37]" />

            <span className="text-[10px] font-black uppercase tracking-[0.32em] text-[#d4af37]">
              CAREER EVOLUTION
            </span>

            <span className="rounded-full border border-[#d4af37]/20 px-3 py-1 text-[8px] font-bold tracking-[0.2em] text-white/35">
              2024 → NEXT
            </span>
          </div>

          <h2 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            The path is
            <br />
            <span className="text-white/25">still evolving.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
            A continuous progression from computer science fundamentals to
            full-stack products, AI, and systems-oriented engineering.
          </p>
        </motion.div>

        {/* Journey Map */}
        <div ref={progressRef} className="relative">
          {/* Desktop vertical line */}
          <div className="absolute left-[34px] top-0 hidden h-full w-px bg-white/[0.08] md:block">
            <motion.div
              style={{
                scaleY: lineScale,
                transformOrigin: "top",
              }}
              className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#d4af37] via-[#d4af37]/70 to-transparent"
            />
          </div>

          {/* Mobile vertical line */}
          <div className="absolute left-[19px] top-0 h-full w-px bg-white/[0.08] md:hidden">
            <motion.div
              style={{
                scaleY: lineScale,
                transformOrigin: "top",
              }}
              className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#d4af37] via-[#d4af37]/70 to-transparent"
            />
          </div>

          <div className="space-y-10 md:space-y-14">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <JourneyNode
                  key={item.number}
                  item={item}
                  Icon={Icon}
                  index={index}
                />
              );
            })}
          </div>
        </div>

        {/* Bottom direction panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mt-24 overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.018]"
        >
          <div className="grid lg:grid-cols-[1fr_auto]">
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="mb-5 flex items-center gap-3">
                <Sparkles size={15} className="text-[#d4af37]" />

                <span className="text-[9px] font-black tracking-[0.25em] text-[#d4af37]">
                  CURRENT DIRECTION
                </span>
              </div>

              <h3 className="max-w-2xl text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                Software engineering through a systems mindset.
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
                The goal is not simply to build interfaces. It is to understand
                how software, data, AI, APIs, and connected systems work
                together to create useful products.
              </p>
            </div>

            <div className="flex items-center border-t border-white/[0.08] p-7 lg:border-l lg:border-t-0 lg:px-12">
              <div>
                <div className="flex items-center gap-3">
                  <Layers3 size={17} className="text-[#d4af37]" />

                  <span className="text-[9px] font-black tracking-[0.22em] text-white/30">
                    BUILDING TOWARD
                  </span>
                </div>

                <p className="mt-3 text-xl font-black text-white/75">
                  Scalable Engineering
                </p>

                <div className="mt-3 h-px w-24 bg-[#d4af37]/50" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function JourneyNode({
  item,
  Icon,
  index,
}: {
  item: (typeof journey)[number];
  Icon: typeof GraduationCap;
  index: number;
}) {
  const nodeRef = useRef<HTMLDivElement>(null);

  const active = useInView(nodeRef, {
    amount: 0.55,
    margin: "-10% 0px -10% 0px",
  });

  return (
    <motion.article
      ref={nodeRef}
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.75,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative grid gap-6 md:grid-cols-[68px_1fr] md:gap-8"
    >
      {/* Node */}
      <div className="relative z-10 flex items-start justify-center">
        <motion.div
          animate={{
            scale: active ? 1.08 : 1,
            borderColor: active
              ? "rgba(212,175,55,0.65)"
              : "rgba(255,255,255,0.10)",
            backgroundColor: active
              ? "rgba(212,175,55,0.10)"
              : "rgba(255,255,255,0.025)",
          }}
          transition={{
            duration: 0.4,
          }}
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full border backdrop-blur-xl"
        >
          <Icon
            size={16}
            className={
              active ? "text-[#d4af37]" : "text-white/35"
            }
          />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        animate={{
          borderColor: active
            ? "rgba(212,175,55,0.20)"
            : "rgba(255,255,255,0.07)",
          backgroundColor: active
            ? "rgba(212,175,55,0.025)"
            : "rgba(255,255,255,0.012)",
        }}
        transition={{
          duration: 0.45,
        }}
        className="group rounded-[28px] border p-6 sm:p-8 lg:p-10"
      >
        <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="text-[9px] font-black tracking-[0.25em] text-[#d4af37]">
                {item.number}
              </span>

              <span className="h-px w-6 bg-white/10" />

              <span className="text-[9px] font-bold tracking-[0.22em] text-white/25">
                {item.subtitle}
              </span>
            </div>

            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
              <h3 className="text-3xl font-black tracking-[-0.035em] sm:text-4xl">
                {item.title}
              </h3>

              <span className="text-[10px] font-bold tracking-[0.2em] text-white/20">
                {item.year}
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
              {item.description}
            </p>
          </div>

          <div className="shrink-0 lg:pt-1">
            <div
              className={`h-2 w-2 rounded-full transition-all duration-500 ${
                active
                  ? "bg-[#d4af37] shadow-[0_0_18px_rgba(212,175,55,0.8)]"
                  : "bg-white/15"
              }`}
            />
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-2">
          {item.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-2 text-[9px] font-bold tracking-[0.12em] text-white/35 transition-colors group-hover:border-[#d4af37]/15 group-hover:text-white/50"
            >
              {technology}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.article>
  );
}