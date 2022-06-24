import { api } from './_api';
import type { RequestHandler } from './__types';
import type { Experience, ExperienceSAR } from '$lib/types';

export const get: RequestHandler = async () => {
	// locals.userid comes from src/hooks.js
	const response = await api('get', `experience/`);

	if (response.status === 200) {
		let experience: Experience[] = await response.json();
		for(let i = 0; i < experience.length; i++) {
			experience[i].experience_sars = experience[i].experience_sars.sort((a: ExperienceSAR,b: ExperienceSAR)=>{return a.index - b.index;});
		}
		return {
			body: {
				experience
			}
		};
	}

	return {
		status: response.status
	};
};