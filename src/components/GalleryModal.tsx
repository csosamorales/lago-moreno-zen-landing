'use client';

import Image from 'next/image';

interface GalleryModalProps {
	slides: { src: string; label?: string }[];
	title: string;
	onClose: () => void;
	onImageClick: (index: number) => void;
}

export default function GalleryModal({
	slides,
	title,
	onClose,
	onImageClick,
}: GalleryModalProps) {
	return (
		<div
			className="fixed inset-0 z-40 flex items-center justify-center"
			style={{
				backgroundColor: 'rgba(20,12,4,0.6)',
				backdropFilter: 'blur(20px)',
			}}
			onClick={onClose}
		>
			<div
				className="bg-brown-dark max-w-4xl w-full mx-4 max-h-[86vh] flex flex-col"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Header */}
				<div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
					<h3 className="text-white font-medium tracking-wide text-sm">
						{title} · Galería completa
					</h3>
					<button
						onClick={onClose}
						className="text-white/60 hover:text-white text-2xl"
						aria-label="Cerrar"
					>
						×
					</button>
				</div>

				{/* Grid */}
				<div className="overflow-y-auto p-[3px]">
					<div className="grid grid-cols-3 gap-[3px]">
						{slides.map((s, i) => (
							<button
								key={i}
								className="relative aspect-[4/3] group overflow-hidden"
								onClick={() => {
									onClose();
									onImageClick(i);
								}}
							>
								<Image
									src={s.src}
									alt={s.label ?? ''}
									fill
									className="object-cover w-full h-full"
									priority={i === 0}
								/>

								<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
									<span className="text-white/0 group-hover:text-white/90 text-2xl transition-colors">
										⊕
									</span>
								</div>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
