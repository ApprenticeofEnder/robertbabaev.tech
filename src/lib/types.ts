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