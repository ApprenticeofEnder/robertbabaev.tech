import toml from '@iarna/toml';
import { readFile } from 'fs/promises';
import { compile } from 'mdsvex';

import type { ResumeData, ResumeDataLoaded, ResumeEntry } from '$lib/types';

async function compileResumeEntry(data: ResumeEntry | undefined): Promise<ResumeEntry> {
	if (!data) {
		return { title: '', subtitle: '', location: '' };
	}

	const { bulletPoints, ...entry } = data;

	if (!bulletPoints) {
		return data;
	}

	const newBulletPoints = await Promise.all(
		bulletPoints.map(async (bulletPoint) => {
			const compileResponse = await compile(bulletPoint);
			return compileResponse.code;
		})
	);

	return {
		bulletPoints: newBulletPoints,
		...entry
	};
}

async function compileResumeEntries(
	data: Record<string, ResumeEntry> | undefined
): Promise<ResumeEntry[]> {
	const entryValues = Object.values(data ?? {});
	const result: ResumeEntry[] = await Promise.all(entryValues.map(compileResumeEntry));
	return result;
}

export const load = async () => {
	const tomlContent = await readFile('config/resume_data.toml', 'utf-8');
	const { experience, education, projects }: ResumeDataLoaded = toml.parse(tomlContent);

	const [parsedEducation, parsedExperience, parsedProjects] = await Promise.all([
		compileResumeEntry(education),
		compileResumeEntries(experience),
		compileResumeEntries(projects)
	]);

	const resumeData: ResumeData = {
		education: parsedEducation,
		experience: parsedExperience,
		projects: parsedProjects
	};

	return {
		resumeData
	};
};
