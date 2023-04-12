export function connectHost(production: boolean): string {
    // todo: test widget switch via window object
    return production
        ? 'https://connect.boomevents.org'
        : 'https://pr-687---app-connect-nwh4rg47xq-ew.a.run.app';
    // return production
    //     ? 'https://connect.boomevents.org'
    //     : 'https://connect.boomevents.dev';
}
