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
            clientPravcickaBrana.main, // currency switcher,
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

    disabledDayColor: '#665D78',
    selectedDayColor: '#94795D',
    calendarTodayBorder: '1px solid #94795D',

    calendarMonthArrowBg: 'transparent',
    calendarMonthArrowBorder: '1px solid #D9D9D9',
    calendarMonthArrowIcon: '#000000',

    calendarBorder: '1px solid #94795D',
    calendarShadow: '0px 10px 10px -5px rgba(33, 33, 33, 0.04), 0px 20px 25px -5px rgba(33, 33, 33, 0.05), 0px 1px 3px rgba(33, 33, 33, 0.05);',

    calendarTimeSlotBg: '#363152',
    calendarTimeSlotColor: '#FFFFFF',

    borderRadius: {
        xs: 0,
        sm: 0,
    }
}
