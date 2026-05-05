import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import college from "@/assets/kec.webp";
import school from "@/assets/VVMHSS.png";

const items = [
  {
    institution: "Kongu Engineering College — Erode, Tamilnadu",
    degree: "B.Tech — Artificial Intelligence & Data Science",
    year: "2023 — 2027",
    score: "CGPA: 7.81",
    image: college,
  },
  {
    institution: "Vidhya Vikashni Mat. Hr. Sec. School — Tiruppur",
    degree: "Higher Secondary — Computer Science",
    year: "2021 — 2023",
    score: "HSC: 89.66%",
    image: school,
  },
];

export function Education() {
  return (
    <section id="education" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Journey"
          title="Education & Background"
        />

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-primary/40 to-transparent hidden md:block" />
          <div className="space-y-12">
            {items.map((it, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, rotateY: 4 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="relative group [direction:ltr]"
                  >
                    <div className="absolute -inset-2 bg-linear-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-opacity" />
                    <div className="relative glass-strong rounded-2xl overflow-hidden gradient-border">
                      <img
                        src={it.image}
                        alt={it.institution}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>

                  <div className="[direction:ltr]">
                    <div className="inline-flex items-center gap-2 text-xs text-primary mb-3">
                      <GraduationCap className="h-4 w-4" /> {it.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{it.institution}</h3>
                    <p className="text-muted-foreground mb-3">{it.degree}</p>
                    <div className="inline-block glass rounded-full px-4 py-1.5 text-sm font-medium gradient-text">
                      {it.score}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
