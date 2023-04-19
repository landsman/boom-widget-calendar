import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";

const clientKvantario = {
    main: '#1F1940',
    secondary: '#9E17FF',
    labels: '#DDD6ED',
    background: '#1A1135',
};

const kvantarioTheme: CustomizedThemeOverride = {
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
    loaderColor: '#FFFFFF',

    // todo
    //customFontFamilyName: "",

    bodyBackground: '#1A1135',

    disabledDayColor: '#665D78',
    calendarTodayBorder: '1px solid #D527D7',
    selectedDayColor: '#D527D7',

    calendarMonthArrowBg: '#363053',
    calendarMonthArrowIcon: '#FFFFFF',

    calendarTimeSlotBg: '#363152',
    calendarTimeSlotColor: '#FFFFFF',

    flashMessageBg: '#251D3F',

    borderRadius: {
        xs: 4,
        sm: 6,
    }
};

export default kvantarioTheme;
