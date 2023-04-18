export function apiHost(production: boolean): string {
    return production
        ? 'https://api.boomevents.org'
        : 'https://api.boomevents.dev';
}
