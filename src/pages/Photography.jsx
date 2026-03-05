import React, { useState, useEffect, useCallback } from 'react'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1200&q=80',
    label: '堡状云 Castellanus',
    date: '2024.08.15',
  },
  {
    src: 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=1200&q=80',
    label: '乳状云 Mammatus',
    date: '2024.07.22',
  },
  {
    src: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=1200&q=80',
    label: '荚状云 Lenticular',
    date: '2024.06.10',
  },
  {
    src: 'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=1200&q=80',
    label: '积雨云 Cumulonimbus',
    date: '2024.05.03',
  },
  {
    src: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=1200&q=80',
    label: '卷云 Cirrus',
    date: '2024.04.18',
  },
  {
    src: 'https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?w=1200&q=80',
    label: '层积云 Stratocumulus',
    date: '2024.03.25',
  },
]

export default function Photography() {
  const [lightbox, setLightbox] = useState(null)

  const closeLightbox = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (!lightbox) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [lightbox, closeLightbox])

  return (
    <div className="max-w-content mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-20">
      {/* Header */}
      <h1 className="font-serif italic text-5xl md:text-7xl font-bold text-text-primary mb-16 text-balance">
        Photos
      </h1>

      {/* Photo List */}
      <div className="space-y-12">
        {photos.map((photo, i) => (
          <div key={i} className="group">
            <button
              type="button"
              className="block w-full overflow-hidden rounded-3xl cursor-zoom-in text-left"
              onClick={() => setLightbox(photo.src)}
              aria-label={`查看照片: ${photo.label}`}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full aspect-[16/9] object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.02]"
                loading="lazy"
              />
            </button>
            <div className="flex items-center gap-4 mt-4 px-1">
              <p className="font-mono text-xs text-text-muted tracking-wider">
                {photo.date}
              </p>
              <span className="text-text-caption">·</span>
              <p className="font-mono text-xs text-text-muted">
                {photo.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="照片预览"
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-lightbox cursor-zoom-out animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <img
            className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl"
            src={lightbox}
            alt="Photo"
          />
        </div>
      )}
    </div>
  )
}
