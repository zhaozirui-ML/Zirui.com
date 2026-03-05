import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function BlogDetail() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [lang, setLang] = useState('zh')

  useEffect(() => {
    fetch('/blogs.json')
      .then((r) => r.json())
      .then((list) => {
        setPost(list.find((p) => p.slug === slug) || null)
      })
  }, [slug])

  if (!post) {
    return (
      <div className="max-w-article mx-auto px-6 pt-20 text-center">
        <p className="text-text-muted">文章加载中...</p>
      </div>
    )
  }

  const content = lang === 'en' ? post.content_en : post.content_zh

  return (
    <div className="max-w-article mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-20">
      {/* Back link */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-text-primary transition-colors mb-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </Link>

      {/* Title */}
      <h1 className="font-serif text-3xl md:text-5xl font-bold text-text-primary text-center mb-4 leading-tight text-balance">
        {post.title}
      </h1>

      {/* Date */}
      <p className="font-mono text-sm text-text-caption text-center mb-10">
        {post.date}
      </p>

      {/* Cover */}
      <div className="overflow-hidden rounded-3xl mb-12">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full aspect-[16/9] object-cover"
        />
      </div>

      {/* Language Toggle */}
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setLang('zh')}
          className={`font-mono text-xs tracking-wide px-4 py-2 rounded-full transition-colors ${
            lang === 'zh'
              ? 'bg-text-primary text-white'
              : 'bg-gray-200 text-text-muted hover:bg-gray-300'
          }`}
        >
          中文
        </button>
        <button
          onClick={() => setLang('en')}
          className={`font-mono text-xs tracking-wide px-4 py-2 rounded-full transition-colors ${
            lang === 'en'
              ? 'bg-text-primary text-white'
              : 'bg-gray-200 text-text-muted hover:bg-gray-300'
          }`}
        >
          English
        </button>
      </div>

      {/* Content */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
