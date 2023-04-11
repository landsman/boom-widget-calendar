import {Dispatch, SetStateAction} from "react";
import type { Locale } from "date-fns";
import {AppLocale} from "@local/configuration/i18n";

/**
 * effective way how to load data only for current localization
 *
 * @see https://github.com/date-fns/date-fns/issues/856
 */
export async function lazyLoadLocale(
    locale: AppLocale,
    setLocaleData: Dispatch<SetStateAction<undefined | Locale>>,
): Promise<void> {
    try {
        // This webpack option stops all the date-fns files being imported and chunked.
        const module = await import(
            /* webpackMode: "lazy", webpackChunkName: "df-[index]", webpackExclude: /_lib/ */
            `date-fns/esm/locale/${locale}/index.js`
        );
        setLocaleData(module.default);
    } catch (error) {
        console.error(`Calendar - failed to load locale ${locale}`, error);
        throw error;
    }
}
