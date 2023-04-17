import {Organizer} from "@local/api/view/organizer/detail/type";
import {CustomTheme} from "@local/api/view/organizer/detail/custom-theme";
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";
import {kvantarioTheme} from "@local/api/view/organizer/detail/themes/kvantario";

/**
 * this would be nice API!
 */
const organizersDatabase: Organizer[] = [
    {
        // michal landsman @ stage
        id: "e43780b9-a220-42d3-a026-cc97875a61e3",
        production: false,
        customTheme: CustomTheme.KVATARIO,
    },
    {
        id: "123456",
        production: false,
        customTheme: CustomTheme.KVATARIO,
    },
    {
        id: "1111",
        production: false,
        customTheme: CustomTheme.PRAVCICKA_BRANA,
    },
]

/**
 * this would be nice api endpoint
 */
function getOrganiserDetails(production: boolean, id: string): null | Organizer {

    const result = organizersDatabase.filter((org: Organizer): boolean => {
        return production === org.production && id === org.id;
    }).shift();

    return result || null;
}

/**
 * lazy import file corresponding with theme name
 * todo!!!
 */
function getOrganiserCustomThemeData(theme: null | CustomTheme): null | CustomizedThemeOverride {
    switch (theme) {
        case CustomTheme.KVATARIO:
            // todo: get rid of type casting
            return kvantarioTheme as CustomizedThemeOverride;

        // todo
        case CustomTheme.PRAVCICKA_BRANA:
            return null;

        default:
            return null;
    }
}

/**
 * simulate api endpoint
 */
export function getCustomThemeDataByOrganiserId(
    production: boolean,
    id: null | string
): null | CustomizedThemeOverride {

    if (null == id) {
        return null;
    }

    const details = getOrganiserDetails(production, id);

    if (null == details) {
        return null;
    }

    return getOrganiserCustomThemeData(details.customTheme);
}
