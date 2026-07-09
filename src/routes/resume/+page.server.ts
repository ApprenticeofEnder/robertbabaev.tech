import { readFile } from 'node:fs/promises';
import path from 'node:path';
import toml from 'smol-toml';

import { buildWebData } from '$lib/resume/build-web';
import { parseWebVariantConfig } from '$lib/resume/merge-config';
import type { RawResumeData } from '$lib/resume/types';
import { compileConfig } from '$lib/server/config';

export const load = async () => {
	const rawResumeData = await compileConfig<RawResumeData>('config/resume_data.toml');
	const webConfigSource = toml.parse(
		await readFile(path.join('config/resume_variants/web.toml'), 'utf-8')
	) as Record<string, unknown>;
	const webConfig = parseWebVariantConfig(webConfigSource);
	const resumeData = buildWebData(rawResumeData, webConfig);

	return {
		resumeData,
		title: 'Resume',
		description: "Robert Babaev's Resume page."
	};
};
