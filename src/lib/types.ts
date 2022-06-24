export type ExperienceSAR = {
    index: number;
    statement: string;
}

export type Experience = {
    company: string;
    title: string;
    start_date: string;
    end_date: string;
    designation: string;
    experience_sars: ExperienceSAR[];
};

export type Project = {
    title: string;
    link: string;
    description: string;
};

export type Article = {
    title: string;
    link: string;
};

export type Contact = {
    icon: string;
    data: string; 
    link: string;
}