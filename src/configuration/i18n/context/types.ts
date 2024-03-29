import {Locale} from "date-fns";
import {AppLocale} from "@local/configuration/i18n";

export type LocaleResponseTypes = {
    locale: AppLocale;
    isFixed: boolean;
    switchLocale: (newLocale: string, manual: boolean) => void,
    localeDataForCalendar: undefined | Locale;
};
