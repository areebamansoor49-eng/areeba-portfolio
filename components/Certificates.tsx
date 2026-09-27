"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CalendarDays,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
};

const certificates: Certificate[] = [
  {
    title: "AI with Integrity",
    issuer: "DataCrumbs",
    date: "Sep 2026",
    category: "Artificial Intelligence",
    image: "/images/certificates/ai-with-integrity.png",
  },
  {
    title: "AI Dashboards",
    issuer: "DataCrumbs",
    date: "Sep 2025",
    category: "Artificial Intelligence",
    image: "/images/certificates/ai-dashboards.png",
  },
  {
    title: "Certified Marketing Specialist",
    issuer: "SkillSider",
    date: "Jul 2025",
    category: "Digital Marketing",
    image: "/images/certificates/certified-marketing-specialist.png",
  },
  {
    title: "No-Code Web Development",
    issuer: "DataCrumbs",
    date: "Jul 2025",
    category: "Web Development",
    image: "/images/certificates/-no-code-web-development.png",
  },
  {
    title: "NO-CHATBOT DEVELOPMENT",
    issuer: "DataCrumbs",
    date: "May 2025",
    category: "Artificial Intelligence",
    image: "/images/certificates/no-chatbot-development.png",
  },
  {
    title: "Use Canva to Create Desktop and Mobile-friendly Web Pages",
    issuer: "Coursera Project Network",
    date: "Feb 2025",
    category: "Web Design",
    image: "/images/certificates/canva-web-pages.png",
  },
  {
    title: "AWS S3 Basics",
    issuer: "Coursera Project Network",
    date: "Feb 2025",
    category: "Cloud Computing",
    image: "/images/certificates/aws-s3-basics.png",
  },
  {
    title: "Datacrumbs",
    issuer: "DataCrumbs",
    date: "May 2025",
    category: "Professional Development",
    image: "/images/certificates/datacrumbs.png",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 90 : -90,
    opacity: 0,
    scale: 0.96,
    rotateY: direction > 0 ? 5 : -5,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -90 : 90,
    opacity: 0,
    scale: 0.96,
    rotateY: direction > 0 ? -5 : 5,
  }),
};

