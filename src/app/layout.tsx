import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-raleway',
});

export const metadata: Metadata = {
	title: 'Lago Moreno Zen – Departamentos en Bariloche',
	description:
		'Alquileres vacacionales a 200m del Lago Moreno, Bariloche, Argentina.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es" className={raleway.variable}>
			<body className="font-raleway bg-cream text-ink antialiased">
				{children}
			</body>
		</html>
	);
}
