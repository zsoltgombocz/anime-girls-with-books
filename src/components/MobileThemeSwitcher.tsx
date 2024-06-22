import { AnimatePresence, motion as m, transform } from 'framer-motion';
import useThemeStore, { Theme } from '../states/themeStore';

const themeButtons = {
    [Theme.LIGHT]: {
        icon: <i className={'bi bi-brightness-high text-xl'} />,
        label: 'Light',
    },
    [Theme.SYSTEM]: {
        icon: <i className={'bi bi-display text-xl'} />,
        label: 'System',
    },
    [Theme.DARK]: {
        icon: <i className={'bi bi-moon text-xl'} />,
        label: 'Dark',
    },
};

const getNextTheme = (theme: string | Theme): Theme | string => {
    const currentThemeIndex = Object.keys(themeButtons).indexOf(theme);

    if (currentThemeIndex === Object.keys(themeButtons).length - 1) {
        return Theme.LIGHT;
    }

    const nextTheme = Object.keys(themeButtons).at(currentThemeIndex + 1);

    return nextTheme || Theme.SYSTEM;
};

export default function MobileThemeSwitcher() {
    const { theme: currentTheme, setTheme } = useThemeStore();

    return (
        <div
            className={'flex md:hidden'}
            onClick={() => setTheme(getNextTheme(currentTheme) as Theme)}
            aria-hidden={'true'}
        >
            <AnimatePresence>
                <m.div
                    initial={{ position: 'absolute', x: 0, y: -50, opacity: 0 }}
                    animate={{ position: 'relative', x: 0, y: 0, opacity: 1 }}
                    exit={{ position: 'absolute', x: 0, y: 50, opacity: 0 }}
                    key={currentTheme}
                >
                    {themeButtons[currentTheme].icon}
                </m.div>
            </AnimatePresence>
        </div>
    );
}
