interface TransportCardProps {
  icon: string
  title: string
  description: string
  details: string[]
}

export default function TransportCard({ icon, title, description, details }: TransportCardProps) {
  return (
    <div className="bg-beige p-6 border-l-4 border-transparent hover:border-gold transition-colors">
      <div className="flex items-start gap-4">
        <span className="text-2xl">{icon}</span>
        <div>
          <h4 className="font-semibold text-ink mb-1">{title}</h4>
          <p className="text-ink/70 text-sm leading-relaxed mb-2">{description}</p>
          <ul className="text-xs text-ink/60 space-y-1">
            {details.map((d, i) => <li key={i}>· {d}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
