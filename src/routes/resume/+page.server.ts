import { compileConfig } from '$lib/server/config';
import type { ResumeData } from '$lib/types';

export const load = async () => {
	const resumeData: ResumeData = await compileConfig<ResumeData>('config/resume_data.toml');

	return {
		resumeData
	};
};
