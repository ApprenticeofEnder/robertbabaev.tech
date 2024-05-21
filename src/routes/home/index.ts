import { parse } from 'yaml';
import type { RequestHandler } from './__types';
import type { ResumeData } from '$lib/types';

async function getResumeData(): Promise<Response> {
	return fetch(`/data/resume_data.yaml`, {
		method: 'get'
	});
}

export const get: RequestHandler = async () => {
	// let thingy = page.path;
	let yamlRes = await getResumeData();

	if (yamlRes.status !== 200) {
		return {
			status: yamlRes.status
		};
	}

	let yamlText = await yamlRes.text();
	let resumeData: ResumeData = parse(yamlText);

	return {
		body: {
			basic: resumeData.basic,
			experience: resumeData.experience,
			projects: resumeData.projects
		}
	};
};
