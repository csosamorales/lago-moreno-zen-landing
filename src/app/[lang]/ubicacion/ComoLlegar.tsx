'use client';
import { Highlight, SectionLabel } from '@/components';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { links } from '@/utils/links';
import type { ContentPart, TransportCard } from '@/i18n/types';

function renderContent(parts: ContentPart[]) {
	return parts.map((part, i) => {
		if (part.br) return <br key={i} />;
		if (part.highlighted) return <Highlight key={i}>{part.text}</Highlight>;
		return <React.Fragment key={i}>{part.text}</React.Fragment>;
	});
}

function TransportCardUI({ title, badge, children }: { title: string; badge: string; children: React.ReactNode }) {
	return (
		<div className="flex flex-col gap-2.5 border-l-2 border-transparent bg-dawn-pink px-6 py-7 transition-colors hover:border-whiskey-dark">
			<p className="font-raleway text-sm font-bold uppercase tracking-[1.04px] text-marlin">{title}</p>
			<div className="font-raleway text-sm leading-6 opacity-[0.72]">{children}</div>
			<div className="inline-flex">
				<span className="border border-whiskey-dark px-3 py-1 font-raleway text-xxs font-semibold uppercase tracking-[1.8px] text-whiskey-dark">
					{badge}
				</span>
			</div>
		</div>
	);
}

function renderCard(card: TransportCard, linkText?: string) {
	return (
		<TransportCardUI title={card.title} badge={card.badge}>
			<p className="text-oil">
				{renderContent(card.content)}
				{linkText && (
					<Highlight>
						<a href={links.busTimetable} target="_blank" rel="noopener noreferrer">
							<u>{linkText}</u>
						</a>
					</Highlight>
				)}
			</p>
		</TransportCardUI>
	);
}

export default function ComoLlegar() {
	const { t } = useLanguage();
	const h = t.location.howToGet;

	return (
		<div className="mx-auto max-w-6xl">
			<SectionLabel>{h.sectionLabel}</SectionLabel>
			<h1 className="mb-10 font-raleway text-3xl leading-[1.3] tracking-[0.02em] text-oil sm:text-[2.4rem]">
				<span className="font-light">{h.headingLight}</span>
				<span className="font-bold">{h.headingBold}</span>
				<br />
				<span className="font-light">{h.headingLight2}</span>
			</h1>

			<div className="flex flex-col gap-12 lg:flex-row lg:gap-12">
				<div className="flex flex-1 flex-col gap-0.5">
					{renderCard(h.airport)}
					{renderCard(h.car)}
					{renderCard(h.bus, h.bus.linkText)}
				</div>

				<div className="flex flex-1 flex-col gap-4">
					<p className="font-raleway text-xs font-medium uppercase tracking-[1.44px] text-whiskey-dark">
						{h.mapLabel}
					</p>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.3536914112487!2d-71.47185332404788!3d-41.10496597133707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a77c2f784e4c7%3A0xff3fce9af939ef6!2sPlaya%20Del%20Viento!5e0!3m2!1ses!2sar!4v1778791311316!5m2!1ses!2sar"
						width="100%"
						className="w-full border-0"
						style={{ aspectRatio: '4/3' }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="Mapa de ubicación – Av. Bustillo km 13, Playa del Viento, Bariloche"
					/>
					<p className="font-raleway text-xs leading-[19.2px] text-oil" style={{ opacity: 0.45 }}>
						{h.mapCaption.split('\n').map((line, i) => (
							<React.Fragment key={i}>
								{line}
								{i === 0 && <br />}
							</React.Fragment>
						))}
					</p>
				</div>
			</div>
		</div>
	);
}
