import React from 'react';
import {Layout} from "@local/components/layout";
import {Content} from "@local/components/content";
import {CustomThemeProvider} from "@local/components/theme/provider";
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";
import {mockTheme, mockConfig} from "@local/configuration/boom-widget";
import {AppProvider, LocaleProvider} from "@local/runtime";
import {getCurrentDate} from "@local/utils/date-time/get-current-date";
import {AppLocale, detectLocaleResult} from "@local/configuration/i18n";

const currentDate = getCurrentDate();
const currentLocale = detectLocaleResult as AppLocale;

// todo: configuration from the outside, somehow!
const features = {
    allowTimeSlots: true,
}

function App() {
    // todo: check this
    const customTheme = mockTheme as CustomizedThemeOverride;
    return (
        <CustomThemeProvider customTheme={customTheme}>
            <AppProvider
                currentDate={currentDate}
                locale={currentLocale}
                features={features}
            >
                <LocaleProvider>
                    <Layout>
                        <Content widgetConfig={mockConfig} />
                    </Layout>
                </LocaleProvider>
            </AppProvider>
        </CustomThemeProvider>
    );
}

export default App;
