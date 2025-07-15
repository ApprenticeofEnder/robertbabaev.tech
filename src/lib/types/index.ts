export * from './resume';
export * from './projects';
export * from './homepage';

export interface Link {
	text: string;
	href: string;
}

export interface ContactLinks {
	github: Link;
	linkedin: Link;
	email: Link;
}
