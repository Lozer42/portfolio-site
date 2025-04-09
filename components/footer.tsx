export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© {currentYear} Mon Portfolio. Tous droits réservés.</p>
        <p className="text-gray-400 mt-2">Créé avec Next.js et Tailwind CSS</p>
      </div>
    </footer>
  )
}
