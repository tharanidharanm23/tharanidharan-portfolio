import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { useState } from "react";
import { Reveal, SectionHeader } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Say Hello"
          title="Let's Build Something Together"
          subtitle="Have a project, idea, or opportunity? My inbox is always open."
        />

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-8">
          <Reveal>
            <div className="glass-strong rounded-2xl p-8 h-full gradient-border space-y-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-linear-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="font-medium">tharanidharanm23@gmail.com</p>
                  <p className="text-xs text-muted-foreground mt-1">+91 9500324562</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-linear-to-br from-accent to-neon-pink flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="font-medium">Tiruppur, Tamilnadu, India</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Socials</p>
                <div className="flex gap-3">
                  {[
                    { Icon: Github, href: "https://github.com/tharanidharanm23" },
                    { Icon: Linkedin, href: "https://linkedin.com/in/tharanidharan-m-1b7245348" },
                    { Icon: Mail, href: "mailto:tharanidharanm23@gmail.com" },
                  ].map(({ Icon, href }, i) => (
                    <motion.a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -4, scale: 1.1 }}
                      className="glass h-11 w-11 rounded-full flex items-center justify-center hover:text-primary hover:glow transition"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = new FormData(e.currentTarget);
                const name = String(form.get("name") || "");
                const email = String(form.get("email") || "");
                const subject = String(form.get("subject") || "");
                const message = String(form.get("message") || "");
                const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
                const mailto = `mailto:tharanidharanm23@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.open(mailto, "_blank", "noopener,noreferrer");
                setSent(true);
                setTimeout(() => setSent(false), 3000);
                e.currentTarget.reset();
              }}
              className="glass-strong rounded-2xl p-8 gradient-border space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field name="name" label="Name" type="text" placeholder="Your name" />
                <Field name="email" label="Email" type="email" placeholder="you@email.com" />
              </div>
              <Field name="subject" label="Subject" type="text" placeholder="What's it about?" />
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full glass rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground/50 resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-linear-to-r from-primary to-accent text-primary-foreground font-semibold overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {sent ? "Message Sent ✨" : <>Send Message <Send className="h-4 w-4" /></>}
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/30 to-transparent" />
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">{label}</label>
      <input
        required
        {...props}
        className="w-full glass rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground/50"
      />
    </div>
  );
}
