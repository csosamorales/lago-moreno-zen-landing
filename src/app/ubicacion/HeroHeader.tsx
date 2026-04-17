import Image from 'next/image';
import React from 'react';

export default function HeroHeader() {
	return (
		<div className="relative w-full overflow-hidden min-h-[80lvh] md:min-h-[50lvh]">
			{/* Background image */}
			<Image
				src="/hero-background/background-5.webp"
				alt="Vista panorámica de las montañas de Bariloche, Patagonia"
				className="absolute inset-0 h-full w-full object-cover object-center"
				fill
			/>

			{/* Dark overlay gradient */}
			<div
				className="absolute inset-0"
				style={{
					background:
						'linear-gradient(to bottom, rgba(20,14,8,0.45) 0%, rgba(20,14,8,0.25) 40%, rgba(20,14,8,0.38) 100%)',
				}}
				aria-hidden="true"
			/>

			{/* Centered hero content */}
			<div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
				{/* Location tag */}
				<p className="mb-4 font-raleway text-xxs text-whiskey font-bold uppercase tracking-[3.5px] sm:text-xs">
					Lago Moreno Zen &nbsp;·&nbsp; Bariloche, Patagonia
				</p>

				{/* Main heading */}
				<h1 className="font-raleway leading-[1.15] text-dawn-pink text-3xl md:text-6xl">
					<span className="font-light">Ubicación </span>
					<span className="font-bold">ideal</span>
					<br />
					<span className="font-light">para descubrir todo</span>
				</h1>

				{/* Subtitle */}
				<p className="mt-5 font-raleway text-xs font-light tracking-[0.5px] sm:text-sm text-dawn-pink/70">
					A 200 metros de la Playa del Viento &nbsp;·&nbsp; Av.
					Bustillo km 13
				</p>
			</div>
		</div>
	);
}
