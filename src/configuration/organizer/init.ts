import {buildConfigFromUrl} from "@local/configuration/organizer/build-config-from-url";
import {
    featureDefaultValues,
    getOrganiserCustomThemeData,
    getOrganiserDetails
} from "@local/api/view/organizer/detail";
import {OrganisationDTO} from "@local/configuration/organizer/types";

/**
 * agregate business logic to one place
 */
export async function organizerInit(): Promise<null | OrganisationDTO> {
    const {isProduction, organizerId} = buildConfigFromUrl();
    const organizerData = await getOrganiserDetails(isProduction, organizerId);

    // case when org is not configured, special
    if (null == organizerData) {
        console.warn("Organizer data not found, fallback...");
        return {
            customTheme: null,
            features: featureDefaultValues,
        };
    }

    const customTheme = await getOrganiserCustomThemeData(organizerData.customTheme);

    return {
        customTheme,
        features: organizerData.features,
    }
}
