'use client';
import { useFormik } from 'formik';
import { z } from 'zod';
import { FaWhatsapp } from 'react-icons/fa6';
import { Button } from '@/components/ui';
import { links } from '@/utils/links';
import type { Translations } from '@/i18n/types';

type ContactTranslations = Translations['apartmentDetail'];

const today = () => {
	const d = new Date();
	d.setHours(0, 0, 0, 0);
	return d;
};

const buildSchema = (t: ContactTranslations) =>
	z
		.object({
			email: z
				.string()
				.min(1, t.errorEmailRequired)
				.check(z.email({ error: t.errorEmailInvalid })),
			name: z.string().min(1, t.errorNameRequired),
			lastName: z.string().min(1, t.errorLastNameRequired),
			phone: z.string().optional(),
			guests: z
				.number({ error: t.errorGuestsRequired })
				.min(1, t.errorGuestsMin),
			checkIn: z.string().min(1, t.errorCheckInRequired),
			checkOut: z.string().min(1, t.errorCheckOutRequired),
			message: z.string().optional(),
		})
		.superRefine((data, ctx) => {
			if (data.checkIn) {
				const checkInDate = new Date(data.checkIn);
				if (checkInDate < today()) {
					ctx.addIssue({
						path: ['checkIn'],
						code: 'custom',
						message: t.errorCheckInPast,
					});
				}
			}
			if (data.checkIn && data.checkOut) {
				const checkInDate = new Date(data.checkIn);
				const checkOutDate = new Date(data.checkOut);
				if (checkOutDate <= checkInDate) {
					ctx.addIssue({
						path: ['checkOut'],
						code: 'custom',
						message: t.errorCheckOutBeforeCheckIn,
					});
				}
			}
		});

type FormValues = {
	email: string;
	name: string;
	lastName: string;
	phone: string;
	guests: number | '';
	checkIn: string;
	checkOut: string;
	message: string;
};

interface ContactFormProps {
	apartmentName: string;
	t: ContactTranslations;
}

export default function ContactForm({ apartmentName, t }: ContactFormProps) {
	const schema = buildSchema(t);

	const formik = useFormik<FormValues>({
		initialValues: {
			email: '',
			name: '',
			lastName: '',
			phone: '',
			guests: '',
			checkIn: '',
			checkOut: '',
			message: '',
		},
		validateOnChange: true,
		validate: (values) => {
			const result = schema.safeParse({
				...values,
				guests:
					values.guests === '' ? undefined : Number(values.guests),
			});
			if (result.success) return {};
			return result.error.issues.reduce<Record<string, string>>(
				(acc, issue) => {
					const key = issue.path[0] as string;
					if (!acc[key]) acc[key] = issue.message;
					return acc;
				},
				{},
			);
		},
		onSubmit: (values) => {
			const lines = [
				`Hola! Me interesa el departamento *${apartmentName}*`,
				``,
				`👤 *Nombre:* ${values.name} ${values.lastName}`,
				`📧 *Email:* ${values.email}`,
				...(values.phone ? [`📞 *Teléfono:* ${values.phone}`] : []),
				`👥 *Pasajeros:* ${values.guests}`,
				`📅 *Ingreso:* ${values.checkIn}`,
				`📅 *Salida:* ${values.checkOut}`,
				...(values.message ? [`💬 *Mensaje:* ${values.message}`] : []),
			];

			const text = encodeURIComponent(lines.join('\n'));
			window.open(`${links.whatsapp}?text=${text}`, '_blank');
		},
	});

	const inputClass = (field: keyof FormValues) =>
		`w-full bg-cream border px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-gold ${
			formik.touched[field] && formik.errors[field]
				? 'border-red-400'
				: 'border-beige-dark'
		}`;

	const gridInputClass = (field: keyof FormValues) =>
		`bg-cream border px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-gold w-full ${
			formik.touched[field] && formik.errors[field]
				? 'border-red-400'
				: 'border-beige-dark'
		}`;

	return (
		<form
			className="mt-4 space-y-3"
			onSubmit={formik.handleSubmit}
			noValidate
		>
			<div>
				<input
					type="email"
					id="email"
					placeholder={t.emailPlaceholder}
					className={inputClass('email')}
					{...formik.getFieldProps('email')}
				/>
				{formik.touched.email && formik.errors.email && (
					<p className="text-red-400 text-xs mt-1">
						{formik.errors.email}
					</p>
				)}
			</div>

			<div className="grid grid-cols-2 gap-3">
				<div>
					<input
						type="text"
						id="name"
						placeholder={t.namePlaceholder}
						className={gridInputClass('name')}
						{...formik.getFieldProps('name')}
					/>
					{formik.touched.name && formik.errors.name && (
						<p className="text-red-400 text-xs mt-1">
							{formik.errors.name}
						</p>
					)}
				</div>
				<div>
					<input
						type="text"
						id="lastName"
						placeholder={t.lastNamePlaceholder}
						className={gridInputClass('lastName')}
						{...formik.getFieldProps('lastName')}
					/>
					{formik.touched.lastName && formik.errors.lastName && (
						<p className="text-red-400 text-xs mt-1">
							{formik.errors.lastName}
						</p>
					)}
				</div>
			</div>

			<div>
				<input
					type="tel"
					id="phone"
					placeholder={t.phonePlaceholder}
					className={inputClass('phone')}
					{...formik.getFieldProps('phone')}
				/>
			</div>

			<div>
				<input
					type="number"
					id="guests"
					min={1}
					placeholder={t.guestsPlaceholder}
					className={inputClass('guests')}
					{...formik.getFieldProps('guests')}
				/>
				{formik.touched.guests && formik.errors.guests && (
					<p className="text-red-400 text-xs mt-1">
						{formik.errors.guests}
					</p>
				)}
			</div>

			<div className="grid grid-cols-2 gap-3">
				<div>
					<input
						type="date"
						id="checkIn"
						className={gridInputClass('checkIn')}
						value={formik.values.checkIn}
						onBlur={formik.handleBlur}
						onChange={(e) => {
							formik.setFieldValue('checkIn', e.target.value);
							formik.setFieldTouched('checkIn', true, false);
							if (formik.values.checkOut) {
								formik.setFieldTouched('checkOut', true, false);
							}
						}}
					/>
					{formik.touched.checkIn && formik.errors.checkIn && (
						<p className="text-red-400 text-xs mt-1">
							{formik.errors.checkIn}
						</p>
					)}
				</div>
				<div>
					<input
						type="date"
						id="checkOut"
						className={gridInputClass('checkOut')}
						value={formik.values.checkOut}
						onBlur={formik.handleBlur}
						onChange={(e) => {
							formik.setFieldValue('checkOut', e.target.value);
							formik.setFieldTouched('checkOut', true, false);
						}}
					/>
					{formik.touched.checkOut && formik.errors.checkOut && (
						<p className="text-red-400 text-xs mt-1">
							{formik.errors.checkOut}
						</p>
					)}
				</div>
			</div>

			<div>
				<textarea
					id="message"
					rows={3}
					placeholder={t.messagePlaceholder}
					className="w-full bg-cream border border-beige-dark px-3 py-2 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-gold resize-none"
					{...formik.getFieldProps('message')}
				/>
			</div>

			<Button
				type="submit"
				variant="outline"
				className="w-full"
				leftIcon={<FaWhatsapp size={24} />}
				loading={formik.isSubmitting}
			>
				{t.submitWhatsapp}
			</Button>
		</form>
	);
}
