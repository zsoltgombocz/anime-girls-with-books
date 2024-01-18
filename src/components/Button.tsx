import { useState } from 'react';
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { ButtonInterface } from '../interfaces';

export default function Button({ text, redirect, icon }: ButtonInterface) {
    const [hover, setHover] = useState(false);

    const baseClasses = classNames(
        'inline-block py-3 px-8 uppercase shadow-md border-2 border-primary text-primary z-10 relative rounded-md text-lg font-bold flex items-center justify-center gap-3'
    );

    const hoverClasses = classNames('hover:text-white-primary');

    const button =
        redirect !== undefined && typeof redirect === 'string' ? (
            <Link to={redirect} className={`${baseClasses} ${hoverClasses}`}>
                {icon}
                <span className={'pt-[5px]'}>{text}</span>
            </Link>
        ) : (
            <button
                type={'button'}
                className={`${baseClasses} ${hoverClasses}`}
            >
                {icon}
                {text}
            </button>
        );

    return (
        <m.div
            whileHover={{
                scale: 1.05,
                transition: { type: 'spring', stiffness: 750, duration: 0.75 },
            }}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            className={'relative overflow-hidden rounded-md inline-block'}
        >
            {button}

            <m.div
                initial={{ scale: 0 }}
                animate={{
                    scale: hover ? 1.5 : 0,
                    transformOrigin: 'bottom right',
                }}
                transition={{ duration: 0.5 }}
                className={
                    'absolute w-full h-full bg-primary rounded-full z-0 -right-5 -bottom-5'
                }
            ></m.div>
        </m.div>
    );
}
