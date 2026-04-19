'use client';
import { SectionLabel } from '@/components';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

function PinIcon() {
	return (
		<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<circle cx="14" cy="14" r="13" stroke="#B08850" strokeWidth="1.2" />
			<circle cx="14" cy="14" r="4" fill="#B08850" />
		</svg>
	);
}

function DestinoCard({ name, distance, description }: { name: string; distance: string; description: string }) {
	return (
		<div className="flex flex-1 flex-col gap-3 bg-dawn-pink p-5 sm:p-6">
			<PinIcon />
			<div className="flex flex-col gap-1">
				<p className="font-raleway text-xs font-bold uppercase tracking-[1.04px] text-marlin">{name}</p>
				<p className="font-raleway text-[11px] font-semibold tracking-[0.5px] text-whiskey-dark">{distance}</p>
			</div>
			<p className="font-raleway text-[12px] leading-[1.75] text-oil opacity-70">{description}</p>
		</div>
	);
}

export default function GrandesDestinos() {
	const { t } = useLanguage();
	const a = t.location.attractions;

	return (
		<section className="px-8 pb-20 pt-16 md:px-8 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<SectionLabel>{a.sectionLabel}</SectionLabel>
				<h2 className="mb-10 font-raleway text-3xl leading-[1.25] tracking-[0.02em] text-oil sm:text-[2.4rem]">
					<span className="font-light">{a.headingLight}</span>
					<span className="font-bold">{a.headingBold}</span>
					<br />
					<span className="font-light">{a.headingLight2}</span>
				</h2>
				<div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-5">
					{a.items.map((d) => <DestinoCard key={d.name} {...d} />)}
				</div>
			</div>
		</section>
	);
}
