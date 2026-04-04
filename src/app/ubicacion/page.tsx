import SectionLabel from '@/components/SectionLabel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransportCard from '@/components/TransportCard';
import BusLineCard from '@/components/BusLine';
import DistanceRow from '@/components/DistanceRow';
import AttractionCard from '@/components/AttractionCard';
import ResourceCard from '@/components/ResourceCard';
import ComoLlegar from '@/components/ComoLlegar';

export default function UbicacionPage() {
	return (
		<>
			<Navbar />

			{/* HERO */}
			<section
				className="relative flex items-center justify-center text-center px-6"
				style={{
					height: 420,
					background:
						'linear-gradient(135deg, #2a1f14 0%, #6b8c6e 100%)',
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60 pointer-events-none" />
				<div className="relative z-10 max-w-2xl">
					<p className="uppercase tracking-widest text-[10px] font-bold text-gold mb-3">
						Cómo llegar
					</p>
					<h1 className="text-3xl md:text-5xl font-light text-white mb-4">
						Ubicación ideal para descubrir todo
					</h1>
					<p className="text-white/70 text-sm">
						A 200 metros de la Playa del Viento · Av. Bustillo km 13
					</p>
				</div>
			</section>

			<div className="max-w-6xl mx-auto flex flex-col px-8 gap-40">
				<div className="flex flex-col pt-20">
					{/* HOW TO GET THERE */}
					<section className="bg-cream">
						<ComoLlegar />
					</section>

					{/* BUS LINES */}
					<section className="bg-marlin font-raleway">
						{/* <div className="max-w-6xl mx-auto px-6"> */}
						<div className="relative overflow-hidden px-8 pt-24 pb-16 md:px-16 lg:px-16">
							{/* Decorative circle */}
							<div
								className="pointer-events-none absolute right-0 top-0 translate-x-1/4 -translate-y-1/2 rounded-full"
								style={{
									width: '320px',
									height: '320px',
									background: 'rgba(176, 136, 80, 0.06)',
								}}
								aria-hidden="true"
							/>

							{/* Section label */}
							<div className="mb-3 flex items-center gap-3.5">
								<span className="font-raleway text-[10px] font-bold uppercase tracking-[3.5px] text-whiskey">
									Líneas de colectivo
								</span>
								<div
									className="h-px w-10 bg-whiskey"
									style={{ opacity: 0.4 }}
									aria-hidden="true"
								/>
							</div>

							{/* Heading */}
							<div className="mb-8">
								<h1 className="font-raleway text-[2rem] leading-[1.3] tracking-[0.02em] text-dawn-pink sm:text-[2.4rem] lg:text-[2.4rem]">
									<span className="font-light">
										Moverse en Bariloche{'\n'}es{' '}
									</span>
									<span className="font-bold">
										más fácil de lo que creés
									</span>
								</h1>
							</div>

							{/* Cards grid */}
							<div className="mb-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
								<BusLineCard
									number="72"
									route="Aeropuerto — Centro"
									description="Desde el aeropuerto hasta Moreno al 400 (centro), con paradas en Policía Caminera y Terminal de Ómnibus."
									detail={
										<p className="font-raleway text-[13px] leading-[1.8] text-dawn-pink/80">
											<span className="font-semibold text-whiskey">
												Desde aeropuerto:
											</span>{' '}
											7:10 · 9:00 · 11:00 · 13:40 · 16:05
											· 18:10 · 20:40 · 22:00
											{'\n'}
											<span className="font-semibold text-whiskey">
												Desde el centro:
											</span>{' '}
											6:50 · 8:30 · 10:30 · 13:10 · 15:40
											· 17:30 · 20:10 · 21:15
										</p>
									}
								/>

								<BusLineCard
									number="20–22"
									route="Centro — Bustillo km 13"
									description={
										<p className="font-raleway text-[13px] leading-[1.8] text-dawn-pink/80">
											Recorren la{' '}
											<span className="font-semibold text-whiskey">
												Avenida Bustillo
											</span>{' '}
											desde la Terminal hasta la zona
											oeste, pasando frente al complejo en
											km 13.
										</p>
									}
									detail={
										<p className="font-raleway text-[13px] leading-[1.8] text-dawn-pink/80">
											Frecuencia cada{' '}
											<span className="font-semibold text-whiskey">
												30 minutos
											</span>{' '}
											de 5:30 a 21:00 hs. Ideal para ir y
											volver del centro durante la
											estadía.
										</p>
									}
								/>

								<BusLineCard
									number="10"
									route="Centro — Colonia Suiza"
									description={
										<p className="font-raleway text-[13px] leading-[1.8] text-dawn-pink/80">
											Recorre el km 7.200, Puerto Moreno,
											km 14.200, km 18, Trébol y{' '}
											<span className="font-semibold text-whiskey">
												Colonia Suiza
											</span>
											.
										</p>
									}
									detail={
										<p className="font-raleway text-[13px] leading-[1.8] text-dawn-pink/80">
											Con{' '}
											<span className="font-semibold text-whiskey">
												7 frecuencias diarias
											</span>
											, es la opción perfecta para visitar
											este encantador pueblo sin auto.
										</p>
									}
								/>

								<BusLineCard
									number="Llao Llao"
									route="Terminal — Llao Llao (km 25)"
									description={
										<p className="font-raleway text-[13px] leading-[1.8] text-dawn-pink/80">
											Une la Terminal con el{' '}
											<span className="font-semibold text-whiskey">
												Hotel Llao Llao
											</span>
											, recorriendo toda la Av. Bustillo.
										</p>
									}
									detail={
										<p className="font-raleway text-[13px] leading-[1.8] text-dawn-pink/80">
											Frecuencia cada{' '}
											<span className="font-semibold text-whiskey">
												20 minutos
											</span>
											. Pasa frente a nuestros
											departamentos y permite acceder a
											toda la zona oeste del lago Nahuel
											Huapi.
										</p>
									}
								/>
							</div>

							{/* Important note */}
							<div
								className="border-l-2 border-whiskey-dark px-5 py-4"
								style={{
									background: 'rgba(176, 136, 80, 0.12)',
								}}
							>
								<p className="font-raleway text-[12px] leading-[21px] text-dawn-pink/70">
									<span className="font-semibold text-whiskey">
										Importante:
									</span>{' '}
									El transporte público se paga únicamente con{' '}
									<span className="font-semibold text-whiskey">
										tarjeta SUBE
									</span>
									. Se adquiere y recarga en quioscos o en la
									oficina del Centro Cívico (lun–vie de 8 a 15
									hs). Si llegás desde Buenos Aires, tu misma
									tarjeta SUBE funciona en Bariloche.
								</p>
							</div>
						</div>
					</section>
				</div>

				{/* DISTANCES */}
				<section className="bg-cream py-16">
					<div className="max-w-6xl mx-auto px-6">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
							<div>
								<SectionLabel>
									Distancias desde el complejo
								</SectionLabel>
								<h2 className="text-2xl font-light text-ink mt-2 mb-8">
									Todo Bariloche al alcance
								</h2>
								<p className="text-ink/70 text-sm leading-relaxed">
									La privilegiada ubicación en el km 13 de la
									Av. Bustillo nos pone a pocos minutos de las
									principales atracciones turísticas, playas
									lacustres y senderos de montaña de la
									región.
								</p>
							</div>
							<div>
								<DistanceRow
									place="Playa del Viento"
									distance="200 m"
								/>
								<DistanceRow
									place="Centro de Bariloche"
									distance="13 km"
								/>
								<DistanceRow
									place="Aeropuerto Internacional"
									distance="27 km"
								/>
								<DistanceRow
									place="Cerro Otto"
									distance="~3 km"
								/>
								<DistanceRow
									place="Cerro Campanario"
									distance="4.5 km"
								/>
								<DistanceRow
									place="Circuito Chico"
									distance="5 km"
								/>
								<DistanceRow
									place="Colonia Suiza"
									distance="12 km"
								/>
								<DistanceRow
									place="Cerro Catedral"
									distance="~16 km"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* ATTRACTIONS */}
				<section className="bg-beige py-16">
					<div className="max-w-6xl mx-auto px-6">
						<SectionLabel>Atracciones cercanas</SectionLabel>
						<h2 className="text-2xl font-light text-ink mt-2 mb-8">
							Qué hacer desde el complejo
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
							<AttractionCard
								name="Cerro Catedral"
								distance="~16 km"
								description="El mayor centro de esquí de Sudamérica. En verano, trekking y mountain bike."
							/>
							<AttractionCard
								name="Circuito Chico"
								distance="~5 km"
								description="Ruta escénica con paisajes de lago y montaña. Ideal en auto o bici."
							/>
							<AttractionCard
								name="Cerro Otto"
								distance="~3 km"
								description="Teleférico y vistas panorámicas 360° de Bariloche y el lago Nahuel Huapi."
							/>
							<AttractionCard
								name="Cerro Campanario"
								distance="4.5 km"
								description="Considerada una de las vistas más bellas del mundo. Aerosilla desde la base."
							/>
							<AttractionCard
								name="Colonia Suiza"
								distance="12 km"
								description="Aldea con arquitectura suiza, curanto y artesanías. Domingos: feria artesanal."
							/>
						</div>
					</div>
				</section>
			</div>

			{/* RESOURCES */}
			<section className="bg-cream py-16">
				<div className="max-w-6xl mx-auto px-6">
					<SectionLabel>Recursos útiles</SectionLabel>
					<h2 className="text-2xl font-light text-ink mt-2 mb-8">
						Para planificar tu viaje
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<ResourceCard
							source="Parque Nacional"
							title="Parque Nacional Nahuel Huapi"
							description="Información oficial sobre senderos, guardaparques, accesos y normativa del parque."
							tags={['Trekking', 'Naturaleza', 'Oficial']}
							url="nahuelhuapi.gov.ar"
						/>
						<ResourceCard
							source="Turismo oficial"
							title="Bariloche Turismo Oficial"
							description="Guía oficial de turismo de San Carlos de Bariloche: eventos, excursiones y alojamientos."
							tags={['Turismo', 'Excursiones', 'Eventos']}
							url="barilocheturismo.gob.ar"
						/>
						<ResourceCard
							source="Actividades"
							title="Bariloche Trekking"
							description="Portal especializado en trekking, escalada y actividades outdoor en la región patagónica."
							tags={['Trekking', 'Outdoor', 'Guías']}
							url="barilochetrekking.com"
						/>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="bg-brown-dark py-16 text-center">
				<div className="max-w-xl mx-auto px-6">
					<SectionLabel>¿Tenés dudas sobre cómo llegar?</SectionLabel>
					<h2 className="text-2xl font-light text-white mt-4 mb-6">
						Estamos para ayudarte a planificar tu llegada
					</h2>
					<a
						href="https://wa.me/5492944428762"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block bg-gold hover:bg-gold-light text-white px-8 py-3 text-xs uppercase tracking-widest transition-colors"
					>
						Consultarnos por WhatsApp
					</a>
				</div>
			</section>

			<Footer />
		</>
	);
}
