import { describe, expect, test } from 'vitest';

import { buildPdfData } from './build-pdf';
import type { RawResumeData, VariantConfig } from './types';

const master: RawResumeData = {
	education: { title: 'School', subtitle: 'Degree', location: 'City' },
	experience: {
		'deepcode-sec-swe': {
			title: 'Security Software Engineer',
			subtitle: 'DeepCode',
			location: 'Ottawa, ON',
			start: '02/2025',
			end: '05/2025',
			bullets: {
				ingestion: { default: 'Ingestion bullet.' },
				pipeline: { default: 'Pipeline bullet.' }
			}
		}
	},
	projects: {},
	hackathons: {
		'ai-tinkerers-2025': {
			title: 'AI Tinkerers Ottawa 2025',
			subtitle: 'FastCTX',
			location: 'AI Software Engineer',
			start: '07/2025 (1 Day)',
			bullets: {
				'neo4j-backend': { default: 'Neo4j bullet.' }
			}
		}
	},
	volunteering: {},
	activities: {
		'ai-tinkerers-2025': {
			title: 'AI Tinkerers 2025',
			subtitle: '',
			location: '',
			timeframe: '07/2025 (1 Day)',
			body: 'Won an award.'
		}
	}
};

describe('buildPdfData', () => {
	test('groups flat entries into pdf sections', () => {
		const config: VariantConfig = {
			header: ['Security Engineer'],
			skills: {
				software: ['AWS']
			},
			entries: [
				{
					id: 'experience.deepcode-sec-swe',
					output: 'experience',
					bullets: ['ingestion', 'pipeline']
				},
				{
					id: 'hackathons.ai-tinkerers-2025',
					output: 'projects',
					title: 'AI Software Engineer',
					description: 'FastCTX - AI Tinkerers 2025',
					bullets: ['neo4j-backend'],
					link: 'https://devpost.com/software/fastctx',
					location: 'devpost.com/software/fastctx'
				},
				{ id: 'activities.ai-tinkerers-2025', output: 'activities' }
			]
		};

		const pdf = buildPdfData(master, config, 'security');

		expect(pdf.header).toEqual(['Security Engineer']);
		expect(pdf.experience?.['deepcode-sec-swe'].bulletPoints).toEqual([
			'Ingestion bullet.',
			'Pipeline bullet.'
		]);
		expect(pdf.projects?.['ai-tinkerers-2025'].link).toBe('https://devpost.com/software/fastctx');
		expect(pdf.activities?.['ai-tinkerers-2025'].body).toBe('Won an award.');
	});

	test('rejects experience entries in projects output', () => {
		const config: VariantConfig = {
			header: ['Security Engineer'],
			entries: [
				{
					id: 'experience.deepcode-sec-swe',
					output: 'projects',
					bullets: ['ingestion']
				}
			]
		};

		expect(() => buildPdfData(master, config, 'security')).toThrow(
			'cannot be placed in projects section'
		);
	});
});
