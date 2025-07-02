export interface Experience {
	title: string;
	start: string;
	end: string;
	tech: string[] | null[];
	sar: string[] | null[] | null;
}

export interface ProfessionalExperience extends Experience {
	company: string;
	location: string;
	src: string;
	alt: string;
}

export interface ResumeEntryProps {
	title: string;
	description: string;
	locationOrLink: string;
	href: string;
	start: string;
	end: string;
	tech: string[];
	bulletPoints?: string[];
}

export interface Project extends Experience {
	featured: boolean;
	description: string;
	src?: string;
	link?: string;
	alt: string;
}

export interface TableData {
	key: string;
	value: string;
	duration?: number;
}

export interface Link {
	href: string;
	text: string;
}
