export default function SectionLabel({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="mb-3 flex items-center gap-3.5">
			<span className="font-raleway text-xxs font-bold uppercase tracking-[3.5px] text-whiskey-dark">
				{children}
			</span>
			<div className="h-px w-10 bg-whiskey-dark/40" aria-hidden="true" />
		</div>
	);
}
