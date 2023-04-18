export function connectHost(production: boolean): string {
    return production
        ? 'https://connect.boomevents.org'
        : 'https://pr-692---app-connect-nwh4rg47xq-ew.a.run.app';
}
