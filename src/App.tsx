import React from 'react';
import {Footer, Layout} from "@local/components/layout";
import {Content} from "@local/components/content";
import {CustomThemeProvider} from "@local/components/theme/provider";
import {CustomizedThemeOverride, mangoTheme} from "@local/components/theme/lib-mango/MangoTheme";
import {AppProvider, LocaleProvider} from "@local/runtime";
import {getCurrentDate} from "@local/utils/date-time/get-current-date";
import {isProduction} from "@local/configuration/environment";
import {AppLocale} from "@local/configuration/i18n";
import {FeatureTypes} from "@local/configuration/features";
import {mangoThemeConfig} from "@local/components/theme/lib-mango/MangoThemeConfig";
import {mockConfig} from "@local/configuration/boom-connect";

type PropTypes = {
    fixedLocale?: undefined | AppLocale;
    features?: undefined | FeatureTypes;
    customTheme?: undefined | CustomizedThemeOverride;
};

function App({ fixedLocale, features, customTheme }: PropTypes) {

    // todo: get rid of?
    const widgetStyles = {
        ...mangoTheme,
        ...mangoThemeConfig.colors,
        ...mockConfig,
        ...{}
    };

    return (
        <CustomThemeProvider customTheme={mangoTheme}>
            <AppProvider
                currentDate={getCurrentDate()}
                features={features}
                isProduction={isProduction()}
            >
                <LocaleProvider fixedLocale={fixedLocale}>
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
