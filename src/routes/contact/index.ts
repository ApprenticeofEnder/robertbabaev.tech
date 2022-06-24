import { api } from '$lib/_api';
import type { RequestHandler } from './__types';
import type { Contact } from '$lib/types';

export const get: RequestHandler = async () => {
	const response = await api('get', `contact/`);

	if (response.status === 200) {
		let contacts: Contact[] = await response.json();
		return {
			body: {
				contacts
			}
		};
	}

	return {
		status: response.status
	};
};