import React from 'react';
import {Footer, Layout} from "@local/components/layout";
import {Content} from "@local/components/content";
import {CustomThemeProvider} from "@local/components/theme/provider";
import {CustomizedThemeOverride, mangoTheme} from "@local/components/theme/lib-mango/MangoTheme";
import {AppProvider, LocaleProvider} from "@local/runtime";
import {getCurrentDate} from "@local/utils/date-time";
import {isProduction} from "@local/configuration/environment";
import {AppLocale} from "@local/configuration/i18n";
import {FeatureTypes} from "@local/configuration/features";

type PropTypes = {
    fixedLocale?: undefined | AppLocale;
    features?: undefined | FeatureTypes;
    organizerId: string;
    customTheme?: undefined | CustomizedThemeOverride;
};

function App({ organizerId, fixedLocale, features, customTheme }: PropTypes) {
    const widgetStyles = {
        ...mangoTheme,
        ...customTheme || {},
    };
    return (
        <CustomThemeProvider customTheme={widgetStyles}>
            <AppProvider
                features={features}
                currentDate={getCurrentDate()}
                isProduction={isProduction()}
                organizerId={organizerId}
                themeConfig={widgetStyles}
            >
                <LocaleProvider fixedLocale={fixedLocale}>
                    <Layout bodyBackground={customTheme?.bodyBackground}>
                        <Content />
                        <Footer />
                    </Layout>
                </LocaleProvider>
            </AppProvider>
        </CustomThemeProvider>
    );
}

export default App;
