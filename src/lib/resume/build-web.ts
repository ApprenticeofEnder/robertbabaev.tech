import { assertWebCoverage, indexVariantEntries } from './merge-config';
import { resolveBulletsForEntry } from './resolve';
import type {
	RawResumeData,
	RawResumeEntry,
	ResumeData,
	ResumeEntry,
	VariantConfig,
	VariantEntry,
	WebOutputSection
} from './types';
import { WEB_OUTPUT_SECTIONS } from './types';

function toResumeEntry(
	entry: RawResumeEntry,
	webEntry: VariantEntry | undefined,
	context: string
): ResumeEntry {
	const { bullets: _bullets, timeframe: _timeframe, body: _body, ...rest } = entry;
	const result: ResumeEntry = { ...rest };

	if (webEntry?.bullets?.length) {
		result.bulletPoints = resolveBulletsForEntry(entry, 'web', webEntry.bullets, context);
	}

	return result;
}

function buildWebSection(
	section: Record<string, RawResumeEntry> | undefined,
	configById: Map<string, VariantEntry>,
	sectionName: WebOutputSection
): Record<string, ResumeEntry> {
	if (!section) {
		return {};
	}

	return Object.fromEntries(
		Object.entries(section).map(([entryId, entry]) => {
			const qualifiedId = `${sectionName}.${entryId}`;
			return [entryId, toResumeEntry(entry, configById.get(qualifiedId), qualifiedId)];
		})
	);
}

export function buildWebData(master: RawResumeData, config: VariantConfig): ResumeData {
	const configById = indexVariantEntries(config.entries);

	for (const sectionName of WEB_OUTPUT_SECTIONS) {
		assertWebCoverage(master[sectionName], sectionName, configById);
	}

	return {
		education: toResumeEntry(master.education, undefined, 'education'),
		experience: buildWebSection(master.experience, configById, 'experience'),
		projects: buildWebSection(master.projects, configById, 'projects'),
		hackathons: buildWebSection(master.hackathons, configById, 'hackathons'),
		volunteering: buildWebSection(master.volunteering, configById, 'volunteering')
	};
}
