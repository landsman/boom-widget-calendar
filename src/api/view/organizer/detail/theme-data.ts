import {CustomizedThemeOverride, mangoTheme} from "@local/components/theme/lib-mango/MangoTheme";
import {CustomTheme} from "@local/api/view/organizer/detail/themes/_custom";
import {kvantarioTheme} from "@local/api/view/organizer/detail/themes/kvantario";
import {pravcickaBranaTheme} from "@local/api/view/organizer/detail/themes/pbrana";

/**
 * lazy import file corresponding with theme name
 * because we don't have api for this, we have to load it from local file
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
