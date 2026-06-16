import { describe, expect, test } from 'vitest';

import { resolveBulletText, resolveBulletsForEntry } from './resolve';
import type { RawResumeEntry } from './types';

describe('resolveBulletText', () => {
	const bullets = {
		ingestion: {
			default: 'Default ingestion text.',
			devops: 'DevOps ingestion text.'
		},
		'default-only': {
			default: 'Default only text.'
		}
	};

	test('uses variant-specific text when present', () => {
		expect(resolveBulletText(bullets, 'ingestion', 'devops')).toBe('DevOps ingestion text.');
	});

	test('falls back to default for other variants', () => {
		expect(resolveBulletText(bullets, 'ingestion', 'security')).toBe('Default ingestion text.');
		expect(resolveBulletText(bullets, 'default-only', 'security')).toBe('Default only text.');
	});

	test('throws for unknown bullet id', () => {
		expect(() => resolveBulletText(bullets, 'missing', 'default')).toThrow('Unknown bullet id');
	});

	test('throws when no text is available', () => {
		expect(() => resolveBulletText({ empty: {} }, 'empty', 'default')).toThrow('has no text');
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
				b: { default: 'B text.' }
			}
		};

		expect(resolveBulletsForEntry(entry, 'default', ['a', 'b'], 'experience.test')).toEqual([
			'A text.',
			'B text.'
		]);
	});
});
