import { describe, expect, test } from 'vitest';

import { compileArrayEntry, compileConfig, compileEntries, compileSingleEntry } from './config';

const TEST_KEY = 'testKey';

describe('compileSingleEntry', () => {
	test('compiles good entry correctly', async () => {
		const value = '*testValue*';

		const result = await compileSingleEntry(TEST_KEY, value);
		expect(result).toEqual([TEST_KEY, '<p><em>testValue</em></p>']);
	});

	test('handles more complex cases', async () => {
		const value = 'This is a *test*!';

		const result = await compileSingleEntry(TEST_KEY, value);
		expect(result).toEqual([TEST_KEY, '<p>This is a <em>test</em>!</p>']);
	});

	// TODO: Cover edge cases
	// TODO: Cover security cases
});

describe('compileArrayEntry', () => {
	test('compiles good entry correctly', async () => {
		const value: string[] = ['Hello, world!', 'This is a *test*!'];

		const result = await compileArrayEntry(TEST_KEY, value);
		expect(result).toEqual([TEST_KEY, ['<p>Hello, world!</p>', '<p>This is a <em>test</em>!</p>']]);
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
			field1: '<p><em>test</em></p>',
			[TEST_KEY]: {
				name: '<p>test</p>',
				data: '<p>This is a <em>test</em>!</p>'
			},
			arrayTest: ['<p>Hello, world</p>', '<p><em>Good stuff!</em></p>']
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
			field1: '<p><em>test</em></p>',
			[TEST_KEY]: {
				name: '<p>test</p>',
				data: '<p>This is a <em>test</em>!</p>'
			},
			arrayTest: ['<p>Hello, world</p>', '<p><em>Good stuff!</em></p>']
		});
	});
});
