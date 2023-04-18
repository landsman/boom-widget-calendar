import {getFixedLocale, getOrganizerId} from "@local/runtime/url-query-params";
import {OrganizerConfiguration} from "@local/configuration/organizer/types";
import {isProduction} from "@local/configuration/environment";
import {chooseFromSupported} from "@local/configuration/i18n";

/**
 * get and build object to be used in test of the app as main configuration for the organizer
 */
export function buildConfigFromUrl(): OrganizerConfiguration {
    const organizerId = getOrganizerId();
    const prod = isProduction();

    // fixedLocale
    const localeParamValue = getFixedLocale();
    const localeFinal = localeParamValue ? chooseFromSupported(localeParamValue) : null;

    return {
        organizerId,
        isProduction: prod,
        fixedLocale: localeFinal,
    }
}
