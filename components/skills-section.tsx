"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import {
  Heading5Icon as Html5,
  CodepenIcon as Css3,
  FileJson2,
  FramerIcon as FramerMotion,
  CodepenIcon as ReactLogo,
  Database,
  Github,
  Figma,
} from "lucide-react"

const skills = [
  { name: "HTML5", icon: Html5, color: "text-orange-500" },
  { name: "CSS3", icon: Css3, color: "text-blue-500" },
  { name: "JavaScript", icon: FileJson2, color: "text-yellow-500" },
  { name: "React", icon: ReactLogo, color: "text-cyan-500" },
  { name: "Framer Motion", icon: FramerMotion, color: "text-purple-500" },
  { name: "SQL", icon: Database, color: "text-green-500" },
  { name: "Git/GitHub", icon: Github, color: "text-gray-700" },
  { name: "Figma", icon: Figma, color: "text-pink-500" },
]

export default function SkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Compétences</h2>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card flex flex-col items-center justify-center p-6 hover:scale-105"
            >
              <skill.icon className={`w-16 h-16 mb-4 ${skill.color}`} />
              <h3 className="text-lg font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#projects" className="btn-primary">
            Voir plus
          </a>
        </div>
      </div>
    </section>
  )
}
