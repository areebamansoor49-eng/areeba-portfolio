"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Journey", href: "journey" },
  { label: "Resume", href: "resume" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) {
      console.warn(`Section #${id} was not found.`);
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-[100] px-5 py-5 md:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/75 px-5 py-3 shadow-2xl backdrop-blur-xl">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="cursor-pointer text-sm font-semibold tracking-[0.2em] text-[#f5f1e8]"
          aria-label="Go to home"
        >
          AM<span className="text-[#c9a96e]">.</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => scrollToSection(item.href)}
              className="cursor-pointer text-[11px] font-medium uppercase tracking-[0.12em] text-white/60 transition-all duration-300 hover:text-[#c9a96e]"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="cursor-pointer text-white md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/10 bg-[#0d0d0d]/95 p-5 shadow-2xl backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="cursor-pointer rounded-xl px-3 py-3 text-left text-sm uppercase tracking-[0.14em] text-white/70 transition-all duration-300 hover:bg-white/5 hover:text-[#c9a96e]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}