export interface HomepageField {
	name: string;
	content: string | string[];
}

export interface HomepageConfig {
	fields: Record<string, HomepageField>;
}
