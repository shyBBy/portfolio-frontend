export interface SingleProjectInterface {
    id?: string;
    title: string;
    description: string;
    image: string;
    tags: string[] | string;
    source: string;
    liveVersion: string;
}

export type ProjectListType = SingleProjectInterface[];