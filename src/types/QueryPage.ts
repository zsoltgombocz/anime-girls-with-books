import { Image } from './Image';

export interface Page {
    data: Image[];
    paginator: {
        hasNextPage: boolean;
        nextPage: number | null;
        perviousPage: number | null;
        totalPages: number;
        currentPage: number;
    };
}
