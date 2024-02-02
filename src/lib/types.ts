export type Href = {
	display: string;
	link: string;
	icon?: string;
};

export type BasicData = {
	name: string;
	website: Href;
	email: Href;
	github: Href;
	linkedin: Href;
};

export type Education = {
	institution: string;
	degree: string;
	location: string;
	start: string;
	end: string;
};

export type Skills = {
	programming_languages: string[];
	frameworks: string[];
	technical: string[];
	concepts: string[];
};

export type Experience = {
	company: string;
	title: string;
	start: string;
	end: string;
	location: string;
	sar: string[];
};

export type Project = {
	title: string;
	stack: string;
	start_year: string;
	end_year: string;
	points: string[];
	link?: string;
	featured?: string;
};

export type ResumeData = {
	basic: BasicData;
	education: Education[];
	experience: Experience[];
	projects: Project[];
};

// export type Article = {
// 	title: string;
// 	link: string;
// };

// export type Contact = {
// 	icon: string;
// 	data: string;
// 	link: string;
// };

export interface IHash {
	[details: string]: string;
}

export type TailwindData = {
	colors?: string;
	border?: string;
};
