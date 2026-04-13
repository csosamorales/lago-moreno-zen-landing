interface AttractionCardProps {
	name: string;
	distance: string;
	description: string;
}

export default function AttractionCard({
	name,
	distance,
	description,
}: AttractionCardProps) {
	return (
		<div className="bg-beige p-5 group border-b-2 border-transparent hover:border-gold transition-colors">
			<div className="w-2 h-2 bg-gold mb-3" />
			<h4 className="font-semibold text-ink text-sm mb-1">{name}</h4>
			<span className="text-xxs uppercase tracking-widest text-gold font-bold">
				{distance}
			</span>
			<p className="text-ink/60 text-xs mt-2 leading-relaxed">
				{description}
			</p>
		</div>
	);
}
