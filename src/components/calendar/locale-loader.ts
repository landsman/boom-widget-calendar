import type { Locale } from "date-fns";
import {Dispatch, SetStateAction} from "react";
import {convertLocaleToISO} from "./locale-iso";

/**
 * effective way how to load data only for current localization
 *
 * @see https://github.com/date-fns/date-fns/issues/856
 */
export async function lazyLoadLocale(
    locale: string,
    setLocaleData: Dispatch<SetStateAction<undefined | Locale>>,
): Promise<void> {
    const isoLocale = convertLocaleToISO(locale);
    try {
        // This webpack option stops all the date-fns files being imported and chunked.
        const module = await import(
            /* webpackMode: "lazy", webpackChunkName: "df-[index]", webpackExclude: /_lib/ */
            `date-fns/esm/locale/${isoLocale}/index.js`
        );
        setLocaleData(module.default);
    } catch (error) {
        console.error(`Calendar - failed to load locale ${isoLocale}`, error);
        throw error;
    }
}
