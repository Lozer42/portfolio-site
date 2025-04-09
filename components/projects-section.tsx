"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Site E-commerce",
    description: "Boutique en ligne responsive avec panier et paiement intégré",
    image: "/placeholder.svg?height=600&width=800",
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 2,
    title: "Application Météo",
    description: "Application météo utilisant une API externe avec géolocalisation",
    image: "/placeholder.svg?height=600&width=800",
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    title: "Dashboard Admin",
    description: "Interface d'administration avec graphiques et tableaux de données",
    image: "/placeholder.svg?height=600&width=800",
    demoLink: "#",
    codeLink: "#",
  },
]

export default function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Projets</h2>
        <p className="text-center text-lg mb-12">Découvrez mes réalisations et mes travaux personnels.</p>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card overflow-hidden hover:shadow-xl"
            >
              <div className="relative h-48 w-full mb-4">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.demoLink}
                  className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Voir
                </a>
                <a
                  href={project.codeLink}
                  className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-accent">
            Voir plus
          </a>
        </div>
      </div>
    </section>
  )
}
