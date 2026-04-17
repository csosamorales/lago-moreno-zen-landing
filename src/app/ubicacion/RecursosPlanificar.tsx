import { SectionLabel } from '@/components';
import React from 'react';

interface RecursoCardProps {
	category: string;
	title: string;
	description: string;
	tags: string[];
	linkLabel: string;
	href: string;
}

function RecursoCard({
	category,
	title,
	description,
	tags,
	linkLabel,
	href,
}: RecursoCardProps) {
	return (
		<div className="flex flex-col gap-4 border-t border-whiskey-dark pt-6">
			{/* Category label */}
			<p className="font-raleway text-[10px] font-semibold uppercase tracking-[1.8px] text-whiskey-dark">
				{category}
			</p>

			{/* Title */}
			<h3 className="font-raleway text-[15px] font-bold leading-snug text-oil">
				{title}
			</h3>

			{/* Description */}
			<p
				className="font-raleway text-[13px] leading-[1.8] text-oil"
				style={{ opacity: 0.72 }}
			>
				{description}
			</p>

			{/* Tags */}
			<div className="flex flex-wrap gap-1.5">
				{tags.map((tag) => (
					<span
						key={tag}
						className="border border-oil/25 px-2.5 py-1 font-raleway text-[11px] font-normal text-oil/60"
					>
						{tag}
					</span>
				))}
			</div>

			{/* Link */}
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="mt-1 font-raleway text-[10px] font-semibold uppercase tracking-[1.8px] text-whiskey-dark hover:opacity-70 transition-opacity"
			>
				{linkLabel} →
			</a>
		</div>
	);
}

const recursos: RecursoCardProps[] = [
	{
		category: 'Parque Nacional Nahuel Huapi',
		title: 'El parque más antiguo de Argentina',
		description:
			'Más de 700.000 hectáreas de bosques, lagos, volcanes y glaciares. Ofrece circuitos en auto, trekking, pesca deportiva, paseos lacustres y camping. Nuestros departamentos están dentro de su zona de influencia directa.',
		tags: [
			'Trekking',
			'Camping',
			'Pesca',
			'Paseos lacustres',
			'Ski travesía',
		],
		linkLabel: 'Sitio oficial',
		href: 'https://nahuelhuapi.gov.ar/',
	},
	{
		category: 'Bariloche Turismo Oficial',
		title: 'Todo lo que podés hacer en Bariloche',
		description:
			'Kayak, parapente, rafting, mountain bike, buceo, escalada, pesca, navegación y más. Calendario de eventos, excursiones y guía de gastronomía local incluidos.',
		tags: [
			'Aventura',
			'Gastronomía',
			'Cultura',
			'Ski & Nieve',
			'Lagos y playas',
		],
		linkLabel: 'Ver actividades',
		href: 'https://barilocheturismo.gob.ar/',
	},
	{
		category: 'Bariloche Trekking',
		title: 'Senderos y rutas de montaña',
		description:
			'Desde caminatas suaves para toda la familia hasta travesías de alta montaña. Acceso al Refugio López, Cerro Tronador, Laguna Negra y decenas de senderos con guías habilitados.',
		tags: ['Senderos', 'Alta montaña', 'Refugios', 'Guías', 'Travesías'],
		linkLabel: 'Ver rutas',
		href: 'https://www.clubandino.org/',
	},
];

export default function RecursosPlanificar() {
	return (
		<section className="bg-dawn-pink px-8 py-20 md:px-8 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<SectionLabel>Información útil</SectionLabel>

				{/* Heading */}
				<h2 className="mb-12 font-raleway text-3xl leading-[1.25] tracking-[0.02em] text-oil sm:text-[2.4rem]">
					<span className="font-light">Recursos para </span>
					<span className="font-bold">planificar</span>
					<br />
					<span className="font-light">tu estadía</span>
				</h2>

				{/* 3-column resource cards */}
				<div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
					{recursos.map((r) => (
						<RecursoCard key={r.category} {...r} />
					))}
				</div>
			</div>
		</section>
	);
}
