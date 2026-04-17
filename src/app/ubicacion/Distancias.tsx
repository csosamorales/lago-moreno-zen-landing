import { SectionLabel } from '@/components';
import React from 'react';

interface DistanceRowProps {
	place: string;
	distance: string;
	time: string;
}

function DistanceRow({ place, distance, time }: DistanceRowProps) {
	return (
		<li className="flex items-baseline justify-between gap-4 border-b border-oil/10 py-4 first:border-t">
			<span className="flex-1 font-raleway text-sm font-normal leading-snug text-oil">
				{place}
			</span>
			<span className="w-16 text-right font-raleway text-sm font-semibold text-whiskey-dark">
				{distance}
			</span>
			<span className="w-28 text-right font-raleway text-xs font-normal text-oil opacity-40">
				{time}
			</span>
		</li>
	);
}

const distances: DistanceRowProps[] = [
	{ place: 'Playa del Viento', distance: '200 m', time: '2 min a pie' },
	{ place: 'Centro de Bariloche', distance: '13 km', time: '15 min en auto' },
	{
		place: 'Aeropuerto Internacional',
		distance: '27 km',
		time: '30 min en auto',
	},
	{ place: 'Cerro Otto', distance: '~3 km', time: '5 min en auto' },
	{ place: 'Cerro Campanario', distance: '4.5 km', time: '8 min en auto' },
	{
		place: 'Circuito Chico (inicio)',
		distance: '5 km',
		time: '10 min en auto',
	},
	{ place: 'Colonia Suiza', distance: '12 km', time: '15 min en auto' },
	{ place: 'Cerro Catedral', distance: '~16 km', time: '20 min en auto' },
];

export default function Distancias() {
	return (
		<section className="px-8">
			<div className="mx-auto max-w-6xl">
				<SectionLabel>Distancias</SectionLabel>

				{/* Two-column layout */}
				<div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
					{/* Left: heading + body copy */}
					<div className="flex flex-col gap-6 lg:w-[380px] lg:flex-shrink-0">
						<h2 className="font-raleway text-3xl leading-[1.25] tracking-[0.02em] text-oil sm:text-[2.4rem]">
							<span className="font-light">Todo </span>
							<span className="font-bold">cerca</span>
							<span className="font-light">,</span>
							<br />
							<span className="font-light">todo al alcance</span>
						</h2>

						<div
							className="flex flex-col gap-5"
							style={{ opacity: 0.72 }}
						>
							<p className="font-raleway text-sm leading-[1.85] text-oil">
								Nuestra ubicación en el km 13 de la Av. Bustillo
								es uno de nuestros mayores atractivos. Estás a
								200 metros de la Playa del Viento, a pocos
								minutos del centro de Bariloche, y en el corazón
								del corredor que conecta los principales
								atractivos naturales de la región.
							</p>
							<p className="font-raleway text-sm leading-[1.85] text-oil">
								Desde aquí podés llegar en auto a prácticamente
								cualquier punto turístico en menos de 30
								minutos, o simplemente salir caminando a la
								costa del lago.
							</p>
						</div>
					</div>

					{/* Right: distance table */}
					<div className="flex-1">
						<ul className="list-none p-0">
							{distances.map((row) => (
								<DistanceRow key={row.place} {...row} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
