import { describe, expect, test } from 'vitest';

import { resolveBulletText, resolveBulletsForEntry } from './resolve';
import type { RawResumeEntry } from './types';

describe('resolveBulletText', () => {
	const bullets = {
		ingestion: {
			default: 'Default ingestion text.',
			devops: 'DevOps ingestion text.'
		},
		'web-only': {
			web: 'Web only text.'
		}
	};

	test('uses variant-specific text when present', () => {
		expect(resolveBulletText(bullets, 'ingestion', 'devops')).toBe('DevOps ingestion text.');
	});

	test('falls back to default then web', () => {
		expect(resolveBulletText(bullets, 'ingestion', 'security')).toBe('Default ingestion text.');
		expect(resolveBulletText(bullets, 'web-only', 'security')).toBe('Web only text.');
	});

	test('throws for unknown bullet id', () => {
		expect(() => resolveBulletText(bullets, 'missing', 'web')).toThrow('Unknown bullet id');
	});

	test('throws when no text is available', () => {
		expect(() => resolveBulletText({ empty: {} }, 'empty', 'web')).toThrow('has no text');
	});
});

describe('resolveBulletsForEntry', () => {
	test('resolves ordered bullet ids', () => {
		const entry: RawResumeEntry = {
			title: 'Role',
			subtitle: 'Company',
			location: 'Ottawa, ON',
			bullets: {
				a: { default: 'A text.' },
				b: { web: 'B text.' }
			}
		};

		expect(resolveBulletsForEntry(entry, 'web', ['a', 'b'], 'experience.test')).toEqual([
			'A text.',
			'B text.'
		]);
	});
});
