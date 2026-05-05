import { motion } from "framer-motion";
import {
  SiC,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOpencv,
  SiOpenjdk,
  SiPython,
  SiReact,
  SiTensorflow,
} from "react-icons/si";
import { Reveal, SectionHeader } from "./Reveal";

const skills = [
  { name: "Java", Icon: SiOpenjdk },
  { name: "Python", Icon: SiPython },
  { name: "C", Icon: SiC },
  { name: "React.js", Icon: SiReact },
  { name: "HTML / CSS", Icon: SiHtml5 },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "MySQL", Icon: SiMysql },
  { name: "TensorFlow / Keras", Icon: SiTensorflow },
  { name: "OpenCV / CNN", Icon: SiOpencv },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map(({ name, Icon }, i) => (
            <Reveal key={name} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -6, scale: 1.03 }}
                className="glass rounded-2xl p-4 sm:p-5 group hover:gradient-border relative overflow-hidden"
              >
                <div className="aspect-square flex flex-col items-center justify-center text-center">
                  <div className="grid place-items-center h-14 w-14 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-sm font-medium">{name}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
