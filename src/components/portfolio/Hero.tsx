import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import profile from "@/assets/profile.jpg";

const roles = [
  "AI & Data Science Student",
  "MERN Stack Developer",
  "Deep Learning Enthusiast",
  "Computer Vision Developer",
];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1500);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setIdx((i) => (i + 1) % roles.length);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <span className="gradient-text">
      {text}
      <span className="cursor-blink text-primary">|</span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 px-6">
      <div className="container mx-auto grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            Hi, I'm <br />
            <span className="gradient-text">Tharanidharan M</span>
          </h1>
          <div className="text-2xl md:text-3xl mt-6 font-medium min-h-10">
            <Typewriter />
          </div>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl">
            Artificial Intelligence and Data Science student skilled in MERN stack development
            and deep learning. Experienced in building secure REST APIs, authentication systems,
            and CNN-based computer vision models.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href="#projects" variant="primary">
              View Projects <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Contact Me <Mail className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#resume" variant="ghost">
              Resume <Download className="h-4 w-4" />
            </MagneticButton>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {[
              { Icon: Github, href: "https://github.com/tharanidharanm23" },
              { Icon: Linkedin, href: "https://linkedin.com/in/tharanidharan-m-1b7245348" },
              { Icon: Mail, href: "mailto:tharanidharanm23@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="glass h-11 w-11 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:glow transition-colors"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-8 bg-linear-to-tr from-primary via-accent to-neon-pink rounded-full blur-3xl opacity-40 animate-pulse" />
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative glass-strong rounded-4xl p-3 gradient-border"
          >
            <img
              src={profile}
              alt="Tharanidharan M"
              width={400}
              height={400}
              className="rounded-3xl w-72 h-72 md:w-96 md:h-96 object-cover"
            />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-6 -right-6 glass rounded-full px-5 py-3 text-sm font-medium"
          >
            ✨ Building the future
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function MagneticButton({
  children,
  href,
  variant,
}: {
  children: React.ReactNode;
  href: string;
  variant: "primary" | "ghost";
}) {
  const base =
    "group relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium overflow-hidden transition-all";
  if (variant === "primary") {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className={`${base} bg-linear-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-[0_0_40px_oklch(0.7_0.25_300/0.6)]`}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/30 to-transparent" />
      </motion.a>
    );
  }
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={`${base} glass hover:bg-white/10`}
    >
      {children}
    </motion.a>
  );
}
