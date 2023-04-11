import React from 'react';
import {Layout} from "@local/components/layout";
import {Content} from "@local/components/content";
import {CustomThemeProvider} from "@local/components/theme/provider";
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";
import {mockTheme, mockConfig} from "@local/configuration/boom-widget";
import {AppProvider, LocaleProvider} from "@local/runtime";
import {getCurrentDate} from "@local/utils/date-time/get-current-date";
import {AppLocale, detectLocaleResult} from "@local/configuration/i18n";
import {isProduction} from "@local/configuration/environment/production";
import {mangoThemeConfig} from "@local/components/theme/lib-mango/MangoThemeConfig";

const prod = isProduction();
const currentDate = getCurrentDate();
const currentLocale = detectLocaleResult as AppLocale;

// todo: configuration from the outside, somehow!
const features = {
    allowTimeSlots: true,
}

function App() {
    // todo: check this
    const customTheme = mockTheme as CustomizedThemeOverride;
    const widgetStyles = {
        ...mangoThemeConfig.colors,
        ...mockConfig,
        ...{}
    };

    return (
        <CustomThemeProvider customTheme={customTheme}>
            <AppProvider
                currentDate={currentDate}
                locale={currentLocale}
                features={features}
                isProduction={prod}
            >
                <LocaleProvider>
                    <Layout>
                        <Content widgetConfig={widgetStyles} />
                    </Layout>
                </LocaleProvider>
            </AppProvider>
        </CustomThemeProvider>
    );
}

export default App;
