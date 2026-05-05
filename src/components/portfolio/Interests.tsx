import { motion } from "framer-motion";
import { Brain, Cpu, Globe } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const interests = [
  { icon: Globe, label: "Full-Stack Web Development" },
  { icon: Brain, label: "Machine Learning" },
  { icon: Cpu, label: "Computer Vision" },
];

export function Interests() {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader eyebrow="Curiosity" title="Areas of Interest" />
        <div className="flex flex-wrap justify-center gap-4">
          {interests.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.08, y: -4 }}
                className="group glass rounded-full px-5 py-3 flex items-center gap-3 hover:bg-white/10 cursor-default"
              >
                <span className="h-8 w-8 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <it.icon className="h-4 w-4 text-primary-foreground" />
                </span>
                <span className="font-medium">{it.label}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
