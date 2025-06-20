export interface ILink {
	href: string;
	text: string;
}

export interface IExperience {
	title: string;
	start: string;
	end: string;
	tech?: string[] | null[] | null;
	sar?: string[] | null[] | null;
}

export interface IProfessionalExperience {
	company: string;
	location: string;
	src: string;
	alt: string;
}

export interface IProject extends IExperience {
	featured: boolean;
	description: string;
	src?: string;
	link?: string;
	alt: string;
}

export interface ITableData {
	key: string;
	value: string;
}
