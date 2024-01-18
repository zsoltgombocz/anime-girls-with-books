import { Theme } from '../states/themeStore';

export default function applyTheme(theme: Theme) {
    const isSystemDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches;
    const root = window.document.documentElement;

    if (theme === Theme.DARK || (theme === Theme.SYSTEM && isSystemDark)) {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }
}
