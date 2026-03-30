export default function Footer() {
  return (
    <footer className="bg-brown-dark text-beige">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
        {/* Left */}
        <div>
          <p className="uppercase tracking-widest text-[10px] text-gold font-bold mb-2">
            Ponete en contacto
          </p>
          <p className="text-white text-lg font-medium">+54 9 294 428 7452</p>
          <a
            href="https://wa.me/5492944428762"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-light text-sm hover:text-gold transition-colors"
          >
            WhatsApp →
          </a>
        </div>

        {/* Center */}
        <div className="flex justify-center">
          <p className="text-white font-bold tracking-widest text-sm">LAGO MORENO ZEN</p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="uppercase tracking-widest text-[10px] text-gold font-bold mb-1">Seguinos!</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="text-beige/70 hover:text-white transition-colors text-sm">Facebook</a>
            <a href="#" aria-label="Instagram" className="text-beige/70 hover:text-white transition-colors text-sm">Instagram</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/30 max-w-7xl mx-auto px-6 py-4 text-center text-[11px] text-beige/50">
        © {new Date().getFullYear()} Lago Moreno Zen. Todos los derechos reservados.
      </div>
    </footer>
  )
}
