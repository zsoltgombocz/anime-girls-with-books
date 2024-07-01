import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import GeneralLoader from './svg/GeneralLoader';
import Retry from './svg/Retry';

interface FetchStatusI {
    status: 'pending' | 'error' | 'success';
    error: Error | null;
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult>;
}
export default function FetchStatus({ status, error, refetch }: FetchStatusI) {
    if (status === 'pending') {
        return (
            <div className={'flex w-full justify-center'}>
                <GeneralLoader />
            </div>
        );
    }

    if (status === 'error' && error) {
        return (
            <div className={'flex flex-col w-full justify-center'}>
                <div
                    className={
                        'text-xl text-red-700 font-medium text-center text uppercase'
                    }
                >
                    {error.message}
                </div>
                <button
                    type={'button'}
                    onClick={() => refetch()}
                    className={
                        'group uppercase text-lg flex justify-center items-center gap-2'
                    }
                >
                    <Retry
                        className={'group-hover:animate-spin transition-all'}
                    />
                    <span>{'Retry'}</span>
                </button>
            </div>
        );
    }
}
