import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import {CustomizedThemeOverride} from "./lib-mango/MangoTheme";
import {MangoGlobalStyle} from "./lib-mango/MangoGlobalStyle";
import {CustomFonts} from "./fonts";

type PropTypes = {
    children: ReactNode;
    customTheme: CustomizedThemeOverride;
}

/**
 * Basically just modified "MangoThemeProvider", to let me do overrides if it's needed
 */
export function CustomThemeProvider({ customTheme, children }: PropTypes): JSX.Element {
    return (
        <>
            <CustomFonts />
            <MangoGlobalStyle />
            <ThemeProvider theme={customTheme}>
                {children}
            </ThemeProvider>
        </>
    );
}
