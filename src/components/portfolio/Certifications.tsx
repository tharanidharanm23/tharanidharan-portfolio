import { motion } from "framer-motion";
import { Award, Eye, X } from "lucide-react";
import { useState } from "react";
import { Reveal, SectionHeader } from "./Reveal";
import cert1 from "@/assets/cert1.png";
import cert2 from "@/assets/cert2.png";

const certs = [
  {
    title: "MongoDB Certified Developer Associate",
    issuer: "MongoDB",
    year: "2024",
    image: cert1,
  },
  {
    title: "Oracle Certified Professional — Java SE 17 Developer",
    issuer: "Oracle",
    year: "2024",
    image: cert2,
  },
];

export function Certifications() {
  const [open, setOpen] = useState<string | null>(null);
  const selectedCert = open ? certs.find((c) => c.title === open) : null;

  return (
    <section id="certs" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader eyebrow="Recognition" title="Certifications & Achievements" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group glass-strong rounded-2xl p-6 relative overflow-hidden gradient-border h-full flex flex-col"
              >
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-12 w-12 rounded-xl bg-linear-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg">
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg leading-tight">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{c.issuer}</p>
                <p className="text-xs text-primary mt-2">{c.year}</p>
                <button
                  onClick={() => setOpen(c.title)}
                  className="mt-5 self-start inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full glass hover:bg-white/10 transition"
                >
                  <Eye className="h-3.5 w-3.5" /> View certificates
                </button>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      {open && selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-60 bg-background/80 backdrop-blur-md flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full"
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute -top-12 right-0 glass h-9 w-9 rounded-full flex items-center justify-center"
            >
              <X className="h-4 w-4" />
            </button>
            <img src={selectedCert.image} alt={open} className="rounded-2xl w-full gradient-border" />
            <p className="text-center mt-4 text-muted-foreground">{open}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
