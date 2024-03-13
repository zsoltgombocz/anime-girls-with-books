import ThemeSwitcher from './ThemeSwitcher';
import Logo from './Logo';

export default function Header() {
    return (
        <header
            className={
                'z-50 fixed top-0 w-full bg-white-primary dark:bg-gray-primary drop-shadow-2xl px-8 py-4 flex flex-row justify-between items-center'
            }
        >
            <Logo />

            <ThemeSwitcher />
        </header>
    );
}
