interface BusRouteProps {
  number: string
  route: string
  description: string
  schedules?: string[]
}

export default function BusRoute({ number, route, description, schedules }: BusRouteProps) {
  return (
    <div className="bg-brown p-6">
      <div className="flex items-start gap-4">
        <span className="text-4xl font-bold text-gold leading-none">{number}</span>
        <div>
          <p className="text-white font-semibold text-sm mb-1">{route}</p>
          <p className="text-white/70 text-xs mb-2">{description}</p>
          {schedules && (
            <div className="flex flex-wrap gap-1 mt-2">
              {schedules.map((s) => (
                <span key={s} className="text-[10px] bg-brown-dark text-gold px-2 py-0.5">{s}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
