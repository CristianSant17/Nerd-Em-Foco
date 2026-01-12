'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-primary to-secondary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-3xl font-bold text-light">🎮</div>
          <div>
            <h1 className="text-2xl font-bold text-light">Nerd Em Foco</h1>
            <p className="text-sm text-light/80">Notícias do universo nerd</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-light hover:text-accent transition">
            Home
          </Link>
          <Link href="/news" className="text-light hover:text-accent transition">
            Notícias
          </Link>
          <Link href="/about" className="text-light hover:text-accent transition">
            Sobre
          </Link>
          <Link href="/contact" className="text-light hover:text-accent transition">
            Contato
          </Link>
          <Link 
            href="/login" 
            className="bg-accent text-dark px-6 py-2 rounded-lg font-semibold hover:bg-light transition"
          >
            Login
          </Link>
        </nav>

        <button 
          className="md:hidden text-light text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-primary/90 p-4 space-y-4">
          <Link href="/" className="block text-light hover:text-accent">
            Home
          </Link>
          <Link href="/news" className="block text-light hover:text-accent">
            Notícias
          </Link>
          <Link href="/about" className="block text-light hover:text-accent">
            Sobre
          </Link>
          <Link href="/contact" className="block text-light hover:text-accent">
            Contato
          </Link>
          <Link href="/login" className="block text-light hover:text-accent">
            Login
          </Link>
        </nav>
      )}
    </header>
  )
}
