export default function PhotoPlaceholder({
	label = 'Foto próximamente',
	className = '',
}: {
	label?: string;
	className?: string;
}) {
	return (
		<div
			className={`relative flex items-center justify-center overflow-hidden ${className}`}
			style={{
				background: 'linear-gradient(135deg, #c8b89a 0%, #8a7450 100%)',
			}}
		>
			<svg
				className="absolute bottom-0 left-0 w-full opacity-20"
				viewBox="0 0 800 200"
				preserveAspectRatio="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 200 L0 120 Q100 60 200 100 Q300 140 400 80 Q500 20 600 70 Q700 120 800 50 L800 200 Z"
					fill="#3e2c1c"
				/>
			</svg>
			<span className="relative z-10 uppercase tracking-widest text-xxs font-bold text-white/70">
				{label}
			</span>
		</div>
	);
}
