import React from 'react';
import {Layout} from "./components/layout";
import {Content} from "./components/content";
import {mockTheme} from "./configuration/boom-widget/mock-theme";
import {CustomThemeProvider} from "./components/theme/provider";
import {CustomizedThemeOverride} from "./components/theme/lib-mango/MangoTheme";

function App() {
    // todo: check this
    const customTheme = mockTheme as CustomizedThemeOverride;
    return (
        <Layout>
            <CustomThemeProvider customTheme={customTheme}>
                <Content widgetTheme={mockTheme}/>
            </CustomThemeProvider>
        </Layout>
    );
}

export default App;
