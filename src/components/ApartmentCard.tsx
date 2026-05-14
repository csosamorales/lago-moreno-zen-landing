'use client';
import Link from 'next/link';
import PhotoPlaceholder from './PhotoPlaceholder';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

interface ApartmentCardProps {
	slug: string;
	name: string;
	badge: string;
	description: string;
	specs: string;
	amenities: string[];
	src: string;
	variant?: 'normal' | 'featured' | 'horizontal';
}

export default function ApartmentCard({
	slug,
	name,
	badge,
	description,
	specs,
	amenities,
	src,
	variant = 'normal',
}: ApartmentCardProps) {
	const { t, lang } = useLanguage();
	const href = `/${lang}/departamentos/${slug}`;

	if (variant === 'featured') {
		return (
			<div className="bg-beige flex flex-col group hover:shadow-xl transition-shadow col-span-2">
				{src ? (
					<Image
						alt={`${slug}-portada`}
						src={src}
						width={500}
						height={500}
						className="w-full max-h-[350px] object-cover object-center"
					/>
				) : (
					<PhotoPlaceholder className="w-full min-h-[280px]" />
				)}

				<div className="p-8 flex flex-col justify-between flex-1">
					<div>
						<span className="uppercase tracking-widest text-xxs font-bold text-gold">
							{badge}
						</span>
						<h3 className="text-2xl font-semibold text-ink mt-1 mb-3">
							{name}
						</h3>
						<p className="text-ink/70 text-sm leading-relaxed mb-4">
							{description}
						</p>
						<p className="text-xs text-ink/50 mb-3">{specs}</p>
						<div className="flex flex-wrap gap-2 mb-4">
							{amenities.map((a) => (
								<span
									key={a}
									className="text-xxs uppercase tracking-widest border border-gold/40 text-gold px-2 py-1"
								>
									{a}
								</span>
							))}
						</div>
					</div>
					<div className="flex flex-row justify-end items-end mt-4 border-t border-beige-dark pt-4">
						{/* <Link href={href} className="bg-brown-dark text-white px-4 py-2 text-xs uppercase tracking-widest hover:bg-brown transition-colors">
							{t.apartmentCard.viewDetail}
						</Link> */}
						<Link
							href={href}
							className="text-xs text-gold hover:underline self-end"
						>
							{t.apartmentCard.viewDetail}
						</Link>
					</div>
				</div>
			</div>
		);
	}

	if (variant === 'horizontal') {
		return (
			<div className="bg-beige flex flex-col md:flex-row group hover:shadow-xl transition-shadow col-span-3">
				{src ? (
					<Image
						alt={`${slug}-portada`}
						src={src}
						width={500}
						height={500}
						className="w-full md:w-1/2 max-h-80 object-cover object-center"
					/>
				) : (
					<PhotoPlaceholder className="w-full md:w-1/2 min-h-[280px]" />
				)}

				<div className="p-8 flex flex-col justify-between flex-1">
					<div>
						<span className="uppercase tracking-widest text-xxs font-bold text-gold">
							{badge}
						</span>
						<h3 className="text-2xl font-semibold text-ink mt-1 mb-3">
							{name}
						</h3>
						<p className="text-ink/70 text-sm leading-relaxed mb-4">
							{description}
						</p>
						<p className="text-xs text-ink/50 mb-3">{specs}</p>
						<div className="flex flex-wrap gap-2 mb-4">
							{amenities.map((a) => (
								<span
									key={a}
									className="text-xxs uppercase tracking-widest border border-gold/40 text-gold px-2 py-1"
								>
									{a}
								</span>
							))}
						</div>
					</div>
					<div className="flex flex-row justify-end items-center mt-4 border-t border-beige-dark pt-4">
						{/* <Link href={href} className="bg-brown-dark text-white px-4 py-2 text-xs uppercase tracking-widest hover:bg-brown transition-colors">
							{t.apartmentCard.viewDetail}
						</Link> */}
						<Link
							href={href}
							className="text-xs text-gold hover:underline"
						>
							{t.apartmentCard.viewDetail}
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-beige flex flex-col group hover:shadow-xl transition-shadow">
			{src ? (
				<Image
					alt={`${slug}-portada`}
					src={src}
					width={500}
					height={500}
					className="w-full h-48 object-cover object-center"
				/>
			) : (
				<PhotoPlaceholder className="w-full h-48" />
			)}

			<div className="p-6 flex flex-col flex-1 justify-between">
				<div>
					<span className="uppercase tracking-widest text-xxs font-bold text-gold">
						{badge}
					</span>
					<h3 className="text-xl font-semibold text-ink mt-1 mb-2">
						{name}
					</h3>
					<p className="text-ink/70 text-sm leading-relaxed mb-3">
						{description}
					</p>
					<p className="text-xs text-ink/50 mb-3">{specs}</p>
					<div className="flex flex-wrap gap-1.5 mb-4">
						{amenities.map((a) => (
							<span
								key={a}
								className="text-xxs uppercase tracking-widest border border-gold/40 text-gold px-2 py-1"
							>
								{a}
							</span>
						))}
					</div>
				</div>
				<div className="flex flex-row justify-end items-center gap-4 border-t border-beige-dark pt-4">
					{/* <Link href={href} className="bg-brown-dark text-white px-4 py-2 text-xs uppercase tracking-widest hover:bg-brown transition-colors">
						{t.apartmentCard.viewDetail}
					</Link> */}
					<Link
						href={href}
						className="text-xs text-gold hover:underline"
					>
						{t.apartmentCard.viewDetail}
					</Link>
				</div>
			</div>
		</div>
	);
}
