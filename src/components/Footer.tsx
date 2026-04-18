import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { links } from '@/utils/links';

export default function Footer() {
	return (
		<footer className="bg-surface text-black">
			<div className="max-w-7xl mx-auto py-6 px-8 grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
				{/* Left */}
				<div className="flex flex-col items-center md:items-start gap-2">
					<p className="uppercase tracking-widest text-sm md:text-md font-bold">
						Ponete en contacto
					</p>
					<div className="flex flex-row items-center gap-1 text-brown-dark">
						<FaWhatsapp size={20} />
						<a
							href={links.whatsapp}
							target="_blank"
							rel="noopener noreferrer"
							className="text-lg transition-colors"
						>
							+54 9 294 428 7452
						</a>
					</div>
				</div>

				{/* Center */}
				<div className="flex justify-center">
					<Image
						src="/logo-moreno-negro.webp"
						alt="Logo Lago Moreno Zen"
						width={200}
						height={200}
					/>
				</div>

				{/* Right */}
				<div className="flex flex-col items-center md:items-end gap-2">
					<p className="uppercase tracking-widest text-md font-bold">
						Seguinos!
					</p>
					<div className="flex gap-4 text-brown-dark">
						<a href="#" aria-label="Facebook">
							<FaFacebookF size={20} />
						</a>
						<a href="#" aria-label="Instagram">
							<FaInstagram size={20} />
						</a>
					</div>
				</div>
			</div>

			<div className="border-t border-gold/30 max-w-7xl mx-auto px-6 py-4 text-center text-xs">
				© {new Date().getFullYear()} Lago Moreno Zen. Todos los derechos
				reservados.
			</div>
		</footer>
	);
}
