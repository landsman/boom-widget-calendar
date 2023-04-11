import { i18n } from '@lingui/core';
import {AppLocale} from "@local/configuration/i18n/app-locale";

/**
 * We do a dynamic import of just the catalog that we need
 * @param locale any locale string
 *
 * @see AppLocale
 * @see ./lingui.config.js
 */
export async function dynamicActivate(locale: AppLocale): Promise<void> {
    let finalLocale = locale;
    try {
        const { messages } = await import(`@local/locales/${finalLocale}/messages`);
        i18n.load(locale, messages);
        i18n.activate(locale);
    } catch (e: any) {
        console.error(`Problem with loading i18n: "${finalLocale}".`, e);
    }
}
