/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
import { useEffect, useState, useMemo } from 'react';
import getColumnByCurrentScreen from '../helpers/masonryColumn';
import { Page } from '../types/QueryPage';
import { Image as ImageType } from '../types/Image';
import Image from './Image';
import MasonryLayoutGenerator from '../helpers/MasonryLayoutGenerator';

export default function MasonryLayout({
    pages,
}: {
    pages: Page[] | undefined;
}) {
    const [columns, setColumns] = useState(getColumnByCurrentScreen());
    const [masonryData, setMasonrayData] = useState<ImageType[][]>([]);
    const updateColumns = () => setColumns(getColumnByCurrentScreen());

    const [masonryLayout] = useState(
        () => new MasonryLayoutGenerator([], columns)
    );

    useEffect(() => {
        window.addEventListener('resize', updateColumns);

        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    useEffect(() => {
        if (pages === undefined) return;
        const images: ImageType[] = pages.map((page) => page.data).flat();

        masonryLayout.setColumnsNumber(columns);
        masonryLayout.setImages(images);

        const masonryColumns = masonryLayout.getColumns();
        setMasonrayData(masonryColumns.map((c) => c.images));
    }, [pages, columns, masonryLayout]);

    return (
        <div className={'flex gap-4'}>
            {masonryData.map((column, index) => (
                <div
                    key={`column_${index}`}
                    className={`flex flex-col gap-4 ${
                        columns === 3 ? 'basis-1/3' : 'basis-1/2'
                    }`}
                >
                    {column.map((image: ImageType) => (
                        <Image
                            key={image._id}
                            src={image.url}
                            width={image.width}
                            height={image.height}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
