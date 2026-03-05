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
    { to: '/#work', label: 'Work', isHash: true },
    { to: '/blog', label: 'Blog' },
    { to: '/photography', label: 'Photos' },
    { to: '/about', label: 'About' },
  ]

  return (
    <div className="min-h-dvh flex flex-col">
      {/* ── Navigation ── */}
      <header className="fixed top-0 left-0 right-0 z-nav bg-surface/80 backdrop-blur-sm">
        <nav className="max-w-content mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/icon.png"
              alt="Zirui Zhao"
              className="size-9 rounded-full object-cover ring-2 ring-transparent group-hover:ring-gray-300 transition-all ease-out"
            />
            <span className="font-mono text-sm font-medium tracking-wide text-text-primary">
              Zirui Zhao
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isWorkActive = link.isHash && location.pathname === '/';
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ease-out hover:text-text-primary ${
                      isActive || isWorkActive ? 'text-text-primary' : 'text-text-muted'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              );
            })}
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
                className="block py-3 text-sm font-medium text-text-muted hover:text-text-primary transition-colors ease-out"
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
