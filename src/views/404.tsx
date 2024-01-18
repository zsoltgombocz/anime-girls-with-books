import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';

export default function Page404() {
    return (
        <div
            className={
                'w-full h-full flex flex-col justify-center items-center'
            }
        >
            <h1 className={'text-[5rem] font-bold leading-[5rem]'}>{'404'}</h1>
            <span className={'text-3xl mb-10'}>{'Page not found!'}</span>
            <Button
                text={'Back to Home'}
                redirect={'/'}
                icon={<ArrowLeftIcon className={'h-6 w-6'} />}
            />
        </div>
    );
}
