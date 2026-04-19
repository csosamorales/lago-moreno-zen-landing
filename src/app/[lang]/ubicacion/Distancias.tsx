'use client';
import { SectionLabel } from '@/components';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

function DistanceRow({ place, distance, time }: { place: string; distance: string; time: string }) {
	return (
		<li className="flex items-baseline justify-between gap-4 border-b border-oil/10 py-4 first:border-t">
			<span className="flex-1 font-raleway text-sm font-normal leading-snug text-oil">{place}</span>
			<span className="w-16 text-right font-raleway text-sm font-semibold text-whiskey-dark">{distance}</span>
			<span className="w-28 text-right font-raleway text-xs font-normal text-oil opacity-40">{time}</span>
		</li>
	);
}

export default function Distancias() {
	const { t } = useLanguage();
	const d = t.location.distances;

	return (
		<section className="px-8">
			<div className="mx-auto max-w-6xl">
				<SectionLabel>{d.sectionLabel}</SectionLabel>
				<div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
					<div className="flex flex-col gap-6 lg:w-[380px] lg:flex-shrink-0">
						<h2 className="font-raleway text-3xl leading-[1.25] tracking-[0.02em] text-oil sm:text-[2.4rem]">
							<span className="font-light">{d.headingLight}</span>
							<span className="font-bold">{d.headingBold}</span>
							<span className="font-light">,</span>
							<br />
							<span className="font-light">{d.headingLight2}</span>
						</h2>
						<div className="flex flex-col gap-5" style={{ opacity: 0.72 }}>
							<p className="font-raleway text-sm leading-[1.85] text-oil">{d.body1}</p>
							<p className="font-raleway text-sm leading-[1.85] text-oil">{d.body2}</p>
						</div>
					</div>
					<div className="flex-1">
						<ul className="list-none p-0">
							{d.rows.map((row) => <DistanceRow key={row.place} {...row} />)}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
