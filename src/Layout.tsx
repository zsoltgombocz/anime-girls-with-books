import { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import useThemeStore from './states/themeStore';
import applyTheme from './helpers/applyTheme';
import Menu from './components/Menu';
import { ScrollDirection } from './enums/ScrollDirection';

export default function Layout() {
    const theme = useThemeStore((state) => state.theme);
    const mainlayoutRef = useRef<HTMLElement>(null);
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(
        ScrollDirection.UP
    );
    const [y, setY] = useState<number>(0);

    const handleScroll = useCallback(() => {
        if (mainlayoutRef.current?.scrollTop === undefined) {
            return;
        }

        if (y > mainlayoutRef.current.scrollTop) {
            setScrollDirection(ScrollDirection.UP);
        } else if (y < mainlayoutRef.current.scrollTop) {
            setScrollDirection(ScrollDirection.DOWN);
        }

        setY(mainlayoutRef.current.scrollTop);
    }, [y]);

    useEffect(() => {
        mainlayoutRef.current?.addEventListener('scroll', handleScroll);
    }, [handleScroll]);

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
                ref={mainlayoutRef}
            >
                <Outlet />
            </main>
            <Menu hide={scrollDirection === ScrollDirection.DOWN} />
        </>
    );
}
