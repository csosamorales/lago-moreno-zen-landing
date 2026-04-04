interface DistanceRowProps {
	place: string;
	distance: string;
}

export default function DistanceRow({ place, distance }: DistanceRowProps) {
	return (
		<div className="flex items-center justify-between py-3 border-b border-beige-dark last:border-0">
			<span className="text-ink/80 text-sm">{place}</span>
			<span className="text-gold font-semibold text-sm">{distance}</span>
		</div>
	);
}
