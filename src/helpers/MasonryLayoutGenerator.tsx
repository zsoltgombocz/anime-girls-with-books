import { Image } from '../types/Image';

type Column = {
    currentHeight: number;
    images: Image[];
    index: number;
};

export default class MasonryLayoutGenerator {
    images: Image[];
    columns: number;
    data: Column[] = [];

    constructor(images: Image[] | [], columns: number = 3) {
        this.images = images;
        this.columns = columns;
        this.setColumnsNumber(columns);
    }

    setColumnsNumber(columns: number) {
        this.columns = columns;
        this.data = this.#generateEmptyColumns();
    }

    setImages(images: Image[]) {
        this.images = images;
    }

    getColumns(): Column[] {
        this.data = this.#generateEmptyColumns();

        this.images.forEach((image) => {
            const index = this.#findSuitableColumnForImage();
            const column = this.data.find((c) => c.index === index);

            if (!column) return;

            column.images.push(image);
            column.currentHeight += image.height;
        });

        return this.data;
    }

    #generateEmptyColumns(): Column[] {
        return Array.from({ length: this.columns }, (_, i) => ({
            currentHeight: 0,
            images: [],
            index: i,
        }));
    }

    #findSuitableColumnForImage(): number {
        const minHeightColumn = this.data.reduce((minColumn, column) => {
            return column.currentHeight < minColumn.currentHeight
                ? column
                : minColumn;
        }, this.data[0]);

        return minHeightColumn.index;
    }
}
