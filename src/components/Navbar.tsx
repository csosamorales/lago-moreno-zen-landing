'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/#departamentos', label: 'Departamentos' },
  { href: '/#comodidades', label: 'Comodidades' },
  { href: '/ubicacion', label: 'Ubicación' },
  { href: '/#galeria', label: 'Galería' },
]

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (solid) return
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [solid])

  const bg = solid || scrolled ? 'bg-brown-dark' : 'bg-transparent'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${bg}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-bold tracking-widest text-sm">
          LAGO MORENO ZEN
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white text-sm tracking-wide transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5492944428762"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold text-gold hover:bg-gold hover:text-white px-4 py-1.5 text-sm tracking-wide transition-colors"
          >
            Reservar
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className="block w-5 h-0.5 bg-white mb-1" />
          <span className="block w-5 h-0.5 bg-white mb-1" />
          <span className="block w-5 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brown-dark border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white text-sm tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5492944428762"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold text-gold px-4 py-2 text-sm tracking-wide text-center"
          >
            Reservar
          </a>
        </div>
      )}
    </nav>
  )
}
