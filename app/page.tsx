import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Journey from "@/components/Journey";
import Certificates from "@/components/Certificates";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080808] text-[#f5f1e8]">
      {/* NAVIGATION */}
      <Navbar />

      {/* HOME */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT */}
      <About />

      {/* SKILLS */}
      <Skills />

      {/* PROJECTS */}
      <Projects />

      {/* EXPERIENCE */}
      <Experience />

      {/* JOURNEY */}
      <Journey />

      {/* CERTIFICATIONS */}
      <Certificates />

      {/* RESUME */}
      <Resume />

      {/* CONTACT */}
      <Contact />
    </main>
  );
}