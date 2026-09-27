"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Mail,
  Award,
} from "lucide-react";

const experience = [
  {
    title: "Software & Digital Marketing Freelancer",
    company: "Independent / Remote",
    date: "2025 — PRESENT",
    description:
      "Delivering web, software, and digital marketing work while combining technical development with digital strategy.",
  },
  {
    title: "Software Development Intern",
    company: "DecodeLabs · Remote",
    date: "2026",
    description:
      "Completed a 4-week remote unpaid internship with practical development work, including DevBoard and TaskFlow API.",
  },
  {
    title: "Retail Banking Intern",
    company: "MCB Bank Ltd. · Branch 4074",
    date: "2025",
    description:
      "Completed a 6-week internship supporting branch operations, customer interaction, and professional banking workflows.",
  },
  {
    title: "Data Entry Assistant",
    company: "University Management",
    date: "2024 — 2025",
    description:
      "Supported university data-management and administrative tasks with accurate, structured record handling.",
  },
];

const projects = [
  {
    title: "CareerPilot AI",
    description:
      "Full-stack AI career platform combining resume analysis, opportunity discovery, interview preparation, career planning, and professional profile optimization.",
  },
  {
    title: "Employee Attrition AI",
    description:
      "Full-stack machine-learning application using employee and workplace data to predict attrition risk through an interactive dashboard.",
  },
  {
    title: "TaskFlow API",
    description:
      "RESTful task management API with CRUD operations, validation, middleware, error handling, health checks, and cloud deployment.",
  },
  {
    title: "DevBoard",
    description:
      "Developer productivity dashboard for managing projects, tasks, priorities, progress, and development activity.",
  },
  {
    title: "Industrial Tank Monitoring & Inventory Control System",
    description:
      "Currently building a systems-oriented IoT platform exploring sensors, controllers, monitoring, inventory management, and software-hardware data flow.",
  },
];

const certifications = [
  "AI with Integrity — DataCrumbs · Sep 2026",
  "AI Dashboards — DataCrumbs · Sep 2025",
  "Certified Marketing Specialist — SkillSider · Jul 2025",
  "No-Code Web Development — DataCrumbs · Jul 2025",
  "NO-CHATBOT DEVELOPMENT — DataCrumbs · May 2025",
  "Datacrumbs — DataCrumbs · May 2025",
  "Use Canva to Create Desktop and Mobile-friendly Web Pages — Coursera Project Network · Feb 2025",
  "AWS S3 Basics — Coursera Project Network · Feb 2025",
];

const skills = [
  "Python",
  "JavaScript",
  "C",
  "C++",
  "HTML5",
  "CSS3",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "REST APIs",
  "Machine Learning",
  "Scikit-learn",
  "AI Applications",
  "Data Analysis",
  "Git",
  "GitHub",
  "Vercel",
  "Microsoft Office",
  "Excel",
  "SEO",
  "Social Media Marketing",
  "Content Creation",
  "Canva",
];

