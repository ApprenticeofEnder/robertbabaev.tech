export type Experience = {
	title: string;
	start: string;
	end: string;
	tech: string[] | null[];
	sar: string[] | null[];
};

export type ProfessionalExperience = Experience & {
	company: string;
	location: string;
	src: string;
	alt: string;
};

export type Project = Experience & {
	featured: boolean;
	description: string;
	src?: string;
	alt: string;
};
