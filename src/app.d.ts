// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}

		interface Experience {
			title: string;
			start: string;
			end: string;
			tech: string[] | null[];
			sar: string[] | null[] | null;
		}

		interface ProfessionalExperience extends Experience {
			company: string;
			location: string;
			src: string;
			alt: string;
		}

		interface Project extends Experience {
			featured: boolean;
			description: string;
			src?: string;
			link?: string;
			alt: string;
		}

		interface TableData {
			key: string;
			value: string;
			duration?: number;
		}

		interface Link {
			href: string;
			text: string;
		}
	}
}

export {};
