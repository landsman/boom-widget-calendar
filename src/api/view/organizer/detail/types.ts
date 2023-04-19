import {CustomTheme} from "@local/api/view/organizer/detail/themes/_custom";

/** app features */
export type FeatureTypes = {
    allowTimeSlots: boolean;
    localeSwitcher?: boolean;
};

/** for app context init */
export const featureDefaultValues: FeatureTypes = {
    allowTimeSlots: false,
    localeSwitcher: false,
};

/** dto response from "api" */
export type Organizer = {
    id: string;
    production: boolean;
    customTheme: null | CustomTheme;
    features: null | FeatureTypes;
};
