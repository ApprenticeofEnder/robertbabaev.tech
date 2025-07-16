import type { Link } from './common';

export * from './resume';
export * from './projects';
export * from './homepage';
export * from './common';

export interface ContactLinks {
	github: Link;
	linkedin: Link;
	email: Link;
}
