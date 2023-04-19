import {Organizer} from "@local/api/view/organizer/detail/types";
import {organizersDatabase} from "@local/api/view/organizer/detail/database";

/**
 * todo: this would be nice api endpoint
 */
export async function getOrganiserDetails(
    production: boolean,
    organizerId: null | string
): Promise<null | Organizer> {
    if (null === organizerId) {
        return null;
    }

    const byEnv = organizersDatabase.filter((org: Organizer) => production === org.production);
    const result = byEnv.filter((org) => org.id === organizerId).shift();

    return result || null;
}


