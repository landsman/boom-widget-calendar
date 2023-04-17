import {CustomTheme} from "@local/api/view/organizer/detail/custom-theme";
import {FeatureTypes} from "@local/api/view/organizer/detail/features";

export type Organizer = {
    id: string;
    production: boolean;
    customTheme: null | CustomTheme;
    features: null | FeatureTypes;
}
