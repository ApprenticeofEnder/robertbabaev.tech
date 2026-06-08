import { describe, expect, test } from 'vitest';

import {
	mergeVariantConfig,
	parsePdfVariantConfig,
	parseWebVariantConfig
} from './merge-config';
import type { VariantConfig } from './types';

describe('mergeVariantConfig', () => {
	test('appends entries and deep-merges skills', () => {
		const base: VariantConfig = {
			header: [],
			skills: {
				programming: {
					comfortable: ['Python (7yrs)'],
					intermediate: ['Rust (3yrs)']
				}
			},
			entries: [{ id: 'activities.ai-tinkerers-2025', output: 'activities' }]
		};

		const variant: VariantConfig = {
			header: ['DevOps Engineer'],
			skills: {
				software: ['AWS', 'Docker'],
				programming: {
					beginner: ['Go (3mos)']
				}
			},
			entries: [{ id: 'experience.deepcode-sec-swe', output: 'experience', bullets: ['ingestion'] }]
		};

		const merged = mergeVariantConfig(base, variant);

		expect(merged.header).toEqual(['DevOps Engineer']);
		expect(merged.entries).toHaveLength(2);
		expect(merged.skills?.software).toEqual(['AWS', 'Docker']);
		expect(merged.skills?.programming?.comfortable).toEqual(['Python (7yrs)']);
		expect(merged.skills?.programming?.beginner).toEqual(['Go (3mos)']);
	});
});

describe('parsePdfVariantConfig', () => {
	test('rejects incompatible output sections', () => {
		expect(() =>
			parsePdfVariantConfig({
				entries: [{ id: 'experience.deepcode-sec-swe', output: 'projects', bullets: ['a'] }]
			})
		).toThrow('incompatible with master section');
	});

	test('allows hackathon entries in projects output', () => {
		const config = parsePdfVariantConfig({
			entries: [{ id: 'hackathons.ai-tinkerers-2025', output: 'projects', bullets: ['neo4j-backend'] }]
		});

		expect(config.entries[0].output).toBe('projects');
	});
});

describe('parseWebVariantConfig', () => {
	test('rejects mismatched web output sections', () => {
		expect(() =>
			parseWebVariantConfig({
				entries: [{ id: 'experience.deepcode-sec-swe', output: 'projects', bullets: ['a'] }]
			})
		).toThrow('incompatible with master section');
	});
});
