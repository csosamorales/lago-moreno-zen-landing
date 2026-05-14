export interface Amenity {
	group: string;
	icon: string;
	items: string[];
}

export interface Apartment {
	slug: string;
	name: string;
	badge: string;
	description: string[];
	specs: { guests: number; beds: number; baths: number };
	amenities: Amenity[];
	images: { label: string }[];
	takenDates?: string[];
}

export const apartments: Apartment[] = [
	{
		slug: 'zen-i',
		name: 'ZEN I',
		badge: 'Departamento premium',
		description: [
			'ZEN I es nuestro departamento más querido: amplio, luminoso y completamente orientado a disfrutar de las vistas al lago y los cerros. Con capacidad para 5 personas, es ideal para familias o grupos de amigos.',
			'El living comedor cuenta con un gran ventanal panorámico que enmarca el paisaje patagónico. La cocina está completamente equipada con todo lo necesario para preparar desde un desayuno hasta una cena especial.',
			'A pocos pasos encontrarás la Playa del Viento sobre el Lago Moreno, perfecta para nadar, practicar kayak o simplemente contemplar el atardecer entre montañas.',
		],
		specs: { guests: 5, beds: 1, baths: 1 },
		amenities: [
			{
				group: 'General',
				icon: '◈',
				items: [
					'WiFi de alta velocidad',
					'Calefacción central',
					'Ropa de cama incluida',
					'Toallas incluidas',
				],
			},
			{
				group: 'Cocina',
				icon: '◈',
				items: [
					'Heladera',
					'Microondas',
					'Cafetera',
					'Utensilios completos',
					'Vajilla',
				],
			},
			{
				group: 'Habitación',
				icon: '◈',
				items: [
					'Cama matrimonial',
					'Almohadas extra',
					'Placard amplio',
				],
			},
			{
				group: 'Baño',
				icon: '◈',
				items: ['Ducha con agua caliente', 'Artículos de tocador'],
			},
			{
				group: 'Living',
				icon: '◈',
				items: [
					'Sillones cómodos',
					'Mesa de comedor',
					'Ventanal panorámico',
				],
			},
			{
				group: 'Entretenimiento',
				icon: '◈',
				items: ['TV LED 40"', 'Netflix disponible', 'Conexión HDMI'],
			},
		],
		images: [
			{ label: 'Sala de estar' },
			{ label: 'Dormitorio' },
			{ label: 'Cocina' },
			{ label: 'Baño' },
			{ label: 'Vista desde la ventana' },
			{ label: 'Exterior' },
		],
		takenDates: ['2025-04-10', '2025-04-11', '2025-04-12', '2025-04-20'],
	},
	{
		slug: 'zen-ii',
		name: 'ZEN II',
		badge: 'Departamento',
		description: [
			'ZEN II combina calidez y funcionalidad en un espacio pensado para parejas o familias pequeñas. Con acceso directo al jardín, invita a desayunar al aire libre rodeados de vegetación nativa.',
			'El departamento cuenta con una cocina totalmente equipada y un living acogedor con calefacción a gas. La habitación es amplia y tiene buena ventilación natural.',
		],
		specs: { guests: 4, beds: 1, baths: 1 },
		amenities: [
			{
				group: 'General',
				icon: '◈',
				items: ['WiFi', 'Calefacción a gas', 'Ropa de cama'],
			},
			{
				group: 'Cocina',
				icon: '◈',
				items: ['Heladera', 'Cocina a gas', 'Vajilla', 'Utensilios'],
			},
			{
				group: 'Habitación',
				icon: '◈',
				items: ['Cama doble', 'Placard'],
			},
			{
				group: 'Baño',
				icon: '◈',
				items: ['Ducha caliente', 'Espejo amplio'],
			},
			{ group: 'Living', icon: '◈', items: ['Sofá', 'Mesa ratona'] },
			{
				group: 'Entretenimiento',
				icon: '◈',
				items: ['TV LED', 'Jardín privado'],
			},
		],
		images: [
			{ label: 'Living' },
			{ label: 'Dormitorio' },
			{ label: 'Jardín' },
			{ label: 'Cocina' },
		],
		takenDates: [],
	},
	{
		slug: 'zen-iii',
		name: 'ZEN III',
		badge: 'Departamento',
		description: [
			'ZEN III destaca por su terraza privada con vista al bosque nativo. Es el lugar perfecto para quienes buscan un escape tranquilo en la naturaleza, sin renunciar a las comodidades del hogar.',
		],
		specs: { guests: 4, beds: 1, baths: 1 },
		amenities: [
			{
				group: 'General',
				icon: '◈',
				items: ['WiFi', 'Calefacción', 'Ropa de cama'],
			},
			{ group: 'Cocina', icon: '◈', items: ['Equipada completa'] },
			{ group: 'Habitación', icon: '◈', items: ['Cama doble'] },
			{ group: 'Baño', icon: '◈', items: ['Ducha'] },
			{ group: 'Living', icon: '◈', items: ['Sofá', 'Mesa'] },
			{
				group: 'Entretenimiento',
				icon: '◈',
				items: ['TV', 'Terraza con vista al bosque'],
			},
		],
		images: [
			{ label: 'Terraza' },
			{ label: 'Living' },
			{ label: 'Dormitorio' },
			{ label: 'Vista al bosque' },
		],
		takenDates: [],
	},
	{
		slug: 'mono-zen',
		name: 'MONO ZEN',
		badge: 'Monoambiente',
		description: [
			'MONO ZEN es nuestro monoambiente de diseño: compacto pero con todo lo necesario para una estadía perfecta. Su estética moderna y cálida lo convierte en el favorito de las parejas.',
			'Cuenta con una zona lounge separada visualmente de la cama, cocina integrada y baño renovado. Un espacio pequeño pero completo.',
		],
		specs: { guests: 2, beds: 1, baths: 1 },
		amenities: [
			{
				group: 'General',
				icon: '◈',
				items: ['WiFi', 'Calefacción', 'Ropa de cama'],
			},
			{
				group: 'Cocina',
				icon: '◈',
				items: ['Cocina integrada', 'Microondas', 'Cafetera'],
			},
			{ group: 'Habitación', icon: '◈', items: ['Cama matrimonial'] },
			{ group: 'Baño', icon: '◈', items: ['Ducha renovada'] },
			{ group: 'Living', icon: '◈', items: ['Zona lounge'] },
			{
				group: 'Entretenimiento',
				icon: '◈',
				items: ['TV LED', 'Netflix'],
			},
		],
		images: [
			{ label: 'Ambiente principal' },
			{ label: 'Cocina' },
			{ label: 'Baño' },
			{ label: 'Vista exterior' },
		],
		takenDates: [],
	},
	// {
	//   slug: 'zen-iv',
	//   name: 'ZEN IV',
	//   badge: 'Departamento superior',
	//   description: [
	//     'ZEN IV es nuestra joya: el departamento más grande y completo del complejo. Con dos habitaciones, dos baños y una terraza panorámica que ofrece una vista privilegiada al lago y los cerros nevados.',
	//     'Diseñado para grupos grandes o familias que no quieren sacrificar comodidad. El living es espacioso, la cocina está totalmente equipada y el equipamiento general es de primer nivel.',
	//   ],
	//   specs: { guests: 6, beds: 2, baths: 2 },
	//   amenities: [
	//     { group: 'General', icon: '◈', items: ['WiFi', 'Calefacción central', 'Ropa de cama premium', 'Toallas'] },
	//     { group: 'Cocina', icon: '◈', items: ['Heladera grande', 'Microondas', 'Horno', 'Vajilla completa'] },
	//     { group: 'Habitación', icon: '◈', items: ['2 habitaciones', 'Cama matrimonial + twin', 'Placards amplios'] },
	//     { group: 'Baño', icon: '◈', items: ['2 baños completos', 'Agua caliente garantizada'] },
	//     { group: 'Living', icon: '◈', items: ['Living amplio', 'Terraza panorámica', 'Mesa de comedor grande'] },
	//     { group: 'Entretenimiento', icon: '◈', items: ['TV LED 50"', 'Netflix', 'Parlante bluetooth'] },
	//   ],
	//   images: [
	//     { label: 'Terraza panorámica' }, { label: 'Living' }, { label: 'Habitación principal' },
	//     { label: 'Habitación secundaria' }, { label: 'Cocina' }, { label: 'Vista al lago' },
	//   ],
	//   takenDates: [],
	// },
];

export function getApartment(slug: string) {
	return apartments.find((a) => a.slug === slug);
}
