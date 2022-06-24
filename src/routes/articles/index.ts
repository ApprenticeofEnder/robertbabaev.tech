import { api } from '$lib/_api';
import type { RequestHandler } from './__types';
import type { Article } from '$lib/types';

export const get: RequestHandler = async () => {
	const response = await api('get', `articles/`);

	if (response.status === 200) {
		let articles: Article[] = await response.json();
		return {
			body: {
				articles
			}
		};
	}

	return {
		status: response.status
	};
};