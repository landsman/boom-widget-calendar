import React from 'react';
import {Footer, Layout} from "@local/components/layout";
import {Content} from "@local/components/content";
import {CustomThemeProvider} from "@local/components/theme/provider";
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";
import {mockConfig, mockTheme} from "@local/configuration/boom-connect";
import {AppProvider, LocaleProvider} from "@local/runtime";
import {getCurrentDate} from "@local/utils/date-time/get-current-date";
import {isProduction} from "@local/configuration/environment";
import {mangoThemeConfig} from "@local/components/theme/lib-mango/MangoThemeConfig";
import {AppLocale} from "@local/configuration/i18n";

const prod = isProduction();
const currentDate = getCurrentDate();

// todo: configuration from the outside, somehow!
const features = {
    allowTimeSlots: true,
}

// todo, just debug
const forceLocale = AppLocale.cs;

// todo: check this
const customTheme = mockTheme as CustomizedThemeOverride;
const widgetStyles = {
    ...mangoThemeConfig.colors,
    ...mockConfig,
    ...{}
};

function App() {
    return (
        <CustomThemeProvider customTheme={customTheme}>
            <AppProvider
                currentDate={currentDate}
                features={features}
                isProduction={prod}
            >
                <LocaleProvider forceLocale={forceLocale}>
                    <Layout>
                        <Content widgetConfig={widgetStyles} />
                        <Footer />
                    </Layout>
                </LocaleProvider>
            </AppProvider>
        </CustomThemeProvider>
    );
}

export default App;
