'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';
import Lightbox from '@/components/Lightbox';
import GalleryModal from '@/components/GalleryModal';
import MiniCalendar from '@/components/MiniCalendar';
import SectionLabel from '@/components/SectionLabel';
import ContactForm from '@/components/ContactForm';
import type { Apartment } from '@/data/apartments';
import { useLanguage } from '@/context/LanguageContext';

export default function DepartmentClient({
	apartment,
	images,
}: {
	apartment: Apartment;
	images: string[];
}) {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);
	const [galleryOpen, setGalleryOpen] = useState(false);
	const [takenDates, setTakenDates] = useState<string[]>(
		apartment.takenDates ?? [],
	);
	const [loadingAvailability, setLoadingAvailability] = useState(true);
	const { t, lang } = useLanguage();

	useEffect(() => {
		fetch(`/api/availability/${apartment.slug}`)
			.then((r) => r.json())
			.then((data) => {
				if (Array.isArray(data.dates)) setTakenDates(data.dates);
			})
			.catch(() => {})
			.finally(() => setLoadingAvailability(false));
	}, [apartment.slug]);

	const aptText = t.apartmentsData[apartment.slug];
	const slides = images.map((src) => ({ src, alt: apartment.name }));

	const openLightbox = (i: number) => {
		setLightboxIndex(i);
		setLightboxOpen(true);
	};

	return (
		<>
			<Navbar solid />

			{/* Breadcrumb */}
			<div className="bg-beige pt-16">
				<div className="max-w-7xl mx-auto px-6 py-3 text-xs text-ink/50 flex gap-2 items-center">
					<Link href={`/${lang}`} className="hover:text-gold">
						{t.apartmentDetail.breadcrumbHome}
					</Link>
					<span>/</span>
					<Link
						href={`/${lang}#departamentos`}
						className="hover:text-gold"
					>
						{t.apartmentDetail.breadcrumbDepartments}
					</Link>
					<span>/</span>
					<span className="text-ink">{apartment.name}</span>
				</div>
			</div>

			{/* Carousel */}
			<Carousel
				slides={slides}
				onImageClick={openLightbox}
				onGalleryOpen={() => setGalleryOpen(true)}
			/>

			{lightboxOpen && (
				<Lightbox
					slides={slides}
					index={lightboxIndex}
					onClose={() => setLightboxOpen(false)}
					onNavigate={setLightboxIndex}
				/>
			)}

			{galleryOpen && (
				<GalleryModal
					slides={slides}
					title={apartment.name}
					onClose={() => setGalleryOpen(false)}
					onImageClick={(i) => {
						setGalleryOpen(false);
						openLightbox(i);
					}}
				/>
			)}

			{/* Detail Layout */}
			<div className="bg-cream py-16">
				<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* Left */}
					<div className="lg:col-span-2">
						<span className="uppercase tracking-widest text-xxs font-bold text-gold">
							{aptText.badge}
						</span>
						<h1 className="text-3xl font-semibold text-ink mt-1 mb-2">
							{apartment.name}
						</h1>
						<div className="flex gap-1 mb-2">
							{[...Array(5)].map((_, i) => (
								<span key={i} className="text-gold text-sm">
									★
								</span>
							))}
						</div>
						<p className="text-ink/60 text-sm mb-6">
							{t.apartmentDetail.address}
						</p>
						<p className="text-xs text-ink/50 mb-6 flex gap-4">
							<span>
								{apartment.specs.guests}{' '}
								{t.apartmentDetail.guestUnit}
							</span>
							<span>
								{apartment.specs.beds}{' '}
								{t.apartmentDetail.bedUnit}
							</span>
							<span>
								{apartment.specs.baths}{' '}
								{apartment.specs.baths > 1
									? t.apartmentDetail.bathsUnit
									: t.apartmentDetail.bathUnit}
							</span>
						</p>

						{aptText.description.map((p, i) => (
							<p
								key={i}
								className="text-ink/80 text-sm leading-relaxed mb-4"
							>
								{p}
							</p>
						))}

						<hr className="border-beige-dark my-8" />

						<SectionLabel>
							{t.apartmentDetail.amenitiesLabel}
						</SectionLabel>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
							{aptText.amenities.map((group) => (
								<div key={group.group}>
									<div className="flex items-center gap-2 mb-2">
										<span className="text-gold text-xs">
											{group.icon}
										</span>
										<h4 className="text-xs font-bold uppercase tracking-widest text-ink">
											{group.group}
										</h4>
									</div>
									<ul className="space-y-1">
										{group.items.map((item) => (
											<li
												key={item}
												className="text-sm text-ink/70 flex items-center gap-2"
											>
												<span className="w-1 h-1 bg-gold inline-block flex-shrink-0" />
												{item}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					{/* Sidebar */}
					<div className="space-y-6">
						<div className="bg-beige p-6 top-24">
							<SectionLabel>
								{t.apartmentDetail.availabilityLabel}
							</SectionLabel>
							<div className="mt-4">
								{loadingAvailability ? (
									<div className="h-40 bg-beige-dark animate-pulse" />
								) : (
									<MiniCalendar takenDates={takenDates} />
								)}
							</div>
						</div>

						<div className="bg-beige p-6">
							<SectionLabel>
								{t.apartmentDetail.contactLabel}
							</SectionLabel>
							<ContactForm
								apartmentName={apartment.name}
								t={t.apartmentDetail}
							/>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
