import { PageTitleInterface } from '../interfaces';

export default function PageTitle({ title, icon }: PageTitleInterface) {
    return (
        <div
            className={
                'w-full flex items-center justify-center pt-12 pb-6 relative mb-20'
            }
        >
            <h1 className={'relative text-4xl lg:text-6xl uppercase z-20'}>
                {title}
            </h1>
            <div
                className={`z-10 absolute -bottom-22 left-1/2 -translate-x-1/2 w-[200px] lg:w-[300px] 
                    lg:h-auto aspect-square dark:text-gray-primary/10 text-white-primary/30`}
            >
                {icon}
            </div>
        </div>
    );
}
