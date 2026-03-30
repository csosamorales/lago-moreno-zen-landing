export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="uppercase tracking-widest text-gold text-[10px] font-bold mb-3">
      {children}
    </p>
  )
}
