export function buildBoomWidgetUrl(
    production: boolean,
    localization: string,
    slug: string,
): string {
    let host = 'https://connect.boomevents.org';
    if (!production) {
        host = 'https://connect.boomevents.dev';
    }
    return `${host}/${localization.toLocaleLowerCase()}/event/${slug}/widget`;
}
