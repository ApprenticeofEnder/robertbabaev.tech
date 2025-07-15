import type { Link } from './common';

export interface HomepageField {
	name: string;
	content: string | string[];
}

export interface HomepageConfig {
	fields: Record<string, HomepageField>;
	options: Record<string, Link>;
	rss: string[];
}

export interface RssFeedItem {
	title: string;
	link: string;
	pubDate: string;
	description?: string;
}
