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
  const marqueeSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Toolbox"
          title="Skills & Technologies"
          subtitle="The tech I use daily to ship intelligent, beautiful products."
        />

        <Reveal>
          <div className="skills-marquee">
            <div className="skills-track">
              {marqueeSkills.map(({ name, Icon }, i) => (
                <motion.div
                  key={`${name}-${i}`}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="skills-card glass group"
                >
                  <div className="skills-card-inner">
                    <div className="skills-icon">
                      <Icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors" aria-hidden="true" />
                    </div>
                    <div className="skills-label">{name}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
