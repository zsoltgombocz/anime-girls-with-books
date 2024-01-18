import { motion as m } from 'framer-motion';

import { useLocation } from 'react-router-dom';
import Collection from './svg/Collection';
import Home from './svg/Home';
import MenuElement from './MenuElement';
import Information from './svg/Information';

export default function Header() {
    const location = useLocation();

    const transitionConfig = {
        transition: {
            type: 'spring',
            stiffness: 500,
            damping: 10,
            duration: 1,
        },
    };

    return (
        <footer
            className={
                'fixed bottom-0 w-full bg-white-primary dark:bg-gray-primary drop-shadow-2xl px-0 flex flex-row justify-between items-center gap-0 lg:gap-20 h-16 overflow-clip'
            }
        >
            <MenuElement
                Icon={Home}
                label={'HOME'}
                whileHover={{ scale: 1.1, ...transitionConfig }}
                isActive={location.pathname === '/home'}
                to={'/'}
            />
            <MenuElement
                Icon={Collection}
                label={'COLLECTION'}
                whileHover={{ scale: 1.1, ...transitionConfig }}
                isActive={location.pathname === '/my-collection'}
                to={'my-collection'}
            />
            <MenuElement
                Icon={Information}
                label={'INFORMATION'}
                whileHover={{ scale: 1.1, ...transitionConfig }}
                isActive={location.pathname === '/information'}
                to={'information'}
            />
        </footer>
    );
}
