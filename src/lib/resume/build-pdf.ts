import { resolveBulletsForEntry } from './resolve';
import type {
	BulletChannel,
	MasterSection,
	PdfActivityEntry,
	PdfEntry,
	PdfResumeData,
	PdfVariant,
	RawResumeData,
	RawResumeEntry,
	VariantConfig,
	VariantEntry
} from './types';
import { MASTER_SECTIONS } from './types';

export function findMasterEntry(
	master: RawResumeData,
	qualifiedId: string
): { section: MasterSection; entryId: string; entry: RawResumeEntry } {
	const [section, ...rest] = qualifiedId.split('.');
	const entryId = rest.join('.');

	if (!section || !entryId || !MASTER_SECTIONS.includes(section as MasterSection)) {
		throw new Error(
			`Invalid entry id "${qualifiedId}". Expected format like "experience.deepcode-sec-swe".`
		);
	}

	const sectionData = master[section as keyof RawResumeData];
	if (!sectionData || typeof sectionData !== 'object' || Array.isArray(sectionData)) {
		throw new Error(`Master section "${section}" not found for entry "${qualifiedId}".`);
	}

	const entry = (sectionData as Record<string, RawResumeEntry>)[entryId];
	if (!entry) {
		throw new Error(`Master entry "${qualifiedId}" not found.`);
	}

	return { section: section as MasterSection, entryId, entry };
}

function formatDate(entry: RawResumeEntry, override?: string): string {
	if (typeof override === 'string') {
		return override;
	}

	const { start, end } = entry;
	if (start && end) {
		return `${start} - ${end}`;
	}

	return start ?? end ?? '';
}

function bulletChannelForVariant(variant: PdfVariant): BulletChannel {
	return variant;
}

function buildPdfEntry(
	entry: RawResumeEntry,
	override: VariantEntry,
	channel: BulletChannel,
	options: { includeLink: boolean }
): PdfEntry {
	const bulletIds = override.bullets ?? [];
	const pdfEntry: PdfEntry = {
		title: override.title ?? entry.title,
		description: override.description ?? entry.subtitle,
		date: formatDate(entry, override.date),
		location: override.location ?? entry.location,
		bulletPoints: bulletIds.length
			? resolveBulletsForEntry(entry, channel, bulletIds, override.id)
			: []
	};

	if (options.includeLink) {
		const link = override.link ?? entry.link;
		if (typeof link === 'string') {
			pdfEntry.link = link;
		}
	}

	return pdfEntry;
}

function buildActivityEntry(entry: RawResumeEntry, override: VariantEntry): PdfActivityEntry {
	return {
		title: override.title ?? entry.title,
		timeframe: override.timeframe ?? entry.timeframe ?? formatDate(entry, override.date),
		body: override.body ?? entry.body ?? ''
	};
}

export function buildPdfData(
	master: RawResumeData,
	config: VariantConfig,
	variant: PdfVariant
): PdfResumeData {
	const channel = bulletChannelForVariant(variant);
	const output: PdfResumeData = {
		header: config.header
	};

	if (config.skills) {
		output.skills = config.skills;
	}

	const experience: Record<string, PdfEntry> = {};
	const projects: Record<string, PdfEntry> = {};
	const activities: Record<string, PdfActivityEntry> = {};

	for (const variantEntry of config.entries) {
		const { section, entryId, entry } = findMasterEntry(master, variantEntry.id);

		if (variantEntry.output === 'experience') {
			if (section !== 'experience') {
				throw new Error(`Entry "${variantEntry.id}" cannot be placed in experience section.`);
			}
			experience[entryId] = buildPdfEntry(entry, variantEntry, channel, { includeLink: false });
		} else if (variantEntry.output === 'projects') {
			if (
				section !== 'projects' &&
				section !== 'hackathons' &&
				section !== 'volunteering'
			) {
				throw new Error(
					`Entry "${variantEntry.id}" cannot be placed in projects section from master section "${section}".`
				);
			}
			projects[entryId] = buildPdfEntry(entry, variantEntry, channel, { includeLink: true });
		} else if (variantEntry.output === 'activities') {
			if (section !== 'activities') {
				throw new Error(`Entry "${variantEntry.id}" cannot be placed in activities section.`);
			}
			activities[entryId] = buildActivityEntry(entry, variantEntry);
		} else {
			throw new Error(`Unknown output section "${variantEntry.output}".`);
		}
	}

	if (Object.keys(experience).length > 0) {
		output.experience = experience;
	}
	if (Object.keys(projects).length > 0) {
		output.projects = projects;
	}
	if (Object.keys(activities).length > 0) {
		output.activities = activities;
	}

	return output;
}

export function pdfDataToTomlRecord(data: PdfResumeData): Record<string, unknown> {
	return data as unknown as Record<string, unknown>;
}
