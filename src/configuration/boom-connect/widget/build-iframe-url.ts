import {connectHost} from "@local/configuration/boom-connect/host";
import {connectEndpoints} from "@local/configuration/boom-connect/endpoints";

export function buildBoomWidgetIframeUrl(
    production: boolean,
    localization: string,
    slug: string,
): string {
    const host = connectHost(production);
    const endpoint = connectEndpoints.widgetIframe(slug);
    return `${host}/${localization.toLocaleLowerCase()}${endpoint}`;
}
