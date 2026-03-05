import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    slug: 'smtx-elf',
    company: 'SmartX Corp.',
    title: 'SMTX ELF Virtualization',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    bg: 'bg-slate-100',
  },
  {
    slug: 'vm-optimization',
    company: 'SmartX Corp.',
    title: 'VM Features Optimization',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    bg: 'bg-blue-50',
  },
  {
    slug: 'design-system',
    company: 'SmartX Corp.',
    title: 'CloudTower  Design System',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80',
    bg: 'bg-sky-50',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0')
          el.classList.remove('opacity-0', 'translate-y-8')
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Link
      ref={ref}
      to={`/${project.slug}`}
      className={`group block opacity-0 translate-y-8 transition-all duration-700`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={`relative overflow-hidden rounded-3xl ${project.bg}`}>
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-5 px-1">
        <p className="font-mono text-xs text-text-muted tracking-wider uppercase">
          {project.company}
        </p>
        <h3 className="font-serif text-xl md:text-2xl font-semibold text-text-primary mt-1 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-28 pb-12 md:pb-16">
        <p className="font-mono text-xs tracking-widest uppercase text-text-muted mb-6">
          Product Design
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[1.1] mb-6 text-balance">
          Hey ！
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-xl leading-relaxed mb-10 text-pretty">
          I'm Zirui Zhao, a digital product designer.
        </p>
        <a
          href="#work"
          className="inline-flex items-center gap-2 bg-text-primary text-white font-mono text-sm tracking-wide px-6 py-3 rounded-full hover:bg-gray-800 transition-colors group"
        >
          My Work
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </section>

      {/* ── Work Section ── */}
      <section id="work" className="max-w-content mx-auto px-6 md:px-10 pb-20 md:pb-32">
        <p className="font-mono text-xs tracking-widest uppercase text-text-muted mb-10">
          Selected Work
        </p>
        <div className="grid gap-12 md:gap-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
