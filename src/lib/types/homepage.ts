export interface HomepageField {
	name: string;
	content: string | string[];
}

export interface HomepageConfig {
	fields: Record<string, HomepageField>;
	rss: string[];
}

export interface RssFeedItem {
	title: string;
	link: string;
	pubDate: string;
	description?: string;
}
