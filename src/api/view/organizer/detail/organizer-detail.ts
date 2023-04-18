import {Organizer} from "@local/api/view/organizer/detail/type";
import {CustomTheme} from "@local/api/view/organizer/detail/custom-theme";
import {CustomizedThemeOverride, mangoTheme} from "@local/components/theme/lib-mango/MangoTheme";
import {kvantarioTheme} from "@local/api/view/organizer/detail/themes/kvantario";
import {pravcickaBranaTheme} from "@local/api/view/organizer/detail/themes/pbrana";

/**
 * this would be nice API!
 */
const organizersDatabase: Organizer[] = [
    {
        // michal landsman @ stage
        id: "e43780b9-a220-42d3-a026-cc97875a61e3",
        production: false,
        customTheme: CustomTheme.KVANTARIO,
        features: {
            allowTimeSlots: true,
        },
    },
    {
        // michal landsman 2 @ stage
        id: "37b08079-4066-4156-be9d-a5637d0d0ee7",
        production: false,
        customTheme: CustomTheme.PRAVCICKA_BRANA,
        features: null,
    },
    {
        id: "1111",
        production: false,
        customTheme: CustomTheme.PRAVCICKA_BRANA,
        features: null,
    },
]

/**
 * this would be nice api endpoint
 * todo: prepare app to case when we don't find organiser...
 */
export async function getOrganiserDetails(
    production: boolean,
    organizerId: null | string
): Promise<null | Organizer> {
    if (null === organizerId) {
        return null;
    }

    //const byEnv = organizersDatabase.filter((org: Organizer) => production === org.production);
    const result = organizersDatabase.filter((org) => org.id === organizerId).shift();
    console.log("Result", result);

    return result || null;
}

/**
 * lazy import file corresponding with theme name
 */
export async function getOrganiserCustomThemeData(theme: null | CustomTheme): Promise<null | CustomizedThemeOverride> {
    switch (theme) {
        case CustomTheme.KVANTARIO:
            return kvantarioTheme;

        case CustomTheme.PRAVCICKA_BRANA:
            return pravcickaBranaTheme;

        default:
            // todo: prepare default!
            return mangoTheme;
    }
}
