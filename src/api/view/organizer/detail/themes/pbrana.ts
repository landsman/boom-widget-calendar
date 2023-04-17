import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";

const clientPravcickaBrana = {
    main: '#FFFFFF',
    secondary: '#94795D',
    labels: '#262626',
    background: '#FFFFFF',
};

export const pravcickaBranaTheme: CustomizedThemeOverride = {
    colors: {
        gray: [
            clientPravcickaBrana.main, // Icon white
            clientPravcickaBrana.background, // ticket type in order
            'transparent', // currency switcher,
            clientPravcickaBrana.secondary, // Border a icons
            clientPravcickaBrana.labels, // input borders,
            '#6C6C6C',
            '#4B4B4B',
            '#333333',
            '#262626',
            clientPravcickaBrana.labels, // labels
        ],
        violet: [
            '#F3EBFF',
            '#EDE2FC',
            '#24d347', // Disabled button colors
            '#24d347',
            '#861172',
            '#5db446',
            clientPravcickaBrana.secondary, // Buttons background, icon violet
            '#a2a98a',
            '#7b9822',
            '#FFF', // Button background hover
        ],
    },

    // ⚠️ customs...
    bodyBackground: '#E5E5E5',
    selectedDayColor: '#94795D',
    calendarBorder: '1px solid red',

    borderRadius: {
        xs: 0,
        sm: 0,
    }
}
