import {CustomizedThemeOverride, mangoTheme} from "@local/components/theme/lib-mango/MangoTheme";
import {CustomTheme} from "@local/api/view/organizer/detail/themes/_custom";

/**
 * lazy import file corresponding with theme name
 * because we don't have api for this, we have to load it from local file
 */
export async function getOrganiserCustomThemeData(theme: null | CustomTheme): Promise<null | CustomizedThemeOverride> {
    try {
        return new Promise((res, rej) => {
            import(`@local/api/view/organizer/detail/themes/${theme}`).then((data) => {
                res(data?.default);
            });
        });
    } catch (e: any) {
        console.error(`Specified theme: ${theme} do not exist! Fallback to default.`);
        return mangoTheme;
    }
}
