import {BoomConnectLocale} from "@local/configuration/boom-connect/widget/i18n/boom-connect-locale";
import {AppLocale} from "@local/configuration/i18n";

/**
 * covert to support values by boom connect app, provide fallback
 */
export function convertLocaleToSupported(appLocale: AppLocale): BoomConnectLocale {
    if (appLocale === AppLocale.EN) {
        return BoomConnectLocale.en
    }
    return BoomConnectLocale.en;
}
