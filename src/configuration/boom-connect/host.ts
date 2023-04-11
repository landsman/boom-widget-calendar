export function connectHost(production: boolean): string {
    return production
        ? 'https://connect.boomevents.org'
        : 'https://connect.boomevents.dev';
}
