import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionLabel from '@/components/SectionLabel';
import ApartmentCard from '@/components/ApartmentCard';
import HeroSlider from '@/components/HeroSlider';
import Image from 'next/image';

const apartments = [
	{
		slug: 'zen-i',
		name: 'ZEN I',
		badge: 'Departamento premium',
		description:
			'Amplio departamento con vistas al lago y la montaña, ideal para familias o grupos. Luminoso, cálido y completamente equipado.',
		specs: '5 personas · 1 hab · 1 baño',
		amenities: ['WiFi', 'TV LED', 'Calefacción', 'Cocina equipada'],
		variant: 'featured' as const,
	},
	{
		slug: 'zen-ii',
		name: 'ZEN II',
		badge: 'Departamento',
		description:
			'Acogedor espacio con acceso a jardín y vistas al bosque. Perfecto para parejas o familias pequeñas.',
		specs: '4 personas · 1 hab · 1 baño',
		amenities: ['WiFi', 'TV LED', 'Jardín'],
		variant: 'normal' as const,
	},
	{
		slug: 'zen-iii',
		name: 'ZEN III',
		badge: 'Departamento',
		description:
			'Confortable departamento con terraza privada y vista al bosque nativo patagónico.',
		specs: '4 personas · 1 hab · 1 baño',
		amenities: ['WiFi', 'Terraza', 'Calefacción'],
		variant: 'normal' as const,
	},
	{
		slug: 'mono-zen',
		name: 'MONO ZEN',
		badge: 'Monoambiente',
		description:
			'Moderno monoambiente ideal para parejas que buscan comodidad y privacidad en un entorno natural único.',
		specs: '2 personas · Estudio · 1 baño',
		amenities: ['WiFi', 'TV LED', 'Diseño moderno'],
		variant: 'featured' as const,
	},
	{
		slug: 'zen-iv',
		name: 'ZEN IV',
		badge: 'Departamento superior',
		description:
			'Nuestro departamento más grande, con amplio living, dos habitaciones y una terraza panorámica con vistas inigualables al lago y los cerros.',
		specs: '6 personas · 2 hab · 2 baños',
		amenities: [
			'WiFi',
			'TV LED',
			'Terraza panorámica',
			'Doble baño',
			'Calefacción central',
		],
		variant: 'horizontal' as const,
	},
];

