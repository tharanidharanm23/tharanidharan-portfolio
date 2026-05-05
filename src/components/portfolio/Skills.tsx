import { motion } from "framer-motion";
import { Reveal, SectionHeader } from "./Reveal";

const skills = [
  { name: "Python", level: 92 },
  { name: "JavaScript / TS", level: 88 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 82 },
  { name: "Machine Learning", level: 85 },
  { name: "TensorFlow", level: 78 },
  { name: "SQL / Postgres", level: 80 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Java", level: 75 },
  { name: "Git / GitHub", level: 88 },
  { name: "Pandas / NumPy", level: 86 },
  { name: "FastAPI", level: 80 },
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Toolbox"
          title="Skills & Technologies"
          subtitle="The tech I use daily to ship intelligent, beautiful products."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass rounded-xl p-5 group hover:gradient-border relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-xs gradient-text font-bold">{s.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.04, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-accent via-primary to-neon-pink rounded-full"
                  />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
