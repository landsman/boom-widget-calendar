import {AppLocale} from "@local/configuration/i18n";
import {CustomTheme} from "@local/configuration/organizer/theme";

export type OrganizerConfiguration = {
    organizerId: null | string;
    isProduction: boolean;
    fixedLocale: null | AppLocale;

    /** injected in runtime, not from url */
    customTheme?: undefined | CustomTheme;
};
