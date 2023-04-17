import {AppLocale} from "@local/configuration/i18n";

export type OrganizerConfiguration = {
    organizerId: null | string;
    isProduction: boolean;
    fixedLocale: null | AppLocale;
};
