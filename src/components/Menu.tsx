import { motion as m } from 'framer-motion';

import { useMatches } from 'react-router-dom';
import Collection from './svg/Collection';
import Home from './svg/Home';
import MenuElement from './MenuElement';
import Information from './svg/Information';

export default function Header() {
    const matches = useMatches();

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
                'fixed bottom-0 w-full bg-white-primary dark:bg-gray-primary drop-shadow-2xl px-8 flex flex-row justify-between items-center gap-20 h-22 overflow-clip'
            }
        >
            <MenuElement
                Icon={Home}
                label={'HOME'}
                whileHover={{ scale: 1.1, ...transitionConfig }}
                isActive={matches[matches.length - 1].id === 'home'}
                to={'/'}
            />
            <MenuElement
                Icon={Collection}
                label={'COLLECTION'}
                whileHover={{ scale: 1.1, ...transitionConfig }}
                isActive={matches[0].id === 'collection'}
                to={'my-collection'}
            />
            <MenuElement
                Icon={Information}
                label={'INFORMATION'}
                whileHover={{ scale: 1.1, ...transitionConfig }}
                isActive={matches[0].id === 'informations'}
                to={'information'}
            />
        </footer>
    );
}
