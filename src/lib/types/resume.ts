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

export interface ExtraActivity {
	title: string;
	details: string;
	date: string;
}

export interface ResumeData {
	education: ResumeEntry;
	experience: ResumeEntry[];
	projects: ResumeEntry[];
}

export interface ResumeDataLoaded {
	education?: ResumeEntry;
	experience?: Record<string, ResumeEntry>;
	projects?: Record<string, ResumeEntry>;
}