export default function HomePage() {
	return (
		<>
			<Navbar />

			{/* HERO */}
			<section
				id="inicio"
				className="relative h-screen flex flex-col items-center justify-center text-center px-6"
			>
				<HeroSlider />
				{/* Overlay */}
				<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 pointer-events-none" />

				<div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
					<div className="inline-flex justify-start items-center gap-4">
						<div className="w-8 h-px opacity-60 bg-ink"></div>
						{/* divider */}
						<p className="uppercase tracking-widest text-sm md:text-lg font-bold text-ink">
							Bariloche · Patagonia Argentina
						</p>
						<div className="w-8 h-px opacity-60 bg-ink"></div>
						{/* divider */}
					</div>

					<Image
						src="/logo-moreno-negro.webp"
						alt="Logo Lago Moreno Zen"
						width={600}
						height={600}
						className="w-72 md:w-[600px]"
					/>

					<p className="text-center justify-center text-ink text-md  tracking-wider">
						Departamentos frente al lago  ·  Av. Bustillo km 13
					</p>
					<div className="flex flex-wrap gap-4 justify-center mt-2">
						<a
							href="#departamentos"
							className="bg-gold hover:bg-gold-light text-white px-6 py-3 text-xs uppercase tracking-widest transition-colors"
						>
							Ver departamentos
						</a>
						<a
							href="https://wa.me/5492944428762"
							target="_blank"
							rel="noopener noreferrer"
							className="border border-white text-white hover:border-gold hover:text-gold px-6 py-3 text-xs uppercase tracking-widest transition-colors"
						>
							Consultar disponibilidad
						</a>
					</div>
				</div>

				{/* Scroll indicator */}
				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
					<span className="text-white/50 text-[10px] uppercase tracking-widest">
						Scroll
					</span>
					<div className="w-0.5 h-8 bg-white/30" />
				</div>
			</section>

			{/* APARTMENTS */}
			<section id="departamentos" className="bg-cream py-24">
				<div className="max-w-5xl mx-auto px-6">
					{/* Header */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
						<div>
							<SectionLabel>Nuestros espacios</SectionLabel>
							<h2 className="text-3xl md:text-4xl font-light text-ink leading-snug mt-2">
								Descubrí nuestros
								<br />
								<span className="font-bold">departamentos</span>
							</h2>
						</div>
						<div className="flex items-end">
							<p className="text-ink/70 text-sm leading-relaxed">
								Cada departamento fue diseñado para brindar una
								experiencia única en contacto con la naturaleza
								patagónica. A pocos metros del Lago Moreno y con
								acceso a todos los puntos turísticos de
								Bariloche.
							</p>
						</div>
					</div>

					{/* Cards */}
					<div className="flex flex-col gap-[2px]">
						{/* Row 1 */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
							<ApartmentCard {...apartments[0]} />
							<ApartmentCard {...apartments[1]} />
						</div>
						{/* Row 2 */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
							<ApartmentCard {...apartments[2]} />
							<ApartmentCard {...apartments[3]} />
						</div>
						{/* Row 3 */}
						<div className="grid grid-cols-1 gap-[2px]">
							<ApartmentCard {...apartments[4]} />
						</div>
					</div>
				</div>
			</section>

			{/* FEATURES STRIP */}
			<section id="comodidades" className="bg-brown-dark py-16">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold/20">
						{[
							{
								title: 'Maravillosa Ubicación',
								text: 'A solo 200 metros del Lago Moreno, km 13. Rodeados de naturaleza patagónica y a minutos de los principales atractivos.',
							},
							{
								title: 'Totalmente Equipados',
								text: 'Conexión Wifi, TV LED, ropa blanca y equipamiento completo de cocina en todos nuestros departamentos.',
							},
							{
								title: 'Consultas y Reservas',
								text: 'Podés consultar la disponibilidad de cada departamento por la web o WhatsApp. Respuesta rápida garantizada.',
							},
						].map((f) => (
							<div
								key={f.title}
								className="px-8 py-10 text-center"
							>
								<h3 className="text-white font-semibold mb-3">
									{f.title}
								</h3>
								<p className="text-white/60 text-sm leading-relaxed">
									{f.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* TESTIMONIAL */}
			<section className="bg-beige py-16 text-center">
				<div className="max-w-2xl mx-auto px-6">
					<SectionLabel>Lo que dicen de nosotros</SectionLabel>
					<blockquote className="text-ink text-xl md:text-2xl font-light italic mt-6 leading-relaxed">
						&ldquo;Hermoso hospedaje, súper cálido y cómodo con
						vistas increíbles&rdquo;
					</blockquote>
					<p className="text-ink/50 text-xs mt-4">
						— Huésped verificado
					</p>
				</div>
			</section>

			{/* LOCATION PREVIEW */}
			<section id="ubicacion" className="bg-cream py-16">
				<div className="max-w-7xl mx-auto px-6">
					<div className="max-w-3xl mb-10">
						<SectionLabel>Dónde estamos</SectionLabel>
						<h2 className="text-2xl md:text-3xl font-light text-ink mt-2 leading-snug">
							Ubicación ideal para recorrer todos los puntos
							turísticos de Bariloche,{' '}
							<span className="text-ink/60 text-xl">
								a solo 200 metros de la Playa del Viento.
							</span>
						</h2>
					</div>

					{/* Map placeholder */}
					<div
						className="w-full bg-beige-dark flex items-center justify-center"
						style={{ aspectRatio: '16/9' }}
					>
						<span className="text-ink/40 text-sm uppercase tracking-widest">
							Google Maps – Av. Bustillo km 13
						</span>
					</div>

					<div className="mt-8 text-center">
						<Link
							href="/ubicacion"
							className="bg-brown-dark text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-brown transition-colors"
						>
							Ver más sobre la ubicación
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
