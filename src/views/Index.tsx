/* eslint-disable no-underscore-dangle */
import { useInfiniteQuery } from '@tanstack/react-query';
import MasonryLayout from '../components/MasonryLayout';
import { Page } from '../types/QueryPage';
import FetchStatus from '../components/FetchStatus';

const fetchImages = async ({ pageParam }: { pageParam: number }) => {
    const res = await fetch(
        `${import.meta.env.VITE_API_URL}/images?page=${pageParam}`
    );
    return res.json();
};

export default function Index() {
    const { data, error, fetchNextPage, hasNextPage, status, refetch } =
        useInfiniteQuery({
            queryKey: ['images'],
            queryFn: fetchImages,
            initialPageParam: 1,
            getNextPageParam: (lastPage: Page) => {
                return lastPage.paginator.nextPage;
            },
        });

    return (
        <section>
            <MasonryLayout pages={data?.pages} />
            <FetchStatus status={status} error={error} refetch={refetch} />
        </section>
    );
}
