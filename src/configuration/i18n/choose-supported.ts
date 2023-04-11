import {AppLocale, defaultLocale} from "@local/configuration/i18n/index";

/**
 * It has to be compatible between `lingui` and `date-fns`
 *
 * @see AppLocale
 * @see Locale
 */
function convertLocaleToISO(locale: string): AppLocale {
    if (locale.includes("cs-")) {
        return AppLocale.cs;
    }
    if (locale === 'en-') {
        return AppLocale.en;
    }
    return locale as AppLocale;
}

/**
 * Make sure that we have detected locale in configuration or fallback
 */
export function chooseFromSupported(detectedLocale: string): AppLocale {
    const converted = convertLocaleToISO(detectedLocale);
    if (!(converted in AppLocale)) {
        return defaultLocale;
    }
    return converted;
}
