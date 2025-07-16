import { compileConfig } from '$lib/server';
import type { ContactLinks } from '$lib/types';

export const load = async () => {
	const contactLinks: ContactLinks = await compileConfig<ContactLinks>('config/contact.toml');

	return {
		contactLinks,
		title: 'Contact Me',
		description: "Robert Babaev's Contact page."
	};
};
