"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Mail,
  MapPin,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[85vh] overflow-hidden bg-[#050505] px-5 py-28 sm:px-8 lg:px-12"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[35%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d4af37]/[0.06] blur-[140px]"
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[65vh] max-w-6xl flex-col justify-between">
        {/* Top signal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#d4af37]" />

            <span className="text-[9px] font-black tracking-[0.35em] text-[#d4af37]">
              CONTACT / CONNECT
            </span>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d4af37]" />

            <span className="text-[8px] font-bold tracking-[0.2em] text-white/25">
              OPEN TO OPPORTUNITIES
            </span>
          </div>
        </motion.div>

        {/* Main statement */}
        <div className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-[9px] font-black tracking-[0.3em] text-white/25">
              LET&apos;S BUILD SOMETHING
            </p>

            <h2 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-[#f5f1e8] sm:text-7xl lg:text-[7.5rem]">
              TURN
              <br />
              <span className="text-[#d4af37]">IDEAS</span>
              <br />
              INTO SYSTEMS<span className="text-[#d4af37]">.</span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/40">
              Interested in software development, AI, full-stack products,
              systems, or meaningful technical projects? I&apos;d be happy to
              connect.
            </p>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {/* Email */}
            <a
              href="mailto:areeba.dm052@gmail.com"
              className="group rounded-[22px] border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/30 hover:bg-[#d4af37]/[0.035]"
            >
              <div className="flex items-start justify-between">
                <Mail size={19} className="text-[#d4af37]" />

                <ArrowUpRight
                  size={17}
                  className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d4af37]"
                />
              </div>

              <p className="mt-8 text-[8px] font-black tracking-[0.22em] text-white/25">
                EMAIL
              </p>

              <p className="mt-2 break-all text-sm font-bold text-white/70">
                areeba.dm052@gmail.com
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/areeba-mansoor-7b307134b/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[22px] border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/30 hover:bg-[#d4af37]/[0.035]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-[19px] w-[19px] items-center justify-center rounded-[4px] bg-[#d4af37] text-[11px] font-black text-black">
                  in
                </div>

                <ExternalLink
                  size={17}
                  className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d4af37]"
                />
              </div>

              <p className="mt-8 text-[8px] font-black tracking-[0.22em] text-white/25">
                LINKEDIN
              </p>

              <p className="mt-2 text-sm font-bold text-white/70">
                Areeba Mansoor
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/areebamansoor49-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[22px] border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/30 hover:bg-[#d4af37]/[0.035]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-[19px] w-[19px] items-center justify-center rounded-full border border-[#d4af37] text-[10px] font-black text-[#d4af37]">
                  GH
                </div>

                <ExternalLink
                  size={17}
                  className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d4af37]"
                />
              </div>

              <p className="mt-8 text-[8px] font-black tracking-[0.22em] text-white/25">
                GITHUB
              </p>

              <p className="mt-2 text-sm font-bold text-white/70">
                areebamansoor49-eng
              </p>
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="border-t border-white/10 pt-6"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/5">
                <MapPin size={16} className="text-[#d4af37]" />
              </div>

              <div>
                <p className="text-[8px] font-black tracking-[0.2em] text-white/20">
                  BASED IN
                </p>

                <p className="mt-1 text-xs font-bold text-white/60">
                  Karachi, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Sparkles size={14} className="text-[#d4af37]" />

              <p className="text-[8px] font-bold tracking-[0.2em] text-white/25">
                SOFTWARE · AI · SYSTEMS
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-3 text-[8px] font-bold tracking-[0.16em] text-white/15 sm:flex-row">
            <span>© 2026 AREEBA MANSOOR</span>

            <span>BUILT WITH NEXT.JS · REACT · FRAMER MOTION</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}