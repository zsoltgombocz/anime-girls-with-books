import { motion as m } from 'framer-motion';
import useThemeStore, { Theme } from '../states/themeStore';

const themeButtons = {
    [Theme.LIGHT]: {
        icon: <i className={'bi bi-brightness-high'} />,
        label: 'Light',
    },
    [Theme.SYSTEM]: {
        icon: <i className={'bi bi-display'} />,
        label: 'System',
    },
    [Theme.DARK]: {
        icon: <i className={'bi bi-moon'} />,
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
            className={'mobile-theme-switcher flex md:hidden'}
            onClick={() => setTheme(getNextTheme(currentTheme) as Theme)}
            aria-hidden={'true'}
        >
            {Object.values(Theme).map((theme: Theme) => (
                <div key={theme} className={'theme-button'}>
                    <span>{themeButtons[theme].icon}</span>
                </div>
            ))}
        </div>
    );
}
