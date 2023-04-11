import {BoomWidgetConfigThemeColors, BoomWidgetConfigThemeTypes} from "./properties";

// todo: prepare design for both clients
const mockColors: BoomWidgetConfigThemeColors = {
    // gray: [
    //     '#ffffff', // Icon white
    //     '#274f5b',
    //     '#EDEDED',
    //     '#bc441e', // Border a icons
    //     '#BABABA',
    //     '#6C6C6C',
    //     '#4B4B4B',
    //     '#333333',
    //     '#262626',
    //     '#ffffff',
    // ],
    // violet: [
    //     '#F3EBFF',
    //     '#EDE2FC',
    //     '#24d347', // Disabled button colors
    //     '#24d347',
    //     '#861172',
    //     '#5db446',
    //     '#bc441e', // Buttons background, icon violet
    //     '#a2a98a',
    //     '#7b9822',
    //     '#b53209', // Button background hover
    // ],
};

// todo: resolve how to inject this from window object or other config outside this project
export const mockTheme: BoomWidgetConfigThemeTypes = {
    colors: mockColors,
}
