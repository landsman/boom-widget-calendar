import {defaultLocale, LocaleResponseTypes} from "@local/configuration/i18n";

export const localeContextDefaultValues: LocaleResponseTypes = {
    locale: defaultLocale,
    isFixed: false,
    switchLocale: (_l: string) => null,
    localeDataForCalendar: undefined,
};
