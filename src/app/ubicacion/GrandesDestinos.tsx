import { SectionLabel } from '@/components';
import React from 'react';

function PinIcon() {
	return (
		<svg
			width="28"
			height="28"
			viewBox="0 0 28 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<circle cx="14" cy="14" r="13" stroke="#B08850" strokeWidth="1.2" />
			<circle cx="14" cy="14" r="4" fill="#B08850" />
		</svg>
	);
}

interface DestinoCardProps {
	name: string;
	distance: string;
	description: string;
}

function DestinoCard({ name, distance, description }: DestinoCardProps) {
	return (
		<div className="flex flex-1 flex-col gap-3 bg-dawn-pink p-5 sm:p-6">
			<PinIcon />
			<div className="flex flex-col gap-1">
				<p className="font-raleway text-xs font-bold uppercase tracking-[1.04px] text-marlin">
					{name}
				</p>
				<p className="font-raleway text-[11px] font-semibold tracking-[0.5px] text-whiskey-dark">
					{distance}
				</p>
			</div>
			<p className="font-raleway text-[12px] leading-[1.75] text-oil opacity-70">
				{description}
			</p>
		</div>
	);
}

const destinos: DestinoCardProps[] = [
	{
		name: 'Cerro Catedral',
		distance: '~16 km · 20 min',
		description:
			'Centro de ski más grande del hemisferio sur. 120 km de pistas, 34 elevadores y vistas espectaculares. En verano: trekking y alta montaña.',
	},
	{
		name: 'Circuito Chico',
		distance: '~5 km · 10 min',
		description:
			'Recorrido panorámico de 23 km bordeando el lago Nahuel Huapi. Miradores, playas, bosques y el icónico Hotel Llao Llao.',
	},
	{
		name: 'Cerro Otto',
		distance: '~3 km · 5 min',
		description:
			'Teleférico en 12 minutos hasta 1.405 m. Famosa confitería giratoria con vista de 360°. Pionero del ski en Argentina.',
	},
	{
		name: 'Cerro Campanario',
		distance: '4.5 km · 8 min',
		description:
			'Elegido por National Geographic como uno de los mejores miradores del mundo. Aerosilla en 7 min. Vistas a 4 lagos.',
	},
	{
		name: 'Colonia Suiza',
		distance: '12 km · 15 min',
		description:
			'Aldea de arquitectura alpina a 25 km del centro. Los miércoles y domingos hay curanto tradicional y feria artesanal.',
	},
];

export default function GrandesDestinos() {
	return (
		<section className="px-8 pb-20 pt-16 md:px-8 lg:px-8">
			<div className="mx-auto max-w-[1100px]">
				<SectionLabel>Explorá la región</SectionLabel>

				{/* Heading */}
				<h2 className="mb-10 font-raleway text-[2rem] leading-[1.25] tracking-[0.02em] text-oil sm:text-[2.4rem]">
					<span className="font-light">Los </span>
					<span className="font-bold">grandes destinos</span>
					<br />
					<span className="font-light">a tu alcance</span>
				</h2>

				{/* Cards — 5 cols desktop, 2-3 tablet, 1 mobile */}
				<div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-5">
					{destinos.map((d) => (
						<DestinoCard key={d.name} {...d} />
					))}
				</div>
			</div>
		</section>
	);
}
