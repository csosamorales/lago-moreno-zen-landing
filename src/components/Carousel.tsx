'use client'
import { useEffect, useState } from 'react'
import PhotoPlaceholder from './PhotoPlaceholder'

interface CarouselProps {
  slides: { label?: string }[]
  onImageClick?: (index: number) => void
  onGalleryOpen?: () => void
}

export default function Carousel({ slides, onImageClick, onGalleryOpen }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 5000)
    return () => clearInterval(t)
  }, [slides.length])

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  return (
    <div className="relative w-full h-[580px] bg-brown-dark overflow-hidden select-none">
      {/* Slide */}
      <div
        className="w-full h-full cursor-pointer"
        onClick={() => onImageClick?.(current)}
        title="Clic para ampliar"
      >
        <PhotoPlaceholder className="w-full h-full" label={slides[current]?.label ?? 'Foto próximamente'} />
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center transition-colors"
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center transition-colors"
        aria-label="Siguiente"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 transition-colors ${i === current ? 'bg-gold' : 'bg-white/40'}`}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="absolute bottom-6 left-4 text-white/70 text-xs">
        {current + 1} / {slides.length}
      </div>

      {/* Hints */}
      <div className="absolute bottom-6 right-4 flex gap-3">
        <span className="text-white/50 text-xs">Clic para ampliar</span>
        {onGalleryOpen && (
          <button
            onClick={onGalleryOpen}
            className="text-xs text-gold hover:text-gold-light underline transition-colors"
          >
            Ver galería completa
          </button>
        )}
      </div>
    </div>
  )
}
