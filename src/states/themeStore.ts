import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export enum Theme {
    LIGHT = 'light',
    SYSTEM = 'system',
    DARK = 'dark',
}

interface ThemeState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: Theme.SYSTEM,
            setTheme: (theme: Theme) => {
                set({ theme });
            },
        }),
        { name: 'agwb-theme' }
    )
);

export default useThemeStore;
