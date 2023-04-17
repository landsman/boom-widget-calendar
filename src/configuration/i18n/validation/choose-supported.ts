import {AppLocale, defaultLocale} from "@local/configuration/i18n";
import {convertLocaleToISO} from "@local/configuration/i18n/validation/convert-to-iso";

/**
 * Make sure that we have detected locale in configuration or fallback
 */
export function chooseFromSupported(detectedLocale: string): AppLocale {
    const converted = convertLocaleToISO(detectedLocale);
    const values = Object.values(AppLocale);

    // it's not supported, fallback to default
    if (!values.includes(converted as AppLocale)) {
        return defaultLocale;
    }

    return converted as AppLocale;
}
