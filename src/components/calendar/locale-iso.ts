/**
 * this doesn't seem right, let's specify this on AppLocale level!
 *
 * @see AppLocale
 * @see Locale
 */
export function convertLocaleToISO(locale: string): string {
    if (locale === 'en') {
        return "en-GB";
    }
    return locale;
}
