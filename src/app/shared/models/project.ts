import { Tag } from "./tag";

export interface Project{
    id: number;
    name: string;
    resume: string;
    description: string;
    projectLink: string;
    picture: string;
    tags: Tag[];
}