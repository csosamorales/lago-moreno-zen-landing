'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { links as externalLinks } from '@/utils/links';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar({ solid = false }: { solid?: boolean }) {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const { lang, t } = useLanguage();
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		if (solid) return;
		const handler = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', handler);
		return () => window.removeEventListener('scroll', handler);
	}, [solid]);

	const bg = useMemo(() => {
		return solid || scrolled ? 'bg-oil/90' : 'bg-transparent';
	}, [solid, scrolled]);

	const navLinks = [
		{ href: `/${lang}#departamentos`, label: t.nav.departments },
		{ href: `/${lang}#comodidades`, label: t.nav.amenities },
		{ href: `/${lang}/ubicacion`, label: t.nav.location },
	];

	const toggleLang = () => {
		const newLang = lang === 'es' ? 'en' : 'es';
		const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
		router.push(newPath);
	};

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${bg}`}
		>
			<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
				{/* Logo */}
				<Link href={`/${lang}`} className="text-white font-bold tracking-widest text-sm">
					<Image
						src="/logo-moreno-blanco.webp"
						alt="Logo Lago Moreno Zen"
						width={150}
						height={150}
					/>
				</Link>

				{/* Desktop links */}
				<div className="hidden md:flex items-center gap-8">
					{navLinks.map((l) => (
						<Link
							key={l.href}
							href={l.href}
							className="text-dawn-pink/80 uppercase hover:text-whiskey hover:underline-offset-1 font-bold text-sm tracking-wide transition-colors"
						>
							{l.label}
						</Link>
					))}
					<a
						href={externalLinks.whatsapp}
						target="_blank"
						rel="noopener noreferrer"
						className="border border-driftwood text-dawn-pink hover:bg-driftwood hover:text-marlin uppercase font-bold px-4 py-1.5 text-sm tracking-wide transition-colors"
					>
						{t.nav.book}
					</a>
					<button
						onClick={toggleLang}
						className="text-dawn-pink/60 hover:text-dawn-pink uppercase font-bold text-xs tracking-widest transition-colors"
					>
						{lang === 'es' ? 'EN' : 'ES'}
					</button>
				</div>

				{/* Hamburger */}
				<button
					className="md:hidden text-white p-2"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Abrir menú"
				>
					<span className="block w-5 h-0.5 bg-white mb-1" />
					<span className="block w-5 h-0.5 bg-white mb-1" />
					<span className="block w-5 h-0.5 bg-white" />
				</button>
			</div>

			{/* Mobile menu */}
			{menuOpen && (
				<div className="md:hidden bg-brown-dark border-t border-white/10 px-6 py-4 flex flex-col gap-4">
					{navLinks.map((l) => (
						<Link
							key={l.href}
							href={l.href}
							className="text-dawn-pink/80 uppercase hover:text-white text-sm tracking-wide"
							onClick={() => setMenuOpen(false)}
						>
							{l.label}
						</Link>
					))}
					<a
						href={externalLinks.whatsapp}
						target="_blank"
						rel="noopener noreferrer"
						className="border border-gold text-dawn-pink uppercase px-4 py-2 text-sm tracking-wide text-center"
					>
						{t.nav.book}
					</a>
					<button
						onClick={toggleLang}
						className="text-dawn-pink/60 hover:text-dawn-pink uppercase font-bold text-xs tracking-widest text-left transition-colors"
					>
						{lang === 'es' ? 'EN' : 'ES'}
					</button>
				</div>
			)}
		</nav>
	);
}
