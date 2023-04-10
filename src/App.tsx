import React from 'react';
import {Layout} from "./components/layout";
import {Content} from "./components/content";
import {CustomThemeProvider} from "./components/theme/provider";
import {CustomizedThemeOverride} from "./components/theme/lib-mango/MangoTheme";
import {mockTheme} from "./configuration/boom-widget/mock-theme";
import {mockConfig} from "./configuration/boom-widget/mock-config";
import {AppProvider} from "./runtime";
import {getCurrentDate} from "./utils/date-time/get-current-date";
import {Locale} from "./configuration/locale";

const currentDate = getCurrentDate();

// todo: make this work in truth
const currentLocale = Locale.en;

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
                <Layout>
                    <Content widgetConfig={mockConfig} />
                </Layout>
            </AppProvider>
        </CustomThemeProvider>
    );
}

export default App;
