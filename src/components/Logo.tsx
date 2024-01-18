import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <Link
            to={'/'}
            className={'text-2xl leading-[1.35rem] font-medium font-logo'}
        >
            <span>{'Anime'}</span>
            <span className={'text-primary font-extrabold ml-1'}>
                {'Girls'}
            </span>
            <br />
            <span>{'With'}</span>
            <span className={'text-primary font-extrabold ml-1'}>
                {'Books'}
            </span>
        </Link>
    );
}
