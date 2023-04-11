import {Locale} from "date-fns";
import {AppLocale} from "@local/configuration/i18n";

export type LocaleResponseTypes = {
    locale: AppLocale;
    switchLocale: (newLocale: string) => void,
    localeDataForCalendar: undefined | Locale;
};
