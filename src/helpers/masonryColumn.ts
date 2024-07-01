export default function getColumnByCurrentScreen(): number {
    if (window.innerWidth < 600) {
        return 2;
    }

    return 3;
}
