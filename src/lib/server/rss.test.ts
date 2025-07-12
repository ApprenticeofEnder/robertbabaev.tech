import { test as baseTest, describe, expect } from 'vitest';

import { type HomepageConfig } from '$lib/types';

import { compileConfig } from './config';
import { extractFeedItems, fetchRawRssFeed, fetchRssFeed, parseRssFeed } from './rss';

const test = baseTest.extend<{
	rss: string[];
}>({
	rss: async ({}, use) => {
		const config = await compileConfig<HomepageConfig>('config/homepage.toml');
		await use(config.rss);
	}
});

describe('fetchRawRssFeed', () => {
	test('fetches the configured RSS feed(s) properly', async ({ rss }) => {
		await Promise.all(rss.map(fetchRawRssFeed));
	});
});

describe('parseRssFeed', () => {
	test('parses a fetched RSS feed', async ({ rss }) => {
		// First fetch the XML
		const xml = await fetchRawRssFeed(rss[0]);

		// Then parse it
		const parsedData = await parseRssFeed(xml);

		// Check the parsed data has the expected structure
		expect(parsedData).toBeDefined();
		expect(parsedData.rss).toBeDefined();
		expect(parsedData.rss.channel).toBeDefined();
		expect(Array.isArray(parsedData.rss.channel)).toBe(true);
	});

	test('throws error for invalid XML', async () => {
		await expect(parseRssFeed('invalid xml')).rejects.toThrow('Failed to parse RSS feed.');
	});
});

describe('extractFeedItems', () => {
	test('extracts items from parsed RSS data', async ({ rss }) => {
		// Fetch and parse the data first
		const xml = await fetchRawRssFeed(rss[0]);
		const parsedData = await parseRssFeed(xml);

		// Extract the items
		const items = await extractFeedItems(parsedData);

		// Validate the extracted items
		expect(Array.isArray(items)).toBe(true);

		// The configured RSS feed should have actual data.
		expect(items.length).toBeGreaterThan(0);

		if (items.length > 0) {
			// Check that each item has the expected structure
			items.forEach((item) => {
				expect(item).toHaveProperty('title');
				expect(item).toHaveProperty('link');
				expect(item).toHaveProperty('pubDate');
				// description is optional in the type
			});
		}
	});

	test('handles empty feed', async () => {
		const emptyParsedData = {
			rss: {
				channel: [{ item: [] }]
			}
		};

		const items = await extractFeedItems(emptyParsedData);
		expect(items).toEqual([]);
	});
});

describe('fetchRssFeed', () => {
	test('fetches and processes RSS feeds', async ({ rss }) => {
		const feedItems = await fetchRssFeed(rss[0]);

		expect(feedItems).not.toBeNull();
		expect(Array.isArray(feedItems)).toBe(true);

		if (feedItems && feedItems.length > 0) {
			// Check structure of the first item
			expect(feedItems[0]).toHaveProperty('title');
			expect(feedItems[0]).toHaveProperty('link');
			expect(feedItems[0]).toHaveProperty('pubDate');
		}
	});

	test('returns null on error', async () => {
		// Testing with an invalid URL
		const result = await fetchRssFeed('https://invalid-url-that-doesnt-exist.xyz');
		expect(result).toBeNull();
	});
});
