import { Button } from '@/components/ui';
import { links } from '@/utils/links';

export default function CTA() {
	return (
		<div className="flex flex-col gap-7 py-20 px-8 items-center">
			<p className="text-oil text-2xl md:text-4xl font-raleway font-light tracking-wider">
				¿Tenés alguna consulta sobre cómo llegar?
			</p>
			<p className="text-oil text-xs md:text-sm font-normal max-w-[27rem]">
				Contactanos por WhatsApp y te ayudamos a coordinar tu llegada,
				el traslado desde el aeropuerto o cualquier duda logística.
			</p>

			<Button>
				<a
					href={links.whatsappCta}
					target="_blank"
					rel="noopener noreferrer"
				>
					Consultar por WhatsApp
				</a>
			</Button>
		</div>
	);
}
