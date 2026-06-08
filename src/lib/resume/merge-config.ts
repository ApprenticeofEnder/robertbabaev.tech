import type {
	OutputSection,
	PdfOutputSection,
	VariantConfig,
	VariantEntry,
	WebOutputSection
} from './types';
import { MASTER_SECTIONS } from './types';

function isPlainObject(value: unknown): value is Record<string, unknown> {
	return !!value && typeof value === 'object' && !Array.isArray(value);
}

function deepMergeRecords(
	base: Record<string, unknown>,
	variant: Record<string, unknown>
): Record<string, unknown> {
	const result = { ...base };

	for (const [key, value] of Object.entries(variant)) {
		if (value === undefined) {
			continue;
		}

		const existing = result[key];
		if (isPlainObject(existing) && isPlainObject(value)) {
			result[key] = deepMergeRecords(existing, value);
		} else {
			result[key] = value;
		}
	}

	return result;
}

function masterSectionFromId(id: string): string {
	const [section] = id.split('.');
	if (!section || !MASTER_SECTIONS.includes(section as (typeof MASTER_SECTIONS)[number])) {
		throw new Error(
			`Invalid entry id "${id}". Expected format like "experience.deepcode-sec-swe".`
		);
	}

	return section;
}

function parseEntry(
	entry: unknown,
	label: string,
	allowedOutputs: readonly OutputSection[]
): VariantEntry {
	if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
		throw new Error(`${label} entry must be an object.`);
	}

	const record = entry as Record<string, unknown>;
	const id = record.id;
	const output = record.output;

	if (typeof id !== 'string' || !id.includes('.')) {
		throw new Error(`${label} entry is missing a valid dotted id.`);
	}

	if (typeof output !== 'string' || !allowedOutputs.includes(output as OutputSection)) {
		throw new Error(
			`${label} entry "${id}" has invalid output "${String(output)}". Allowed: ${allowedOutputs.join(', ')}.`
		);
	}

	const masterSection = masterSectionFromId(id);
	const pdfProjectSource =
		output === 'projects' && ['projects', 'hackathons', 'volunteering'].includes(masterSection);
	const directMatch = output === masterSection;

	if (!directMatch && !pdfProjectSource) {
		throw new Error(
			`${label} entry "${id}" output "${output}" is incompatible with master section "${masterSection}".`
		);
	}

	if (record.bullets !== undefined) {
		if (
			!Array.isArray(record.bullets) ||
			!record.bullets.every((bullet) => typeof bullet === 'string')
		) {
			throw new Error(`${label} entry "${id}" bullets must be an array of strings.`);
		}
	}

	return {
		id,
		output: output as OutputSection,
		bullets: record.bullets as string[] | undefined,
		title: record.title as string | undefined,
		description: record.description as string | undefined,
		date: record.date as string | undefined,
		location: record.location as string | undefined,
		link: record.link as string | undefined,
		timeframe: record.timeframe as string | undefined,
		body: record.body as string | undefined
	};
}

export interface ParseVariantConfigOptions {
	label: string;
	allowedOutputs: readonly OutputSection[];
}

export function parseVariantConfig(
	parsed: Record<string, unknown>,
	options: ParseVariantConfigOptions
): VariantConfig {
	const entries = Array.isArray(parsed.entries)
		? parsed.entries.map((entry) => parseEntry(entry, options.label, options.allowedOutputs))
		: [];
	const header = Array.isArray(parsed.header)
		? parsed.header.filter((item): item is string => typeof item === 'string')
		: [];

	return {
		header,
		skills: parsed.skills as VariantConfig['skills'],
		entries
	};
}

export function parsePdfVariantConfig(parsed: Record<string, unknown>): VariantConfig {
	return parseVariantConfig(parsed, {
		label: 'PDF variant',
		allowedOutputs: ['experience', 'projects', 'activities']
	});
}

export function parseWebVariantConfig(parsed: Record<string, unknown>): VariantConfig {
	return parseVariantConfig(parsed, {
		label: 'Web variant',
		allowedOutputs: ['experience', 'projects', 'hackathons', 'volunteering']
	});
}

export function mergeVariantConfig(base: VariantConfig, variant: VariantConfig): VariantConfig {
	const mergedSkills =
		base.skills || variant.skills
			? (deepMergeRecords(
					(base.skills ?? {}) as Record<string, unknown>,
					(variant.skills ?? {}) as Record<string, unknown>
				) as VariantConfig['skills'])
			: undefined;

	return {
		header: variant.header,
		skills: mergedSkills,
		entries: [...base.entries, ...variant.entries]
	};
}

export function indexVariantEntries(entries: VariantEntry[]): Map<string, VariantEntry> {
	return new Map(entries.map((entry) => [entry.id, entry]));
}

export function assertWebCoverage(
	section: Record<string, import('./types').RawResumeEntry> | undefined,
	sectionName: WebOutputSection,
	configById: Map<string, VariantEntry>
): void {
	if (!section) {
		return;
	}

	for (const [entryId, entry] of Object.entries(section)) {
		const qualifiedId = `${sectionName}.${entryId}`;
		if (!entry.bullets) {
			continue;
		}

		const webEntry = configById.get(qualifiedId);
		if (!webEntry?.bullets?.length) {
			throw new Error(
				`Entry "${qualifiedId}" has bullets but no web variant config entry with bullets.`
			);
		}

		if (webEntry.output !== sectionName) {
			throw new Error(
				`Web variant entry "${qualifiedId}" output "${webEntry.output}" must be "${sectionName}".`
			);
		}
	}
}

export type { PdfOutputSection, WebOutputSection };
