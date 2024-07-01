export default function ImageLoader() {
    return (
        <div
            className={
                'flex rounded-md items-center justify-center absolute inset-0 animate-pulse bg-white-primary/50 dark:bg-gray-primary/10'
            }
        >
            <svg
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 24 24'}
                className={
                    'fill-gray-primary/50 dark:fill-gray-primary w-1/3 h-auto'
                }
            >
                <path
                    className={'spinner_ngNb'}
                    d={
                        'M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z'
                    }
                    transform={'translate(12, 12) scale(0)'}
                />
                <path
                    className={'spinner_ngNb spinner_6TBP'}
                    d={
                        'M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z'
                    }
                    transform={'translate(12, 12) scale(0)'}
                />
            </svg>
        </div>
    );
}
