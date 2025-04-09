"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-blue-400">
              Mon Portfolio
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button type="button" className="text-gray-300 hover:text-white" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#hero" className="text-gray-300 hover:text-white transition-colors">
              Accueil
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              Profil
            </Link>
            <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
              Parcours
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
              Projets
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <Link href="#hero" className="block px-3 py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>
              Accueil
            </Link>
            <Link href="#about" className="block px-3 py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>
              Profil
            </Link>
            <Link href="#skills" className="block px-3 py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>
              Parcours
            </Link>
            <Link href="#projects" className="block px-3 py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>
              Projets
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
