'use client';
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
import { useLanguage } from '@/context/LanguageContext';
import React from 'react';
import type { ContentPart } from '@/i18n/types';

function renderParts(parts: ContentPart[]) {
	return parts.map((part, i) => {
		if (part.br) return <br key={i} />;
		if (part.bold)
			return (
				<span key={i} className="font-semibold text-whiskey">
					{part.text}
				</span>
			);
		return <React.Fragment key={i}>{part.text}</React.Fragment>;
	});
}

export default function UbicacionPage() {
	const { t } = useLanguage();
	const bl = t.location.busLines;

	return (
		<div className="bg-cream">
			<Navbar />

			<HeroHeader />

			<div className="max-w-6xl mx-auto flex flex-col px-8 py-16 md:py-40 gap-14 md:gap-40">
				<div className="flex flex-col gap-14 md:gap-40">
					<section>
						<ComoLlegar />
					</section>

					{/* BUS LINES */}
					<section className="bg-marlin font-raleway">
						<div className="relative overflow-hidden px-8 pt-24 pb-16 md:px-16 lg:px-16">
							<div
								className="pointer-events-none absolute right-0 top-0 translate-x-1/4 -translate-y-1/2 rounded-full"
								style={{ width: '320px', height: '320px', background: 'rgba(176, 136, 80, 0.06)' }}
								aria-hidden="true"
							/>

							<SectionLabel>{bl.sectionLabel}</SectionLabel>

							<div className="mb-8">
								<h1 className="font-raleway text-3xl leading-[1.3] tracking-[0.02em] text-dawn-pink sm:text-[2.4rem] lg:text-[2.4rem]">
									<span className="font-light">{bl.headingLight}</span>
									<span className="font-bold">{bl.headingBold}</span>
								</h1>
							</div>

							<div className="mb-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
								{bl.lines.map((line) => (
									<BusLineCard
										key={line.number}
										number={line.number}
										route={line.route}
										description={line.description}
										detail={line.detail}
									/>
								))}
							</div>

							<div
								className="border-l-2 border-whiskey-dark px-5 py-4"
								style={{ background: 'rgba(176, 136, 80, 0.12)' }}
							>
								<p className="font-raleway text-xs leading-[21px] text-dawn-pink/70">
									<span className="font-semibold text-whiskey">{bl.importantLabel}</span>{' '}
									{renderParts(bl.importantText)}
								</p>
							</div>
						</div>
					</section>

					<section>
						<Distancias />
					</section>

					<section>
						<GrandesDestinos />
					</section>
				</div>
			</div>

			<section>
				<RecursosPlanificar />
			</section>

			<section className="text-center">
				<CTA />
			</section>

			<Footer />
		</div>
	);
}
