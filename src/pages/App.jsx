import React, { useEffect, useState } from 'react'
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom'

export default function App() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const navLinks = [
    { to: '/#work', label: 'Work' },
    { to: '/blog', label: 'Blog' },
    { to: '/about', label: 'About' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Navigation ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-sm">
        <nav className="max-w-content mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/icon.png"
              alt="Zirui Zhao"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-transparent group-hover:ring-gray-300 transition-all"
            />
            <span className="font-mono text-sm font-medium tracking-wide text-text-primary">
              Zirui Zhao
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-mono text-sm tracking-wide transition-colors hover:text-text-primary ${
                    isActive ? 'text-text-primary' : 'text-text-muted'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-text-primary transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-text-primary transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-text-primary transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-surface/95 backdrop-blur-md border-t border-gray-200/50 px-6 pb-6 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block py-3 font-mono text-sm tracking-wide text-text-muted hover:text-text-primary transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      {/* ── Main Content ── */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* ── Footer ── */}
      <footer className="py-10 text-center">
        <p className="font-mono text-xs text-text-caption tracking-wide">
          All rights reserved. © 2026
        </p>
      </footer>
    </div>
  )
}
