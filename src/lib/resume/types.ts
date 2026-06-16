import type { ResumeData, ResumeEntry } from '$lib/types';

export type { ResumeData, ResumeEntry };

export type BulletChannel = 'dev' | 'devops' | 'security' | 'default';

export type PdfVariant = 'dev' | 'devops' | 'security';

export type BulletVariants = Partial<Record<BulletChannel, string>>;
export type BulletsTable = Record<string, BulletVariants>;

export interface RawResumeEntry extends Omit<ResumeEntry, 'bulletPoints'> {
	bullets?: BulletsTable;
	timeframe?: string;
	body?: string;
}

export interface RawResumeData {
	education: RawResumeEntry;
	experience: Record<string, RawResumeEntry>;
	projects: Record<string, RawResumeEntry>;
	hackathons: Record<string, RawResumeEntry>;
	volunteering: Record<string, RawResumeEntry>;
	activities?: Record<string, RawResumeEntry>;
}

export type PdfOutputSection = 'experience' | 'projects' | 'activities';

export type WebOutputSection = 'experience' | 'projects' | 'hackathons' | 'volunteering';

export type OutputSection = PdfOutputSection | WebOutputSection;

export interface VariantEntry {
	id: string;
	output: OutputSection;
	bullets?: string[];
	title?: string;
	description?: string;
	date?: string;
	location?: string;
	link?: string;
	timeframe?: string;
	body?: string;
}

export interface VariantSkills {
	software?: string[];
	programming?: {
		comfortable?: string[];
		intermediate?: string[];
		beginner?: string[];
	};
}

export interface VariantConfig {
	header: string[];
	skills?: VariantSkills;
	entries: VariantEntry[];
}

export interface PdfEntry {
	title: string;
	description: string;
	date: string;
	location: string;
	bulletPoints: string[];
	link?: string;
}

export interface PdfActivityEntry {
	title: string;
	timeframe: string;
	body: string;
}

export interface PdfResumeData {
	header: string[];
	skills?: VariantSkills;
	experience?: Record<string, PdfEntry>;
	projects?: Record<string, PdfEntry>;
	activities?: Record<string, PdfActivityEntry>;
}

export const MASTER_SECTIONS = [
	'experience',
	'projects',
	'hackathons',
	'volunteering',
	'activities'
] as const;

export type MasterSection = (typeof MASTER_SECTIONS)[number];

export const PDF_OUTPUT_SECTIONS = ['experience', 'projects', 'activities'] as const;

export const WEB_OUTPUT_SECTIONS = [
	'experience',
	'projects',
	'hackathons',
	'volunteering'
] as const;

export const PDF_PROJECT_SOURCE_SECTIONS = ['projects', 'hackathons', 'volunteering'] as const;
