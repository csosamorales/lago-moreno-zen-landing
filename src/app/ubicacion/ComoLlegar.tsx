import { Highlight, SectionLabel } from '@/components';
import React from 'react';
import { links } from '@/utils/links';

interface TransportCardProps {
	title: string;
	children: React.ReactNode;
	badge: string;
}

function TransportCard({ title, children, badge }: TransportCardProps) {
	return (
		<div className="flex flex-col gap-2.5 border-l-2 border-transparent bg-dawn-pink px-6 py-7 transition-colors hover:border-whiskey-dark">
			<p className="font-raleway text-sm font-bold uppercase tracking-[1.04px] text-marlin">
				{title}
			</p>
			<div className="font-raleway text-sm leading-6 opacity-[0.72]">
				{children}
			</div>
			<div className="inline-flex">
				<span className="border border-whiskey-dark px-3 py-1 font-raleway text-xxs font-semibold uppercase tracking-[1.8px] text-whiskey-dark">
					{badge}
				</span>
			</div>
		</div>
	);
}

export default function ComoLlegar() {
	return (
		<div className="mx-auto max-w-6xl">
			<SectionLabel>Cómo llegar</SectionLabel>

			{/* Heading */}
			<h1 className="mb-10 font-raleway text-3xl leading-[1.3] tracking-[0.02em] text-oil sm:text-[2.4rem]">
				<span className="font-light">Llegá </span>
				<span className="font-bold">sin complicaciones</span>
				<br />
				<span className="font-light">desde cualquier punto</span>
			</h1>

			{/* Two-column layout */}
			<div className="flex flex-col gap-12 lg:flex-row lg:gap-12">
				{/* Left: Transport cards */}
				<div className="flex flex-1 flex-col gap-0.5">
					<TransportCard
						title="Desde el aeropuerto"
						badge="~30 min en auto"
					>
						<p className="text-oil">
							El Aeropuerto Internacional se encuentra a{' '}
							<Highlight>14 km del centro</Highlight> y a{' '}
							<Highlight>
								30 km de nuestros departamentos
							</Highlight>
							. En remis o taxi el viaje dura aproximadamente{' '}
							<Highlight>40–50 minutos</Highlight>. Podes tomar un
							remise o taxi. También existe la posibilidad de{' '}
							<Highlight>Uber, Didi y Cabify</Highlight> .
						</p>
					</TransportCard>

					<TransportCard
						title="En auto propio o alquilado"
						badge="Av. Bustillo km 13"
					>
						<p className="text-oil">
							Tomá la <Highlight>Av. Bustillo</Highlight> desde el
							centro en dirección oeste. A los{' '}
							<Highlight>13 km</Highlight> encontrás nuestro
							complejo, con{' '}
							<Highlight>estacionamiento privado</Highlight>{' '}
							incluido para todos los departamentos.
						</p>
					</TransportCard>

					<TransportCard
						title="Transporte público"
						badge="Líneas 20 / 21 / 22"
					>
						<p className="text-oil">
							El servicio lo opera <Highlight>Mi Bus</Highlight>,
							empresa de transporte urbano. Se abona con{' '}
							<Highlight>tarjeta SUBE</Highlight> (disponible en
							quioscos y en el Centro Cívico). Las líneas{' '}
							<Highlight>20, 21 y 22</Highlight> recorren la Av.
							Bustillo con frecuencia de{' '}
							<Highlight>30 minutos</Highlight>, pasando frente al
							complejo en km 13. Si llegaste al aeropuerto, para
							poder llegar al centro de la ciudad está la línea{' '}
							<Highlight>72</Highlight>, podes consultar los
							horarios{' '}
							<Highlight>
								<a
									href={links.busTimetable}
									target="_blank"
									rel="noopener noreferrer"
								>
									<u>acá</u>
								</a>
							</Highlight>
							.
						</p>
					</TransportCard>
				</div>

				{/* Right: Map */}
				<div className="flex flex-1 flex-col gap-4">
					<p className="font-raleway text-xs font-medium uppercase tracking-[1.44px] text-whiskey-dark">
						Av. Bustillo km 13 · Bariloche
					</p>
					<img
						src="https://api.builder.io/api/v1/image/assets/TEMP/402dfce8c288ab741651306efc288ef152bb2dc4?width=988"
						alt="Mapa de ubicación – Av. Bustillo km 13, Playa del Viento, Bariloche"
						className="w-full object-cover"
						style={{ aspectRatio: '4/3' }}
					/>
					<p
						className="font-raleway text-xs leading-[19.2px] text-oil"
						style={{ opacity: 0.45 }}
					>
						Av. Bustillo km 13, San Carlos de Bariloche · Río Negro,
						Argentina.
						<br />A 200 m de la Playa del Viento, a orillas del Lago
						Moreno.
					</p>
				</div>
			</div>
		</div>
	);
}
