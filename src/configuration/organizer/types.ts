import {AppLocale} from "@local/configuration/i18n";
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";
import {FeatureTypes} from "@local/api/view/organizer/detail/features";

export type OrganizerConfiguration = {
    organizerId: null | string;
    isProduction: boolean;
    fixedLocale: null | AppLocale;
};

export type OrganisationDTO = {
    customTheme: null | CustomizedThemeOverride;
    features: null | FeatureTypes;
}
