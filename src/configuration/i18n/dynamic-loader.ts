import { i18n } from '@lingui/core';

/**
 * We do a dynamic import of just the catalog that we need
 * @param locale any locale string
 */
export async function dynamicActivate(locale: string): Promise<void> {
    try {
        const { messages } = await import(`@local/locales/${locale}/messages`);
        i18n.load(locale, messages);
        i18n.activate(locale);
    } catch (e: any) {
        console.error(`Problem with loading i18n: "${locale}".`, e);
    }
}
