import { api } from '$lib/_api';
import type { RequestHandler } from './__types';
import type { Project } from '$lib/types';

export const get: RequestHandler = async () => {
	const response = await api('get', `projects/`);

	if (response.status === 200) {
		let projects: Project[] = await response.json();
		return {
			body: {
				projects
			}
		};
	}

	return {
		status: response.status
	};
};