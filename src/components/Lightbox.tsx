'use client';
import { useEffect } from 'react';
import Image from 'next/image';

interface LightboxProps {
	slides: { src: string; label?: string }[];
	index: number;
	onClose: () => void;
	onNavigate: (index: number) => void;
}

export default function Lightbox({
	slides,
	index,
	onClose,
	onNavigate,
}: LightboxProps) {
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
			if (e.key === 'ArrowLeft')
				onNavigate((index - 1 + slides.length) % slides.length);
			if (e.key === 'ArrowRight') onNavigate((index + 1) % slides.length);
		};
		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	}, [index, slides.length, onClose, onNavigate]);

	return (
		<div
			className="fixed inset-0 z-50 flex flex-col"
			style={{ backgroundColor: 'rgba(20,12,4,0.96)' }}
			onClick={onClose}
		>
			{/* Top bar */}
			<div
				className="flex items-center justify-between px-6 py-3 text-white/70 text-sm"
				onClick={(e) => e.stopPropagation()}
			>
				<span>
					{index + 1} / {slides.length}
				</span>
				<button
					onClick={onClose}
					className="text-white hover:text-gold text-2xl leading-none"
					aria-label="Cerrar"
				>
					×
				</button>
			</div>

			{/* Main image */}
			<div
				className="flex-1 flex items-center justify-center px-16 relative"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={() =>
						onNavigate((index - 1 + slides.length) % slides.length)
					}
					className="absolute left-4 text-white/60 hover:text-white text-4xl"
					aria-label="Anterior"
				>
					‹
				</button>
				<div className="w-full max-w-4xl h-[60vh]">
					<Image
						src={slides[index].src}
						alt={slides[index].label ?? ''}
						fill
						className="object-cover w-full h-full"
						priority={index === 0}
					/>
				</div>
				<button
					onClick={() => onNavigate((index + 1) % slides.length)}
					className="absolute right-4 text-white/60 hover:text-white text-4xl"
					aria-label="Siguiente"
				>
					›
				</button>
			</div>

			{/* Caption + thumbnails */}
			<div className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
				<p className="text-white/60 text-xs text-center mb-3">
					{slides[index]?.label ?? ''}
				</p>
				<div className="flex gap-2 justify-center overflow-x-auto">
					{slides.map((s, i) => (
						<button
							key={i}
							onClick={() => onNavigate(i)}
							className={`flex-shrink-0 w-16 h-12 border-2 transition-colors ${i === index ? 'border-gold' : 'border-transparent'}`}
						>
							<Image
								src={s.src}
								alt={s.label ?? ''}
								className="w-full h-full"
								width={60}
								height={40}
							/>
							{/* <PhotoPlaceholder
								className="w-full h-full"
								label=""
							/> */}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
