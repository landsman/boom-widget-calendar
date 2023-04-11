import {AppLocale} from "@local/configuration/i18n/app-locale";

type KeyValuePair = {
    key: AppLocale,
    value: string;
}

export const localeWithNames: KeyValuePair[] = [
    {
        key: AppLocale.en,
        value: "English",
    },
    {
        key: AppLocale.cs,
        value: "Česky",
    },
];
