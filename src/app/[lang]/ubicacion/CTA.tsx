'use client';
import { Button } from '@/components/ui';
import { links } from '@/utils/links';
import { useLanguage } from '@/context/LanguageContext';

export default function CTA() {
	const { t } = useLanguage();
	const c = t.location.cta;

	return (
		<div className="flex flex-col gap-7 py-20 px-8 items-center">
			<p className="text-oil text-2xl md:text-4xl font-raleway font-light tracking-wider">{c.heading}</p>
			<p className="text-oil text-xs md:text-sm font-normal max-w-[27rem]">{c.body}</p>
			<Button>
				<a href={links.whatsappCta} target="_blank" rel="noopener noreferrer">
					{c.button}
				</a>
			</Button>
		</div>
	);
}
