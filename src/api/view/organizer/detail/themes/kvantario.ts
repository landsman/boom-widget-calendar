import {BoomWidgetConfigThemeTypes} from "@local/configuration/boom-connect";

const clientKvantario = {
    main: '#1F1940',
    secondary: '#9E17FF',
    labels: '#DDD6ED',
    background: '#1A1135',
};

// todo: resolve how to inject this from window object or other config outside this project
export const kvantarioTheme: BoomWidgetConfigThemeTypes = {
    colors: {
        gray: [
            clientKvantario.main, // Icon white
            clientKvantario.background, // ticket type in order
            'transparent', // currency switcher,
            clientKvantario.secondary, // Border a icons
            clientKvantario.labels, // input borders,
            '#6C6C6C',
            '#4B4B4B',
            '#333333',
            '#262626',
            clientKvantario.labels, // labels
        ],
        violet: [
            '#F3EBFF',
            '#EDE2FC',
            '#24d347', // Disabled button colors
            '#24d347',
            '#861172',
            '#5db446',
            clientKvantario.secondary, // Buttons background, icon violet
            '#a2a98a',
            '#7b9822',
            '#FFF', // Button background hover
        ],
    },
    // ⚠️ customs...
    bodyBackground: '#1A1135',
    selectedDayColor: '#D527D7',
}
