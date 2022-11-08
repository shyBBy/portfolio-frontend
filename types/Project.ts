export interface SimpleProjectEntity {
    id: string;
    title: string;
    url: string;
    photo: string;
}

export interface ProjectEntity extends SimpleProjectEntity {
    title: string;
    description: string;
    status: string;
    added_at: Date | string;
    techStack: string | string[];
}