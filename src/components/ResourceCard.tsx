interface ResourceCardProps {
  source: string
  title: string
  description: string
  tags: string[]
  url: string
}

export default function ResourceCard({ source, title, description, tags, url }: ResourceCardProps) {
  return (
    <div className="bg-cream border-t-4 border-gold p-6 flex flex-col gap-3">
      <span className="uppercase tracking-widest text-[10px] font-bold text-gold">{source}</span>
      <h4 className="font-semibold text-ink">{title}</h4>
      <p className="text-ink/70 text-sm leading-relaxed flex-1">{description}</p>
      <div className="flex flex-wrap gap-1">
        {tags.map((t) => (
          <span key={t} className="text-[10px] bg-beige text-ink/60 px-2 py-0.5 uppercase tracking-widest">{t}</span>
        ))}
      </div>
      <a href={`https://${url}`} target="_blank" rel="noopener noreferrer" className="text-xs text-gold hover:underline mt-1">
        {url} →
      </a>
    </div>
  )
}
