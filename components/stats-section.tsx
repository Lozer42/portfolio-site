"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const stats = [
  { id: 1, value: "3+", label: "Projets Réalisés", color: "text-blue-500" },
  { id: 2, value: "2 Ans", label: "Expérience dans le Développement web", color: "text-purple-500" },
  { id: 3, value: "100%", label: "Passion pour le Web", color: "text-pink-500" },
]

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [counting, setCounting] = useState(false)

  useEffect(() => {
    if (inView) {
      setCounting(true)
    }
  }, [inView])

  return (
    <section className="bg-white py-16">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center"
              >
                <p className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
