import {AppLocale} from "@local/configuration/i18n";
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";
import {FeatureTypes} from "@local/api/view/organizer/detail";

export type OrganizerConfiguration = {
    organizerId: null | string;
    isProduction: boolean;
    fixedLocale: null | AppLocale;
    scrolling: boolean;
};

export type OrganisationDTO = {
    customTheme: null | CustomizedThemeOverride;
    features: null | FeatureTypes;
    scrolling: boolean;
}
