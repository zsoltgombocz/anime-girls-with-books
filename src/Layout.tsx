import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import useThemeStore from './states/themeStore';
import applyTheme from './helpers/applyTheme';
import Menu from './components/Menu';

export default function Layout() {
    const theme = useThemeStore((state) => state.theme);

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    return (
        <>
            <Header />
            <main
                className={
                    'bg-white-secondary dark:bg-gray-secondary w-full h-full flex flex-col flex-grow px-8 py-36 overflow-auto'
                }
            >
                <Outlet />
            </main>
            <Menu />
        </>
    );
}
