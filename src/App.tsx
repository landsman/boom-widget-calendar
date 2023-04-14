import React, {useEffect} from 'react';
import {Footer, Layout} from "@local/components/layout";
import {Content} from "@local/components/content";
import {CustomThemeProvider} from "@local/components/theme/provider";
import {CustomizedThemeOverride, mangoTheme} from "@local/components/theme/lib-mango/MangoTheme";
import {AppProvider, LocaleProvider} from "@local/runtime";
import {getCurrentDate} from "@local/utils/date-time";
import {isProduction} from "@local/configuration/environment";
import {AppLocale} from "@local/configuration/i18n";
import {FeatureTypes} from "@local/configuration/features";
import {loadBoomScripts} from "@local/components/widget";

type PropTypes = {
    fixedLocale?: undefined | AppLocale;
    features: FeatureTypes;
    organizerId: string;
    customTheme?: undefined | CustomizedThemeOverride;
};

const prod = isProduction();

function App({ organizerId, fixedLocale, features, customTheme }: PropTypes) {
    const widgetStyles = {
        ...mangoTheme,
        ...customTheme || {},
    };

    /** load boom external files */
    useEffect(() => {
        loadBoomScripts(prod);
    }, [])

    return (
        <CustomThemeProvider customTheme={widgetStyles}>
            <AppProvider
                features={features}
                currentDate={getCurrentDate()}
                isProduction={prod}
                organizerId={organizerId}
                themeConfig={widgetStyles}
            >
                <LocaleProvider fixedLocale={fixedLocale}>
                    <Layout
                        bodyBackground={customTheme?.bodyBackground}
                        selectedDayColor={customTheme?.selectedDayColor}
                    >
                        <Content />
                        <Footer />
                    </Layout>
                </LocaleProvider>
            </AppProvider>
        </CustomThemeProvider>
    );
}

export default App;
