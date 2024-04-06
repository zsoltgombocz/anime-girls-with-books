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

const getThemeIndex = (theme: string | Theme): number => {
    return Object.keys(themeButtons).indexOf(theme);
};

export default function ThemeSwitcher() {
    const { theme: currentTheme, setTheme } = useThemeStore();

    return (
        <div className={'theme-switcher hidden md:flex'}>
            {Object.values(Theme).map((theme: Theme) => (
                <div key={theme} className={'theme-button'}>
                    <input
                        id={theme}
                        key={theme}
                        onChange={() => setTheme(theme)}
                        type={'radio'}
                        name={'theme'}
                        value={theme}
                        checked={currentTheme === theme}
                        className={'hidden'}
                    />
                    <label
                        htmlFor={theme}
                        className={
                            (currentTheme === theme && 'active') as string
                        }
                    >
                        <span>{themeButtons[theme].icon}</span>
                    </label>
                </div>
            ))}

            <m.div
                layout
                className={'active-background'}
                animate={{
                    left: `calc(1rem + 6rem * ${getThemeIndex(currentTheme)})`,
                }}
            ></m.div>
        </div>
    );
}
