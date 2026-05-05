import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Reveal } from "./Reveal";

export function Resume() {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <Reveal>
          <div className="relative glass-strong rounded-3xl p-10 md:p-14 text-center overflow-hidden gradient-border">
            <div className="absolute inset-0 mesh-bg opacity-50" />
            <div className="relative">
              <div className="inline-flex h-16 w-16 rounded-2xl bg-linear-to-br from-primary to-accent items-center justify-center mb-6 shadow-lg">
                <FileText className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Download my <span className="gradient-text">RESUME</span>?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Download my résumé to see detailed experience, projects, and achievements.
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-linear-to-r from-primary to-accent text-primary-foreground font-semibold overflow-hidden shadow-[0_0_40px_oklch(0.7_0.25_300/0.4)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Download className="h-5 w-5" />
                  Download Resume
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/40 to-transparent" />
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
