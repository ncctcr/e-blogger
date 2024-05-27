export const truncateString = (str: string, count: number) => {
    return str.length > count ? str.substring(0, count) + '...' : str;
}