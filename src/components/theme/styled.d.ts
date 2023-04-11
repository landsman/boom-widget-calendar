import {} from 'styled-components';
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends CustomizedThemeOverride {}
}
