import axios from 'axios';
import { parseStringPromise } from 'xml2js';

import type { RssFeedItem } from '$lib/types';

export async function fetchRawRssFeed(url: string): Promise<string> {
	try {
		const response = await axios.get(url, { responseType: 'text' });
		return response.data;
	} catch (error) {
		console.error('Error fetching RSS feed:', error);
		throw new Error('Failed to fetch RSS feed.');
	}
}

export async function parseRssFeed(xml: string): Promise<any> {
	try {
		const result = await parseStringPromise(xml);
		return result;
	} catch (error) {
		console.error('Error parsing RSS feed:', error);
		throw new Error('Failed to parse RSS feed.');
	}
}

export async function extractFeedItems(parsedData: any): Promise<RssFeedItem[]> {
	const items: RssFeedItem[] = parsedData.rss.channel[0].item.map((item: any) => ({
		title: item.title[0],
		link: item.link[0],
		pubDate: item.pubDate[0],
		description: item.description[0]
	}));
	return items;
}

export async function fetchRssFeed(url: string): Promise<RssFeedItem[] | null> {
	try {
		const xmlData = await fetchRawRssFeed(url);
		const parsedData = await parseRssFeed(xmlData);
		const feedItems = await extractFeedItems(parsedData);

		return feedItems;
	} catch (error) {
		console.error('Error during RSS feed processing:', error);
		return null;
	}
}