export default function Certifications() {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const current = certificates[index];

  const next = () => {
    setSlide(([currentIndex]) => [
      (currentIndex + 1) % certificates.length,
      1,
    ]);
  };

  const previous = () => {
    setSlide(([currentIndex]) => [
      (currentIndex - 1 + certificates.length) % certificates.length,
      -1,
    ]);
  };

  const goTo = (targetIndex: number) => {
    if (targetIndex === index) return;

    setSlide([
      targetIndex,
      targetIndex > index ? 1 : -1,
    ]);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      next();
    }, 5500);

    return () => window.clearInterval(timer);
  }, [isPaused, index]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const progress = useMemo(
    () => ((index + 1) / certificates.length) * 100,
    [index]
  );

  return (
    <section
      id="certifications"
      className="relative min-h-screen overflow-hidden bg-[#080808] px-5 py-28 text-[#f5f1e8] sm:px-8 lg:px-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[8%] top-[15%] h-[320px] w-[320px] rounded-full bg-[#d4af37]/[0.045] blur-[110px]"
        />

        <motion.div
          animate={{
            x: [0, -70, 30, 0],
            y: [0, 50, -20, 0],
            scale: [1, 0.95, 1.08, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] right-[5%] h-[360px] w-[360px] rounded-full bg-[#f5f1e8]/[0.025] blur-[120px]"
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#d4af37]" />

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d4af37]">
              Credentials
            </span>

            <Sparkles size={13} className="text-[#d4af37]" />
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-black tracking-[-0.04em] text-[#f5f1e8] sm:text-5xl lg:text-6xl">
                Certifications
                <span className="text-[#d4af37]">.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                A visual record of continuous learning across artificial
                intelligence, web development, cloud computing, and digital
                technologies.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
                {certificates.length} Certificates
              </div>

              <div className="rounded-full border border-[#d4af37]/20 bg-[#d4af37]/[0.04] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#d4af37]">
                Learning Archive
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main showcase */}
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)]">
          {/* Certificate stage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Floating decorative rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute -left-8 -top-8 hidden h-24 w-24 rounded-full border border-[#d4af37]/10 lg:block"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 42,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute -bottom-10 -right-8 hidden h-28 w-28 rounded-full border border-white/[0.06] lg:block"
            />

            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.018] p-3 shadow-2xl shadow-black/40 sm:p-5">
              {/* Top HUD */}
              <div className="mb-4 flex items-center justify-between px-2 sm:px-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#d4af37]" />
                  <span className="text-[9px] font-black uppercase tracking-[0.22em] text-white/30">
                    Certificate Viewer
                  </span>
                </div>

                <span className="font-mono text-[10px] tracking-[0.16em] text-[#d4af37]/70">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(certificates.length).padStart(2, "0")}
                </span>
              </div>

              {/* Image viewport */}
              <div className="relative aspect-[1.414/1] overflow-hidden rounded-[24px] border border-white/10 bg-[#111]">
                <motion.div
                  animate={{
                    opacity: [0.15, 0.3, 0.15],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-[#d4af37]/[0.035] blur-3xl"
                />

                <AnimatePresence
                  initial={false}
                  custom={direction}
                  mode="wait"
                >
                  <motion.div
                    key={current.image}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 flex items-center justify-center p-3 sm:p-5"
                    style={{
                      perspective: 1200,
                    }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.025,
                        rotateX: 1,
                        rotateY: -1,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={current.image}
                        alt={`${current.title} certificate`}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 95vw, 65vw"
                        className="object-contain"
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Image edge glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10" />
              </div>

              {/* Controls */}
              <div className="mt-5 flex items-center justify-between gap-4 px-1 sm:px-2">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous certificate"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/50 transition-all duration-300 hover:-translate-x-1 hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                >
                  <ArrowLeft
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-x-0.5"
                  />
                </button>

                <div className="flex flex-1 items-center gap-3">
                  <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/8">
                    <motion.div
                      animate={{ width: `${progress}%` }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      className="h-full rounded-full bg-[#d4af37]"
                    />
                  </div>

                  <span className="hidden text-[9px] font-black uppercase tracking-[0.18em] text-white/25 sm:block">
                    {isPaused ? "PAUSED" : "AUTO"}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next certificate"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/50 transition-all duration-300 hover:translate-x-1 hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                >
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Certificate information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45 }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/[0.06]">
                    <Award size={20} className="text-[#d4af37]" />
                  </div>

                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#d4af37]">
                      Verified Learning
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/25">
                      Professional Credential
                    </p>
                  </div>
                </div>

                <h3 className="max-w-xl text-3xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl">
                  {current.title}
                  <span className="text-[#d4af37]">.</span>
                </h3>

                <p className="mt-5 text-lg font-semibold text-white/65">
                  {current.issuer}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.018] p-5">
                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/25">
                      Issued
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-white/70">
                      <CalendarDays size={15} className="text-[#d4af37]" />
                      {current.date}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-white/[0.018] p-5">
                    <p className="text-[9px] font-black uppercase tracking-[0.18em] text-white/25">
                      Category
                    </p>

                    <p className="mt-3 text-sm font-semibold leading-5 text-white/70">
                      {current.category}
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-[#d4af37]/10 bg-[#d4af37]/[0.025] p-5">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#d4af37]/70">
                    Issuing Organization
                  </p>

                  <p className="mt-2 text-base font-bold text-white/75">
                    {current.issuer}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Certificate selector */}
            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/25">
                  Browse credentials
                </p>

                <span className="text-[9px] font-mono text-white/20">
                  ← / →
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {certificates.map((certificate, certificateIndex) => (
                  <button
                    key={certificate.image}
                    type="button"
                    onClick={() => goTo(certificateIndex)}
                    aria-label={`View ${certificate.title}`}
                    className={`group relative h-2 overflow-hidden rounded-full transition-all duration-500 ${
                      certificateIndex === index
                        ? "w-12 bg-[#d4af37]"
                        : "w-5 bg-white/10 hover:w-8 hover:bg-white/25"
                    }`}
                  >
                    <span
                      className={`absolute inset-0 origin-left bg-[#d4af37] transition-transform duration-500 ${
                        certificateIndex === index
                          ? "scale-x-100"
                          : "scale-x-0"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom signal */}
            <div className="mt-10 flex items-center gap-3 text-white/25">
              <ExternalLink size={14} className="text-[#d4af37]" />

              <span className="text-[9px] font-black uppercase tracking-[0.18em]">
                Continuous learning · Applied knowledge · Technical growth
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-20 border-t border-white/8 pt-8"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-6 text-white/30">
              Certifications represent supporting evidence of learning —
              projects and practical work remain the core of the portfolio.
            </p>

            <div className="flex items-center gap-2 text-[#d4af37]/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                Learning in progress
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}