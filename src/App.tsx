import React from 'react';
import {Footer, Layout} from "@local/components/layout";
import {Content} from "@local/components/content";
import {CustomThemeProvider} from "@local/components/theme/provider";
import {CustomizedThemeOverride, mangoTheme} from "@local/components/theme/lib-mango/MangoTheme";
import {AppProvider, LocaleProvider} from "@local/runtime";
import {getCurrentDate} from "@local/utils/date-time";
import {FeatureTypes} from "@local/configuration/features";
import {SplashScreen} from "@local/components/loader/splash-screen";

type PropTypes = {
    features: FeatureTypes;
    customTheme?: undefined | CustomizedThemeOverride;
};

function App({ features, customTheme }: PropTypes) {
    const widgetStyles = {
        ...mangoTheme,
        ...customTheme || {},
    };

    return (
        <CustomThemeProvider customTheme={widgetStyles}>
            <LocaleProvider>
                <AppProvider
                    features={features}
                    currentDate={getCurrentDate()}
                    themeConfig={widgetStyles}
                >
                    <SplashScreen />
                        <Layout
                            bodyBackground={customTheme?.bodyBackground}
                            selectedDayColor={customTheme?.selectedDayColor}
                        >
                            <Content />
                            <Footer />
                        </Layout>
                </AppProvider>
            </LocaleProvider>
        </CustomThemeProvider>
    );
}

export default App;
