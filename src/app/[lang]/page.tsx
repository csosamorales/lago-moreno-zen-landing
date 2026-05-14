'use client';
import Link from 'next/link';
import { links } from '@/utils/links';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionLabel from '@/components/SectionLabel';
import ApartmentCard from '@/components/ApartmentCard';
import HeroSlider from '@/components/HeroSlider';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

const apartmentSlugs: Array<{
	slug: string;
	name: string;
	src: string;
	variant: 'featured' | 'normal' | 'horizontal';
}> = [
	{
		slug: 'zen-i',
		name: 'ZEN I',
		variant: 'horizontal',
		src: '/apartments/zen-1/IMG_3272.webp',
	},
	{
		slug: 'zen-ii',
		name: 'ZEN II',
		variant: 'featured',
		src: '/apartments/zen-2/IMG_9123.webp',
	},
	{
		slug: 'zen-iii',
		name: 'ZEN III',
		variant: 'normal',
		src: '/apartments/zen-3/IMG_9145.webp',
	},
	{
		slug: 'mono-zen',
		name: 'MONO ZEN',
		variant: 'horizontal',
		src: '/apartments/mono/5c58bbb9-5a2c-4d6a-95ca-30eb764af50f.webp',
	},
	// { slug: 'zen-iv', name: 'ZEN IV', variant: 'horizontal' },
];

export default function HomePage() {
	const { t, lang } = useLanguage();

	const apartments = apartmentSlugs.map(({ slug, name, variant, src }) => ({
		slug,
		name,
		variant,
		src,
		...t.home.apartments.cards[slug],
	}));

	return (
		<>
			<Navbar />

			{/* HERO */}
			<section
				id="inicio"
				className="relative h-[80lvh] flex flex-col items-center justify-center text-center px-6"
			>
				<HeroSlider />
				<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 pointer-events-none" />

				<div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
					<div className="inline-flex justify-start items-center gap-4">
						<div className="w-8 h-px opacity-60 bg-ink"></div>
						<p className="uppercase tracking-widest text-sm md:text-lg font-bold text-ink">
							{t.home.hero.tagline}
						</p>
						<div className="w-8 h-px opacity-60 bg-ink"></div>
					</div>

					<Image
						src="/logo-moreno-negro.webp"
						alt="Logo Lago Moreno Zen"
						width={600}
						height={600}
						className="w-72 md:w-[600px]"
					/>

					<p className="text-center justify-center text-ink text-md tracking-wider">
						{t.home.hero.subtitle}
					</p>
					<div className="flex flex-wrap gap-4 justify-center mt-2">
						<Button>
							<a href="#departamentos">{t.home.hero.ctaView}</a>
						</Button>
						<Button variant="outline" intent="secondary">
							<a
								href={links.whatsapp}
								target="_blank"
								rel="noopener noreferrer"
							>
								{t.home.hero.ctaContact}
							</a>
						</Button>
					</div>
				</div>
			</section>

			{/* APARTMENTS */}
			<section id="departamentos" className="bg-surface py-24">
				<div className="max-w-5xl mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
						<div>
							<SectionLabel>
								{t.home.apartments.label}
							</SectionLabel>
							<h2 className="text-3xl md:text-4xl font-light text-ink leading-snug mt-2">
								{t.home.apartments.headingLight}
								<br />
								<span className="font-bold">
									{t.home.apartments.headingBold}
								</span>
							</h2>
						</div>
						<div className="flex items-end">
							<p className="text-ink/70 text-sm leading-relaxed">
								{t.home.apartments.body}
							</p>
						</div>
					</div>

					<div className="flex flex-col gap-[2px]">
						<div className="grid grid-cols-1 gap-[2px]">
							<ApartmentCard {...apartments[0]} />
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
							<ApartmentCard {...apartments[1]} />
							<ApartmentCard {...apartments[2]} />
						</div>
						{/* <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
							<ApartmentCard {...apartments[2]} />
							<ApartmentCard {...apartments[3]} />
						</div> */}
						<div className="grid grid-cols-1 gap-[2px]">
							<ApartmentCard {...apartments[3]} />
						</div>
					</div>
				</div>
			</section>

			{/* FEATURES STRIP */}
			<section id="comodidades" className="bg-brown-dark py-16">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gold/20">
						{t.home.features.map((f) => (
							<div
								key={f.title}
								className="px-8 py-10 text-center"
							>
								<h3 className="text-white font-semibold mb-3">
									{f.title}
								</h3>
								<p className="text-white/60 text-sm leading-relaxed">
									{f.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* TESTIMONIAL */}
			<section className="bg-beige py-16 text-center">
				<div className="max-w-7xl mx-auto px-6">
					<SectionLabel>{t.home.testimonial.label}</SectionLabel>
					<blockquote className="text-ink text-xl md:text-2xl font-light italic mt-6 leading-relaxed">
						{t.home.testimonial.quote}
					</blockquote>
					<p className="text-ink/50 text-xs mt-4">
						{t.home.testimonial.author}
					</p>
				</div>
			</section>

			{/* LOCATION PREVIEW */}
			<section id="ubicacion" className="bg-cream py-16">
				<div className="max-w-7xl mx-auto px-6">
					<div className="max-w-3xl mb-10">
						<SectionLabel>
							{t.home.locationSection.label}
						</SectionLabel>
						<h2 className="text-2xl md:text-3xl font-light text-ink mt-2 leading-snug">
							{t.home.locationSection.headingLight}{' '}
							<span className="text-ink/60 text-xl">
								{t.home.locationSection.headingHighlight}
							</span>
						</h2>
					</div>

					<div
						className="w-full bg-beige-dark flex items-center justify-center"
						style={{ aspectRatio: '16/9' }}
					>
						<span className="text-ink/40 text-sm uppercase tracking-widest">
							{t.home.locationSection.mapPlaceholder}
						</span>
					</div>

					<div className="mt-8 text-center">
						<Button>
							<Link href={`/${lang}/ubicacion`}>
								{t.home.locationSection.cta}
							</Link>
						</Button>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
