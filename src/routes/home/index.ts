import { api } from '$lib/_api';
import type { RequestHandler } from './__types';
import type { Experience, ExperienceSAR, Project, Article, Contact } from '$lib/types';

export const get: RequestHandler = async () => {
	const expResponse = await api('get', `experience/`);
    const projResponse = await api('get', `projects/`);
    const artiResponse = await api('get', `articles/`);
    const contResponse = await api('get', `contact/`);
    

	if (expResponse.status === 200) {
		let experience: Experience[] = await expResponse.json();
        let projects: Project[] = await projResponse.json();
        let articles: Article[] = await artiResponse.json();
        let contacts: Contact[] = await contResponse.json();

		for(let i = 0; i < experience.length; i++) {
			experience[i].experience_sars = experience[i].experience_sars.sort((a: ExperienceSAR,b: ExperienceSAR)=>{return a.index - b.index;});
		}
		return {
			body: {
				experience,
                projects,
                articles,
                contacts
			}
		};
	}

	return {
		status: expResponse.status
	};
};