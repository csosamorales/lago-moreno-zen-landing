'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
	// '/hero-background/background-2.webp',
	// '/hero-background/background-3.webp',
	// '/hero-background/background-4.webp',
	'/hero-background/background-5.webp',
];

const INTERVAL_MS = 5000;
const TRANSITION_MS = 500;

export default function HeroSlider() {
	const [current, setCurrent] = useState(0);
	const [fading, setFading] = useState(false);

	// useEffect(() => {
	// 	const timer = setInterval(() => {
	// 		setFading(true);
	// 		setTimeout(() => {
	// 			setCurrent((prev) => (prev + 1) % images.length);
	// 			setFading(false);
	// 		}, TRANSITION_MS);
	// 	}, INTERVAL_MS);

	// 	return () => clearInterval(timer);
	// }, []);

	return (
		<div className="absolute inset-0 overflow-hidden">
			{images.map((src, index) => (
				<Image
					key={src}
					src={src}
					alt=""
					fill
					priority={index === 0}
					className="object-cover transition-opacity duration-1000"
					style={{
						opacity: index === current ? (fading ? 0 : 1) : 0,
					}}
				/>
			))}
			<div className="absolute inset-0 backdrop-blur-sm" />
		</div>
	);
}
