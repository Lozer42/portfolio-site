"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="bg-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenue dans Mon Univers Informatique</h1>
            <p className="text-xl mb-6">
              Découvrez mon parcours, mes compétences et mes projets dans le domaine du développement web.
            </p>
            <p className="text-lg italic mb-8 text-gray-300">
              "L'informatique n'est pas seulement une science, c'est un art de résoudre des problèmes avec élégance et
              simplicité."
            </p>
            <a href="#projects" className="btn-primary inline-block">
              En savoir plus
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-blue-400">
              <Image
                src="/4.jpg?height=400&width=400"
                alt="Portrait du développeur"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
