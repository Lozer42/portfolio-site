"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">À propos</h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Photo du développeur"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Qui suis-je ?</h3>
            <p className="mb-4">
              Passionné par le développement web depuis plusieurs années, je me spécialise dans la création d'interfaces
              utilisateur modernes et intuitives. Mon objectif est de concevoir des expériences web qui allient
              esthétique et fonctionnalité.
            </p>
            <p className="mb-4">
              Après avoir obtenu mon diplôme en informatique, j'ai travaillé sur divers projets qui m'ont permis
              d'affiner mes compétences techniques et ma compréhension des besoins utilisateurs.
            </p>
            <p>
              Je suis constamment en veille technologique pour rester à jour avec les dernières tendances et meilleures
              pratiques du développement web.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
