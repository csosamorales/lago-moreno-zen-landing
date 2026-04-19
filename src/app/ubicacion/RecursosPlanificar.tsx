'use client';
import { SectionLabel } from '@/components';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

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
			<p className="font-raleway text-[10px] font-semibold uppercase tracking-[1.8px] text-whiskey-dark">
				{category}
			</p>
			<h3 className="font-raleway text-[15px] font-bold leading-snug text-oil">
				{title}
			</h3>
			<p
				className="font-raleway text-[13px] leading-[1.8] text-oil"
				style={{ opacity: 0.72 }}
			>
				{description}
			</p>
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

export default function RecursosPlanificar() {
	const { t } = useLanguage();
	const r = t.location.resources;

	return (
		<section className="bg-dawn-pink px-8 py-20 md:px-8 lg:px-8">
			<div className="mx-auto max-w-6xl">
				<SectionLabel>{r.sectionLabel}</SectionLabel>

				<h2 className="mb-12 font-raleway text-3xl leading-[1.25] tracking-[0.02em] text-oil sm:text-[2.4rem]">
					<span className="font-light">{r.headingLight}</span>
					<span className="font-bold">{r.headingBold}</span>
					<br />
					<span className="font-light">{r.headingLight2}</span>
				</h2>

				<div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
					{r.items.map((item) => (
						<RecursoCard key={item.category} {...item} />
					))}
				</div>
			</div>
		</section>
	);
}
