import { describe, expect, test } from 'vitest';

import { compileArrayEntry, compileConfig, compileEntries, compileSingleEntry } from './config';

const TEST_KEY = 'testKey';

describe('compileSingleEntry', () => {
	test('compiles good entry correctly', async () => {
		const value = '*testValue*';

		const result = await compileSingleEntry(TEST_KEY, value);
		expect(result).toEqual([TEST_KEY, '<em>testValue</em>']);
	});

	test('handles more complex cases', async () => {
		const value = 'This is a *test*!';

		const result = await compileSingleEntry(TEST_KEY, value);
		expect(result).toEqual([TEST_KEY, 'This is a <em>test</em>!']);
	});

	test('suppresses links', async () => {
		const value = 'https://example.com';

		const result = await compileSingleEntry(TEST_KEY, value);
		expect(result).toEqual([TEST_KEY, value]);
	});

	// TODO: Cover edge cases
	// TODO: Cover security cases
});

describe('compileArrayEntry', () => {
	test('compiles good entry correctly', async () => {
		const value: string[] = ['Hello, world!', 'This is a *test*!'];

		const result = await compileArrayEntry(TEST_KEY, value);
		expect(result).toEqual([TEST_KEY, ['Hello, world!', 'This is a <em>test</em>!']]);
	});

	test('suppresses links', async () => {
		const value: string[] = ['Hello, world', 'https://example.com'];

		const result = await compileArrayEntry(TEST_KEY, value);
		expect(result).toEqual([TEST_KEY, value]);
	});

	// TODO: Cover edge cases
	// TODO: Cover security cases
});

describe('compileEntries', () => {
	test('compiles good entries correctly', async () => {
		const data: Record<string, any> = {
			field1: '*test*',
			[TEST_KEY]: {
				name: 'test',
				data: 'This is a *test*!'
			},
			arrayTest: ['Hello, world', '*Good stuff!*']
		};

		const result = await compileEntries(data);

		expect(result).toEqual({
			field1: '<em>test</em>',
			[TEST_KEY]: {
				name: 'test',
				data: 'This is a <em>test</em>!'
			},
			arrayTest: ['Hello, world', '<em>Good stuff!</em>']
		});
	});

	test('suppresses links', async () => {
		const data: Record<string, any> = {
			linkTest: {
				singleField: 'https://example.com',
				arrayField: ['https://test.com', 'https://google.com']
			}
		};

		const result = await compileEntries(data);
		expect(result).toEqual({
			linkTest: {
				singleField: 'https://example.com',
				arrayField: ['https://test.com', 'https://google.com']
			}
		});
	});

	// TODO: Cover edge cases
	// TODO: Cover security cases
});

describe('compileConfig', () => {
	test('compiles good config correctly', async () => {
		const filename = 'config/test.toml';
		const result = await compileConfig(filename);

		expect(result).toEqual({
			field1: '<em>test</em>',
			[TEST_KEY]: {
				name: 'test',
				data: 'This is a <em>test</em>!'
			},
			arrayTest: ['Hello, world', '<em>Good stuff!</em>']
		});
	});
});
