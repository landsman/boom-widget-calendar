import React, {useEffect, useState} from 'react';
import {Footer, Layout} from "@local/components/layout";
import {Content} from "@local/components/content";
import {CustomThemeProvider} from "@local/components/theme/provider";
import {AppProvider, LocaleProvider} from "@local/runtime";
import {getCurrentDate} from "@local/utils/date-time";
import {SplashScreen} from "@local/components/loader/splash-screen";
import {mangoTheme} from "@local/components/theme/lib-mango/MangoTheme";
import {OrganisationDTO, organizerInit} from "@local/configuration/organizer";

function App() {
    const [organisation, setOrganisation] = useState<null | OrganisationDTO>(null);

    useEffect(() => {
        if (null !== organisation) {
            return;
        }
        organizerInit().then((result) => {
            if (null !== result) {
                setOrganisation(result);
            }
        });
    }, [organisation]);

    if (null === organisation) {
        return <SplashScreen />;
    }

    // merge themes
    const widgetStyles = {
        ...mangoTheme,
        ...organisation.customTheme || {},
    };

    return (
        <CustomThemeProvider customTheme={widgetStyles}>
            <LocaleProvider>
                <AppProvider
                    features={organisation!.features}
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
