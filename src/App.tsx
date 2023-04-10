import React from 'react';
import {Layout} from "./components/layout";
import {Content} from "./components/content";
import {CustomThemeProvider} from "./components/theme/provider";
import {CustomizedThemeOverride} from "./components/theme/lib-mango/MangoTheme";
import {mockTheme} from "./configuration/boom-widget/mock-theme";
import {mockConfig} from "./configuration/boom-widget/mock-config";

function App() {
    // todo: check this
    const customTheme = mockTheme as CustomizedThemeOverride;
    return (
        <Layout>
            <CustomThemeProvider customTheme={customTheme}>
                <Content widgetConfig={mockConfig} />
            </CustomThemeProvider>
        </Layout>
    );
}

export default App;
