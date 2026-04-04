'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';
import Lightbox from '@/components/Lightbox';
import GalleryModal from '@/components/GalleryModal';
import MiniCalendar from '@/components/MiniCalendar';
import SectionLabel from '@/components/SectionLabel';
import type { Apartment } from '@/data/apartments';

export default function DepartmentClient({
	apartment,
}: {
	apartment: Apartment;
}) {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);
	const [galleryOpen, setGalleryOpen] = useState(false);

	const openLightbox = (i: number) => {
		setLightboxIndex(i);
		setLightboxOpen(true);
	};

	return (
		<>
			<Navbar solid />

			{/* Breadcrumb */}
			<div className="bg-beige pt-16">
				<div className="max-w-7xl mx-auto px-6 py-3 text-xs text-ink/50 flex gap-2 items-center">
					<Link href="/" className="hover:text-gold">
						Inicio
					</Link>
					<span>/</span>
					<Link href="/#departamentos" className="hover:text-gold">
						Departamentos
					</Link>
					<span>/</span>
					<span className="text-ink">{apartment.name}</span>
				</div>
			</div>

			{/* Carousel */}
			<Carousel
				slides={apartment.images}
				onImageClick={openLightbox}
				onGalleryOpen={() => setGalleryOpen(true)}
			/>

			{/* Lightbox */}
			{lightboxOpen && (
				<Lightbox
					slides={apartment.images}
					index={lightboxIndex}
					onClose={() => setLightboxOpen(false)}
					onNavigate={setLightboxIndex}
				/>
			)}

			{/* Gallery Modal */}
			{galleryOpen && (
				<GalleryModal
					slides={apartment.images}
					title={apartment.name}
					onClose={() => setGalleryOpen(false)}
					onImageClick={(i) => {
						setGalleryOpen(false);
						openLightbox(i);
					}}
				/>
			)}

			{/* Detail Layout */}
			<div className="bg-cream py-16">
				<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* Left */}
					<div className="lg:col-span-2">
						<span className="uppercase tracking-widest text-[10px] font-bold text-gold">
							{apartment.badge}
						</span>
						<h1 className="text-3xl font-semibold text-ink mt-1 mb-2">
							{apartment.name}
						</h1>
						{/* Stars */}
						<div className="flex gap-1 mb-2">
							{[...Array(5)].map((_, i) => (
								<span key={i} className="text-gold text-sm">
									★
								</span>
							))}
						</div>
						<p className="text-ink/60 text-sm mb-6">
							Av. Bustillo km 13 · Lago Moreno · Bariloche,
							Argentina
						</p>
						<p className="text-xs text-ink/50 mb-6 flex gap-4">
							<span>{apartment.specs.guests} personas</span>
							<span>{apartment.specs.beds} hab.</span>
							<span>
								{apartment.specs.baths} baño
								{apartment.specs.baths > 1 ? 's' : ''}
							</span>
						</p>

						{apartment.description.map((p, i) => (
							<p
								key={i}
								className="text-ink/80 text-sm leading-relaxed mb-4"
							>
								{p}
							</p>
						))}

						<hr className="border-beige-dark my-8" />

						<SectionLabel>Comodidades incluidas</SectionLabel>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
							{apartment.amenities.map((group) => (
								<div key={group.group}>
									<div className="flex items-center gap-2 mb-2">
										<span className="text-gold text-xs">
											{group.icon}
										</span>
										<h4 className="text-xs font-bold uppercase tracking-widest text-ink">
											{group.group}
										</h4>
									</div>
									<ul className="space-y-1">
										{group.items.map((item) => (
											<li
												key={item}
												className="text-sm text-ink/70 flex items-center gap-2"
											>
												<span className="w-1 h-1 bg-gold inline-block flex-shrink-0" />
												{item}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					{/* Sidebar */}
					<div className="space-y-6">
						{/* Calendar */}
						<div className="bg-beige p-6 sticky top-24">
							<SectionLabel>Disponibilidad</SectionLabel>
							<div className="mt-4">
								<MiniCalendar
									takenDates={apartment.takenDates}
								/>
							</div>
						</div>

						{/* Contact form */}
						<div className="bg-beige p-6">
							<SectionLabel>Contactanos</SectionLabel>
							<form
								className="mt-4 space-y-3"
								onSubmit={(e) => e.preventDefault()}
							>
								<input
									required
									type="email"
									placeholder="Email *"
									className="w-full bg-cream border border-beige-dark px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-gold"
								/>
								<div className="grid grid-cols-2 gap-3">
									<input
										required
										type="text"
										placeholder="Nombre *"
										className="bg-cream border border-beige-dark px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-gold"
									/>
									<input
										required
										type="text"
										placeholder="Apellido *"
										className="bg-cream border border-beige-dark px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-gold"
									/>
								</div>
								<input
									type="tel"
									placeholder="Teléfono"
									className="w-full bg-cream border border-beige-dark px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-gold"
								/>
								<input
									required
									type="number"
									min={1}
									placeholder="Cantidad de pasajeros *"
									className="w-full bg-cream border border-beige-dark px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-gold"
								/>
								<div className="grid grid-cols-2 gap-3">
									<input
										required
										type="date"
										placeholder="Fecha ingreso *"
										className="bg-cream border border-beige-dark px-3 py-2 text-sm text-ink focus:outline-none focus:border-gold"
									/>
									<input
										required
										type="date"
										placeholder="Fecha salida *"
										className="bg-cream border border-beige-dark px-3 py-2 text-sm text-ink focus:outline-none focus:border-gold"
									/>
								</div>
								<textarea
									rows={3}
									placeholder="Mensaje"
									className="w-full bg-cream border border-beige-dark px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-gold resize-none"
								/>
								<button
									type="submit"
									className="w-full bg-brown-dark text-white py-3 text-xs uppercase tracking-widest hover:bg-brown transition-colors"
								>
									Consultar por Email
								</button>
								<a
									href={`https://wa.me/5492944428762?text=Hola! Me interesa el departamento ${apartment.name}`}
									target="_blank"
									rel="noopener noreferrer"
									className="block w-full border border-brown-dark text-brown-dark text-center py-3 text-xs uppercase tracking-widest hover:bg-brown-dark hover:text-white transition-colors"
								>
									Consultar por WhatsApp
								</a>
							</form>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
