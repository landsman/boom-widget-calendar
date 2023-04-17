import {getOrganizerId} from "@local/runtime/url-query-params";
import {OrganizerConfiguration} from "@local/configuration/organizer/types";

/**
 * get and build object to be used in test of the app as main configuration for the organizer
 * todo: add: "features", "theme" load from static file config based on org id
 */
export function buildConfigFromUrl(): OrganizerConfiguration {
    const organizerId = getOrganizerId();

    return {
        organizerId,
    }
}
