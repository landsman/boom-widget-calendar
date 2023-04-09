export function apiHost(production: boolean): string {
    return production
        ? 'https://api.boomevents.com'
        : 'https://api.boomevents.dev';
}
