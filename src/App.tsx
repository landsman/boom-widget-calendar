import React from 'react';
import {Footer, Layout} from "@local/components/layout";
import {Content} from "@local/components/content";
import {CustomThemeProvider} from "@local/components/theme/provider";
import {CustomizedThemeOverride, mangoTheme} from "@local/components/theme/lib-mango/MangoTheme";
import {AppProvider, LocaleProvider} from "@local/runtime";
import {getCurrentDate} from "@local/utils/date-time";
import {FeatureTypes} from "@local/configuration/features";
import {SplashScreen} from "@local/components/loader/splash-screen";
import {buildConfigFromUrl} from "@local/configuration/organizer";
import {getCustomThemeDataByOrganiserId} from "@local/api/view/organizer/detail/organizer-detail";

type PropTypes = {
    features: FeatureTypes;
    customTheme1?: undefined | CustomizedThemeOverride;
};

function App({ features }: PropTypes) {
    const { isProduction, organizerId } = buildConfigFromUrl();
    const customTheme = getCustomThemeDataByOrganiserId(isProduction, organizerId);

    // merge themes
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
                            bodyBackground={widgetStyles?.bodyBackground}
                            selectedDayColor={widgetStyles?.selectedDayColor}
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