function SectionTitle({
  number,
  title,
  icon,
}: {
  number: string;
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/5 text-[#d4af37]">
        {icon}
      </div>

      <div>
        <p className="text-[8px] font-black tracking-[0.25em] text-[#d4af37]/60">
          {number}
        </p>

        <h3 className="text-sm font-black tracking-[0.12em] text-[#f5f1e8]">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-[#080808] px-5 py-28 sm:px-8 lg:px-12"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-[#d4af37]/[0.025] blur-[110px]" />
        <div className="absolute bottom-[10%] right-[8%] h-96 w-96 rounded-full bg-[#d4af37]/[0.02] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#d4af37]" />

            <span className="text-[9px] font-black tracking-[0.35em] text-[#d4af37]">
              PROFESSIONAL PROFILE
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-black tracking-[-0.04em] text-[#f5f1e8] sm:text-5xl lg:text-6xl">
                Resume<span className="text-[#d4af37]">.</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                A concise overview of my academic background, technical
                experience, projects, and professional development.
              </p>
            </div>

            <div className="hidden text-right md:block">
              <p className="text-[8px] font-black tracking-[0.25em] text-white/20">
                LOCATION
              </p>
              <p className="mt-1 text-sm font-semibold text-white/60">
                Karachi, Pakistan
              </p>
            </div>
          </div>
        </motion.div>

        {/* Resume paper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#f5f1e8] text-[#111111] shadow-[0_35px_100px_rgba(0,0,0,0.35)]"
        >
          {/* Paper accent */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#b08a28] via-[#d4af37] to-[#8c6b20]" />

          <div className="p-7 sm:p-10 lg:p-12">
            {/* Resume Header */}
            <div className="border-b border-black/10 pb-7">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <h3 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                    AREEBA MANSOOR
                  </h3>

                  <p className="mt-2 text-xs font-bold tracking-[0.12em] text-black/55">
                    COMPUTER SCIENCE STUDENT · FULL-STACK DEVELOPER · AI &
                    SYSTEMS
                  </p>
                </div>

                <div className="space-y-1 text-left text-[10px] font-medium text-black/55 md:text-right">
                  <p>Karachi, Pakistan</p>

                  <a
                    href="mailto:areeba.dm052@gmail.com"
                    className="flex items-center gap-2 transition-colors hover:text-[#8b6b20] md:justify-end"
                  >
                    <Mail size={12} />
                    areeba.dm052@gmail.com
                  </a>

                  <p>linkedin.com/in/areeba-mansoor-7b307134b/</p>
                  <p>github.com/areebamansoor49-eng</p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="border-b border-black/10 py-7">
              <SectionTitle
                number="01"
                title="PROFESSIONAL SUMMARY"
                icon={<Code2 size={16} />}
              />

              <p className="max-w-5xl text-[12px] leading-6 text-black/70">
                Computer Science student and Full-Stack Developer focused on
                building modern software products across web development, AI,
                data, and systems. Hands-on experience includes web
                applications, REST APIs, machine-learning applications, and
                software projects developed through independent work and a
                remote software development internship.
              </p>
            </div>

            {/* Education */}
            <div className="border-b border-black/10 py-7">
              <SectionTitle
                number="02"
                title="EDUCATION"
                icon={<GraduationCap size={16} />}
              />

              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div>
                  <p className="text-sm font-black">
                    BS Computer Science
                  </p>

                  <p className="mt-1 text-[11px] text-black/55">
                    Iqra University · Airport Campus
                  </p>
                </div>

                <p className="text-[10px] font-bold tracking-[0.08em] text-black/45">
                  2024 — 2028 EXPECTED
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="border-b border-black/10 py-7">
              <SectionTitle
                number="03"
                title="EXPERIENCE"
                icon={<BriefcaseBusiness size={16} />}
              />

              <div className="space-y-6">
                {experience.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="relative border-l-2 border-[#d4af37]/40 pl-5"
                  >
                    <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[#d4af37]" />

                    <div className="flex flex-col justify-between gap-1 sm:flex-row">
                      <h4 className="text-sm font-black">{item.title}</h4>

                      <span className="text-[9px] font-black tracking-[0.08em] text-black/40">
                        {item.date}
                      </span>
                    </div>

                    <p className="mt-1 text-[10px] font-bold text-[#8b6b20]">
                      {item.company}
                    </p>

                    <p className="mt-2 text-[11px] leading-5 text-black/60">
                      • {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="border-b border-black/10 py-7">
              <SectionTitle
                number="04"
                title="SELECTED PROJECTS"
                icon={<Code2 size={16} />}
              />

              <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    className="border-l border-black/15 pl-4"
                  >
                    <h4 className="text-[12px] font-black">
                      {project.title}
                    </h4>

                    <p className="mt-1.5 text-[10px] leading-5 text-black/55">
                      {project.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications + Skills */}
            <div className="grid gap-8 pt-7 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <SectionTitle
                  number="05"
                  title="CERTIFICATIONS"
                  icon={<Award size={16} />}
                />

                <div className="grid gap-x-5 gap-y-2 sm:grid-cols-2">
                  {certifications.map((certificate) => (
                    <p
                      key={certificate}
                      className="text-[9px] leading-4 text-black/65"
                    >
                      • {certificate}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle
                  number="06"
                  title="TECHNICAL SKILLS"
                  icon={<Code2 size={16} />}
                />

                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-black/10 bg-black/[0.025] px-2.5 py-1 text-[8px] font-bold text-black/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom paper strip */}
          <div className="border-t border-black/10 bg-black/[0.025] px-7 py-4 sm:px-10 lg:px-12">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <span className="text-[8px] font-black tracking-[0.2em] text-black/30">
                AREEBA MANSOOR · PROFESSIONAL PROFILE
              </span>

              <span className="text-[8px] font-bold tracking-[0.16em] text-[#8b6b20]">
                SOFTWARE · AI · SYSTEMS
              </span>
            </div>
          </div>
        </motion.div>

        {/* Resume note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex items-center justify-between border-t border-white/5 pt-5"
        >
          <span className="text-[8px] font-bold tracking-[0.2em] text-white/20">
            PROFILE / 2026
          </span>

          <a
            href="#contact"
            className="group flex items-center gap-2 text-[9px] font-black tracking-[0.18em] text-[#d4af37] transition-colors hover:text-[#f5f1e8]"
          >
            GET IN TOUCH
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}