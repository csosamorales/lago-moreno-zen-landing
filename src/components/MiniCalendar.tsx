'use client'
import { useState } from 'react'

const WEEKDAYS = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
const MONTHS = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}
function getFirstDayOfMonth(year: number, month: number) {
  // 0=Sun, adjust to Mon=0
  return (new Date(year, month, 1).getDay() + 6) % 7
}

interface MiniCalendarProps {
  takenDates?: string[] // 'YYYY-MM-DD'
}

export default function MiniCalendar({ takenDates = [] }: MiniCalendarProps) {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())

  const days = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  const takenSet = new Set(takenDates)

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
  }

  const cells: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= days; d++) cells.push(d)

  return (
    <div className="text-sm">
      <div className="flex items-center justify-between mb-3">
        <button onClick={prevMonth} className="text-brown hover:text-gold px-1" aria-label="Mes anterior">‹</button>
        <span className="font-medium text-ink text-xs uppercase tracking-widest">{MONTHS[month]} {year}</span>
        <button onClick={nextMonth} className="text-brown hover:text-gold px-1" aria-label="Mes siguiente">›</button>
      </div>
      <div className="grid grid-cols-7 gap-y-1">
        {WEEKDAYS.map((d, i) => (
          <div key={i} className="text-center text-[10px] font-bold text-ink/50 pb-1">{d}</div>
        ))}
        {cells.map((d, i) => {
          if (!d) return <div key={i} />
          const iso = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
          const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear()
          const isTaken = takenSet.has(iso)
          return (
            <div
              key={i}
              className={`text-center text-xs py-1 mx-0.5 ${
                isToday ? 'bg-gold text-white font-bold' :
                isTaken ? 'line-through text-ink/30' :
                'text-ink hover:bg-beige-dark'
              }`}
            >
              {d}
            </div>
          )
        })}
      </div>
    </div>
  )
}
