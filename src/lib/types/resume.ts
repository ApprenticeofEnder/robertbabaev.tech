export interface ResumeEntry {
	title: string;
	subtitle: string;
	location: string;
	start?: string;
	end?: string;
	link?: string;
	tech?: string[];
	bulletPoints?: string[];
}

export interface ResumeData {
	education: ResumeEntry;
	experience: Record<string, ResumeEntry>;
	projects: Record<string, ResumeEntry>;
	hackathons: Record<string, ResumeEntry>;
	volunteering: Record<string, ResumeEntry>;
}
