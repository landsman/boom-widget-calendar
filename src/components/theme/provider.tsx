import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import {CustomizedThemeOverride} from "./lib-mango/MangoTheme";
import {GlobalStyle} from "@local/components/theme/global-styles";
import {GoogleFonts} from "@local/components/theme/fonts";

type PropTypes = {
    children: ReactNode;
    customTheme: CustomizedThemeOverride;
    scrolling?: boolean;
}

/**
 * Basically just modified "MangoThemeProvider", to let me do overrides if it's needed
 */
export function CustomThemeProvider({ customTheme, scrolling, children }: PropTypes): JSX.Element {
    const googleFont = customTheme.customFontFamilyName || 'Open Sans';
    return (
        <>
            <GoogleFonts googleFontFamilyName={googleFont} />
            <GlobalStyle
                mainFontSafeValue={googleFont}
                scrolling={scrolling}
            />
            <ThemeProvider theme={customTheme}>
                {children}
            </ThemeProvider>
        </>
    );
}
