import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certs", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass-strong rounded-full px-2 py-2 hidden md:flex items-center gap-1"
    >
      <span className="px-4 font-bold gradient-text text-sm tracking-wider">TM.</span>
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5"
        >
          {l.label}
        </a>
      ))}
    </motion.nav>
  );
}
