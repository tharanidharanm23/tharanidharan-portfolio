import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Education } from "@/components/portfolio/Education";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Tharanidharan M — AI & Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Tharanidharan M — AI & Data Science student, Full Stack Developer, and ML enthusiast crafting intelligent, beautiful products.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
