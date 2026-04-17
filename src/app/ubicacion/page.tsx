import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BusLineCard from './BusLine';
import ComoLlegar from './ComoLlegar';
import HeroHeader from './HeroHeader';
import Distancias from './Distancias';
import GrandesDestinos from './GrandesDestinos';
import RecursosPlanificar from './RecursosPlanificar';
import CTA from './CTA';
import { SectionLabel } from '@/components';

export default function UbicacionPage() {
	return (
		<div className="bg-cream">
			<Navbar />

			{/* HERO */}
			<HeroHeader />

			<div className="max-w-6xl mx-auto flex flex-col px-8 py-16 md:py-40 gap-14 md:gap-40">
				<div className="flex flex-col gap-14 md:gap-40">
					{/* HOW TO GET THERE */}
					<section>
						<ComoLlegar />
					</section>

					{/* BUS LINES */}
					<section className="bg-marlin font-raleway">
						<div className="relative overflow-hidden px-8 pt-24 pb-16 md:px-16 lg:px-16">
							{/* Decorative circle */}
							<div
								className="pointer-events-none absolute right-0 top-0 translate-x-1/4 -translate-y-1/2 rounded-full w-80 h-80"
								style={{
									width: '320px',
									height: '320px',
									background: 'rgba(176, 136, 80, 0.06)',
								}}
								aria-hidden="true"
							/>

							<SectionLabel>Líneas de colectivo</SectionLabel>

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
										<p className="font-raleway text-sm leading-[1.8] text-dawn-pink/80">
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
										<p className="font-raleway text-sm leading-[1.8] text-dawn-pink/80">
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
										<p className="font-raleway text-sm leading-[1.8] text-dawn-pink/80">
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
										<p className="font-raleway text-sm leading-[1.8] text-dawn-pink/80">
											Recorre el km 7.200, Puerto Moreno,
											km 14.200, km 18, Trébol y{' '}
											<span className="font-semibold text-whiskey">
												Colonia Suiza
											</span>
											.
										</p>
									}
									detail={
										<p className="font-raleway text-sm leading-[1.8] text-dawn-pink/80">
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
										<p className="font-raleway text-sm leading-[1.8] text-dawn-pink/80">
											Une la Terminal con el{' '}
											<span className="font-semibold text-whiskey">
												Hotel Llao Llao
											</span>
											, recorriendo toda la Av. Bustillo.
										</p>
									}
									detail={
										<p className="font-raleway text-sm leading-[1.8] text-dawn-pink/80">
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
								<p className="font-raleway text-xs leading-[21px] text-dawn-pink/70">
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

					{/* DISTANCES */}
					<section>
						<Distancias />
					</section>

					{/* ATTRACTIONS */}
					<section>
						<GrandesDestinos />
					</section>
				</div>
			</div>

			{/* RESOURCES */}
			<section>
				<RecursosPlanificar />
			</section>

			{/* CTA */}
			<section className="text-center">
				<CTA />
			</section>

			<Footer />
		</div>
	);
}
