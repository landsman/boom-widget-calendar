import {defaultLocale} from "@local/configuration/i18n";

export const localeContextDefaultValues = {
    locale: defaultLocale,
    switchLocale: (_l: string) => null,
    localeDataForCalendar: undefined,
};
