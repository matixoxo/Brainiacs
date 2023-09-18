import { Person } from "./person"

export interface ApiStructure {
    data: Person[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number
}