import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, FileText, X } from "lucide-react";
import { useState, type MouseEvent } from "react";
import { Reveal, SectionHeader } from "./Reveal";
import p1 from "@/assets/project1.png";
import p2 from "@/assets/project2.png";
import p3 from "@/assets/project3.png";

type Project = {
  title: string;
  description: string;
  details: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: "HelmetGuard AI — Helmet Detection System",
    description: "Intelligent computer vision system that detects whether two-wheeler riders are wearing helmets.",
    details:
      "Built an intelligent computer vision system using machine learning–based object detection. Processes real-time video and images to identify violations and improves road safety through automated monitoring and accuracy evaluation.",
    tech: ["Python", "OpenCV", "TensorFlow", "Keras", "CNN"],
    image: p1,
    github: "https://github.com/tharanidharanm23/helmet-detection-system",
    demo: "https://github.com/tharanidharanm23/helmet-detection-system",
  },
  {
    title: "Blood Haven — Blood Bank Management",
    description: "MERN-based blood bank platform with smart donor matching and live dashboard.",
    details:
      "Built Blood Haven, a MERN-based Blood Bank Management System with smart donor matching, emergency prioritization, location-based search, notifications, and a live deployed dashboard.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    image: p2,
    github: "https://github.com/tharanidharanm23/blood-haven",
    demo: "https://blood-haven.tharanidharanm23.workers.dev/",
  },
  {
    title: "LearnSphere — E-Learning Platform",
    description: "Full-stack MERN application for online course management and enrollment.",
    details:
      "Developed a full-stack MERN application for online course management and enrollment. Implemented JWT authentication with role-based access (Student/Admin). Designed RESTful APIs with MongoDB schema and a progress tracking system.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    image: p3,
    github: "https://github.com/Saranbalusamy/odoo-x-sns",
    demo: "https://github.com/Saranbalusamy/odoo-x-sns",
  },
];

function TiltCard({ p, onDetails }: { p: Project; onDetails: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [10, -10]), { stiffness: 200, damping: 15 });
  const ry = useSpring(useTransform(x, [-50, 50], [-10, 10]), { stiffness: 200, damping: 15 });

  function handleMouse(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="group relative h-full"
    >
      <div className="absolute -inset-1 bg-linear-to-r from-primary via-accent to-neon-pink rounded-2xl opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-500" />
      <div className="relative glass-strong rounded-2xl overflow-hidden gradient-border h-full flex flex-col">
        <div className="relative overflow-hidden h-52">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            width={800}
            height={600}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-linear-to-t from-card via-card/30 to-transparent" />
        </div>
        <div className="p-6 flex-1 flex flex-col" style={{ transform: "translateZ(40px)" }}>
          <h3 className="text-xl font-bold mb-2">{p.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {p.tech.map((t) => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full glass border border-primary/20">
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-full glass hover:bg-white/10 transition"
            >
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-full bg-linear-to-r from-primary to-accent text-primary-foreground hover:shadow-[0_0_20px_oklch(0.7_0.25_300/0.5)] transition"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
            </a>
            <button
              onClick={onDetails}
              className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-full glass hover:bg-white/10 transition"
            >
              <FileText className="h-3.5 w-3.5" /> Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured Projects"
          subtitle="A glimpse into the products and experiments I've crafted."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch" style={{ perspective: 1200 }}>
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <TiltCard p={p} onDetails={() => setOpen(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-60 bg-background/80 backdrop-blur-md flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong rounded-2xl max-w-2xl w-full p-8 relative gradient-border"
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-4 right-4 glass h-9 w-9 rounded-full flex items-center justify-center hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
            <img src={open.image} alt={open.title} className="rounded-xl w-full h-56 object-cover mb-5" />
            <h3 className="text-2xl font-bold gradient-text mb-3">{open.title}</h3>
            <p className="text-muted-foreground mb-4">{open.details}</p>
            <div className="flex flex-wrap gap-2">
              {open.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full glass">{t}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
