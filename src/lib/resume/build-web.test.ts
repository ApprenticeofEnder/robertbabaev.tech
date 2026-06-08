import { describe, expect, test } from 'vitest';

import { buildWebData } from './build-web';
import type { RawResumeData, VariantConfig } from './types';

describe('buildWebData', () => {
	test('derives website bulletPoints from web variant config', () => {
		const master: RawResumeData = {
			education: {
				title: 'Carleton University',
				subtitle: 'BCS',
				location: 'Ottawa, ON'
			},
			experience: {
				'deepcode-sec-swe': {
					title: 'Security Software Engineer',
					subtitle: 'DeepCode',
					location: 'Ottawa, ON',
					start: '02/2025',
					end: '05/2025',
					bullets: {
						ingestion: {
							default: 'Optimized ingestion using *Python*.',
							devops: 'Operated ingestion using *Python*.'
						},
						pipeline: {
							web: 'Built a pipeline using *MQTT*.'
						}
					}
				}
			},
			projects: {},
			hackathons: {},
			volunteering: {}
		};

		const config: VariantConfig = {
			header: [],
			entries: [
				{
					id: 'experience.deepcode-sec-swe',
					output: 'experience',
					bullets: ['ingestion', 'pipeline']
				}
			]
		};

		const result = buildWebData(master, config);

		expect(result.experience['deepcode-sec-swe'].bulletPoints).toEqual([
			'Optimized ingestion using *Python*.',
			'Built a pipeline using *MQTT*.'
		]);
		expect(result.experience['deepcode-sec-swe']).not.toHaveProperty('bullets');
	});

	test('throws when bullets exist without web config entry', () => {
		const master: RawResumeData = {
			education: { title: 'School', subtitle: 'Degree', location: 'City' },
			experience: {
				'bad-entry': {
					title: 'Role',
					subtitle: 'Company',
					location: 'City',
					bullets: {
						a: { web: 'Text.' }
					}
				}
			},
			projects: {},
			hackathons: {},
			volunteering: {}
		};

		expect(() => buildWebData(master, { header: [], entries: [] })).toThrow('web variant config');
	});

	test('throws for missing bullet id', () => {
		const master: RawResumeData = {
			education: { title: 'School', subtitle: 'Degree', location: 'City' },
			experience: {
				'bad-entry': {
					title: 'Role',
					subtitle: 'Company',
					location: 'City',
					bullets: {
						a: { web: 'Text.' }
					}
				}
			},
			projects: {},
			hackathons: {},
			volunteering: {}
		};

		const config: VariantConfig = {
			header: [],
			entries: [
				{
					id: 'experience.bad-entry',
					output: 'experience',
					bullets: ['missing']
				}
			]
		};

		expect(() => buildWebData(master, config)).toThrow('Unknown bullet id');
	});
});
