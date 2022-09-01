import { api } from '$lib/_api';
import type { RequestHandler } from './__types';
import type { Experience, ExperienceSAR, Project, Article, Contact } from '$lib/types';
import { demoArticles, demoContact, demoExperience, demoProjects } from '$lib/devAids';

function sortExperience(a: Experience, b: Experience){
	let dateA = new Date(a.start_date);
	let dateB = new Date(b.start_date);
	return dateA.getTime() - dateB.getTime();
}

function sortExperienceSAR(a: ExperienceSAR,b: ExperienceSAR){
	return a.index - b.index;
}

export const get: RequestHandler = async () => {
	// Default to using dev values
	let experience: Experience[] = demoExperience;
	let projects: Project[] = demoProjects;
	let articles: Article[] = demoArticles;
	let contacts: Contact[] = demoContact;

	try {
		const expResponse = await api('get', `experience/`);
		const projResponse = await api('get', `projects/`);
		const artiResponse = await api('get', `articles/`);
		const contResponse = await api('get', `contact/`);

		if (expResponse.status !== 200) {
			return {
				status: expResponse.status
			};
		}

		experience = await expResponse.json();
		projects = await projResponse.json();
		articles = await artiResponse.json();
		contacts = await contResponse.json();
	}
	catch {
		if (process.env.SITE_ENV !== 'dev') {
			return {
				status: 502
			};
		}
	}
	finally {
		for(let i = 0; i < experience.length; i++) {
			experience[i].experience_sars = experience[i].experience_sars.sort(sortExperienceSAR);
		}
		experience = experience.sort(sortExperience).reverse();
		return {
			body: {
				experience,
				projects,
				articles,
				contacts
			}
		};
	}
};