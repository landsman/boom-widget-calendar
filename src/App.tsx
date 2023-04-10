import React from 'react';
import {Layout} from "./components/layout";
import {Content} from "./components/content";
import {CustomThemeProvider} from "./components/theme/provider";
import {CustomizedThemeOverride} from "./components/theme/lib-mango/MangoTheme";
import {mockTheme} from "./configuration/boom-widget/mock-theme";
import {mockConfig} from "./configuration/boom-widget/mock-config";
import {AppProvider} from "./runtime";
import {initCurrentDate} from "./runtime/data/init-current-date";
import {Locale} from "./configuration/locale";

const currentDate = initCurrentDate();

// todo: make this work in truth
const currentLocale = Locale.en;

function App() {
    // todo: check this
    const customTheme = mockTheme as CustomizedThemeOverride;
    return (
        <Layout>
            <CustomThemeProvider customTheme={customTheme}>
                <AppProvider
                    currentDate={currentDate}
                    locale={currentLocale}
                >
                    <Content widgetConfig={mockConfig} />
                </AppProvider>
            </CustomThemeProvider>
        </Layout>
    );
}

export default App;
