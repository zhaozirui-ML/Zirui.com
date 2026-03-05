import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function BlogList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/blogs.json')
      .then((r) => r.json())
      .then(setPosts)
      .catch(() => setPosts([]))
  }, [])

  return (
    <div className="max-w-content mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-serif italic text-5xl md:text-7xl font-bold text-text-primary mb-4">
          Blog
        </h1>
        <p className="font-sans text-text-muted text-sm md:text-base">
          Morning Blossoms Plucked at Dusk
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group block"
          >
            {/* Cover Image */}
            <div className="overflow-hidden rounded-2xl mb-4">
              <img
                src={post.cover}
                alt={post.title}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            {/* Meta */}
            <p className="font-mono text-xs tracking-wider uppercase text-text-muted mb-2">
              {post.category}
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-text-primary group-hover:text-accent transition-colors mb-1">
              {post.title}
            </h3>
            <p className="font-mono text-xs text-text-caption">
              {post.date}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
