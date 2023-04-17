import {AppLocale} from "@local/configuration/i18n";

/**
 * It has to be compatible between `lingui` and `date-fns`
 *
 * @see AppLocale
 * @see Locale
 */
export function convertLocaleToISO(locale: string): string {
    const lowercase = locale.toLocaleLowerCase();

    if (lowercase === 'cs' || lowercase.includes("cs-")) {
        return AppLocale.CS;
    }

    // for slovak is czech better than english I guess
    if (lowercase === 'sk' || lowercase.includes("sk-")) {
        return AppLocale.CS;
    }

    if (lowercase === 'en' || lowercase.includes("en-")) {
        return AppLocale.EN;
    }

    return locale;
}
