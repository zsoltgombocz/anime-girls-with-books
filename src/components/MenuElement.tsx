import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { AnimatePresence, motion as m } from 'framer-motion';
import { MenuElementInterface } from '../interfaces';

export default function MenuElement({
    whileHover,
    variants,
    initial,
    Icon,
    label,
    isActive,
    to,
}: MenuElementInterface) {
    const [hover, setHover] = useState(false);
    const hoverStyle = classNames({
        'stroke-white-primary fill-white-primary': hover,
        'dark:stroke-white-primary stroke-gray-primary dark:fill-white-primary fill-gray-primary':
            !hover,
    });

    const activeStyle = classNames({
        '!stroke-primary !fill-primary !text-primary': isActive && !hover,
    });

    const navigate = useNavigate();

    return (
        <m.div
            className={`cursor-pointer flex flex-col items-center w-1/3 py-1 lg:py-2 h-full relative overflow-hidden justify-center ${hoverStyle} ${activeStyle}`}
            whileHover={whileHover}
            variants={variants}
            initial={initial}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            onClick={() => to && navigate(to)}
        >
            <Icon />

            <span
                className={`text-sm lg:text-base ${
                    hover && 'text-white-primary'
                }`}
            >
                {label}
            </span>
            <AnimatePresence>
                {hover && (
                    <m.div
                        initial={{
                            scale: 0,
                            transformOrigin: 'bottom',
                        }}
                        animate={{
                            scale: 1.5,
                        }}
                        exit={{ scale: 0, transition: { duration: 0.25 } }}
                        transition={{
                            type: 'tween',
                            stiffness: 750,
                            damping: 50,
                            duration: 0.5,
                        }}
                        className={
                            'absolute bottom-0 left-0 w-full h-full bg-primary -z-[1] rounded-full'
                        }
                    ></m.div>
                )}
            </AnimatePresence>
        </m.div>
    );
}
