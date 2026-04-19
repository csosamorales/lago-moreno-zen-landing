'use client';
import Image from 'next/image';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroHeader() {
	const { t } = useLanguage();
	const h = t.location.hero;

	return (
		<div className="relative w-full overflow-hidden min-h-[80lvh] md:min-h-[50lvh]">
			<Image
				src="/hero-background/background-5.webp"
				alt="Vista panorámica de las montañas de Bariloche, Patagonia"
				className="absolute inset-0 h-full w-full object-cover object-center"
				fill
			/>
			<div
				className="absolute inset-0"
				style={{ background: 'linear-gradient(to bottom, rgba(20,14,8,0.45) 0%, rgba(20,14,8,0.25) 40%, rgba(20,14,8,0.38) 100%)' }}
				aria-hidden="true"
			/>
			<div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
				<p className="mb-4 font-raleway text-xxs text-whiskey font-bold uppercase tracking-[3.5px] sm:text-xs">
					{h.tagline}
				</p>
				<h1 className="font-raleway leading-[1.15] text-dawn-pink text-3xl md:text-6xl">
					<span className="font-light">{h.headingLight}</span>
					<span className="font-bold">{h.headingBold}</span>
					<br />
					<span className="font-light">{h.headingLight2}</span>
				</h1>
				<p className="mt-5 font-raleway text-xs font-light tracking-[0.5px] sm:text-sm text-dawn-pink/70">
					{h.subtitle}
				</p>
			</div>
		</div>
	);
}
