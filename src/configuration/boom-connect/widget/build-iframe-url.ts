import {connectHost} from "@local/configuration/boom-connect/host";
import {connectEndpoints} from "@local/configuration/boom-connect/endpoints";
import {AppLocale} from "@local/configuration/i18n";
import {convertLocaleToSupported} from "@local/configuration/boom-connect/widget/i18n/convert-locale";

export function buildBoomWidgetIframeUrl(
    production: boolean,
    localization: AppLocale,
    slug: string,
): string {
    const host = connectHost(production);
    const endpoint = connectEndpoints.widgetIframe(slug);
    const locale = convertLocaleToSupported(localization);
    return `${host}/${locale}${endpoint}`;
}
