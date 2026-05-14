'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { RiExpandDiagonalLine } from 'react-icons/ri';
import { Button } from './ui';
import { GrGallery } from 'react-icons/gr';

interface CarouselProps {
	slides: { src: string; label?: string }[];
	onImageClick?: (index: number) => void;
	onGalleryOpen?: () => void;
}

export default function Carousel({
	slides,
	onImageClick,
	onGalleryOpen,
}: CarouselProps) {
	const [current, setCurrent] = useState(0);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	const resetInterval = () => {
		if (intervalRef.current) clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			setCurrent((c) => (c + 1) % slides.length);
		}, 5000);
	};

	useEffect(() => {
		resetInterval();
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [slides.length]);

	const prev = () => {
		setCurrent((c) => (c - 1 + slides.length) % slides.length);
		resetInterval();
	};
	const next = () => {
		setCurrent((c) => (c + 1) % slides.length);
		resetInterval();
	};

	return (
		<div className="relative w-full h-[580px] max-w-7xl mx-auto bg-brown-dark overflow-hidden select-none">
			{/* Slide */}
			<div
				className="w-full h-full cursor-pointer"
				onClick={() => onImageClick?.(current)}
				title="Clic para ampliar"
			>
				<Image
					src={slides[current].src}
					alt={slides[current].label ?? ''}
					fill
					className="object-cover"
					priority={current === 0}
				/>
			</div>

			{/* Arrows */}
			<button
				onClick={prev}
				className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center transition-colors"
				aria-label="Anterior"
			>
				‹
			</button>
			<button
				onClick={next}
				className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center transition-colors"
				aria-label="Siguiente"
			>
				›
			</button>

			<div className="absolute bottom-6 flex flex-col px-4 gap-5 items-center  w-lvw">
				<div className="flex flex-row justify-between w-full">
					{/* Counter */}
					<div className="text-white/70 text-xs">
						{current + 1} / {slides.length}
					</div>
					<span className="text-white/50 text-xs uppercase flex flex-row gap-1 items-center font-bold">
						<RiExpandDiagonalLine size={16} />
						Clic para ampliar
					</span>
				</div>

				<div className="flex gap-2">
					{slides.map((_, i) => (
						<button
							key={i}
							onClick={() => setCurrent(i)}
							className={`w-2 h-2 transition-colors ${i === current ? 'bg-gold' : 'bg-white/40'}`}
							aria-label={`Ir a imagen ${i + 1}`}
						/>
					))}
				</div>

				{/* Hints */}
				<div className="flex gap-3 self-end">
					{onGalleryOpen && (
						<Button
							onClick={onGalleryOpen}
							className="text-xxs !py-2 !px-4"
							leftIcon={<GrGallery />}
						>
							Ver galería completa
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
