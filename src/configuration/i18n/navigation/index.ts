import {AppLocale} from "@local/configuration/i18n/app-locale";

type KeyValuePair = {
    key: AppLocale,
    value: string;
    emoji: string;
}

export const localeWithNames: KeyValuePair[] = [
    {
        key: AppLocale.EN,
        value: "English",
        emoji: "🇬🇧",
    },
    {
        key: AppLocale.CS,
        value: "Česky",
        emoji: "🇨🇿",
    },
];
