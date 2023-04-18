import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";
import {getSafeFontFamily} from "@local/components/theme/fonts/safe-font";

const clientPravcickaBrana = {
    main: '#FFFFFF',
    secondary: '#94795D',
    labels: '#262626',
    background: '#FFFFFF',
    googleFont: 'Poppins', // in figma is "Gotham" font :(
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

    loaderColor: '#000000',

    customFontFamilyName: clientPravcickaBrana.googleFont,
    customFontFamilySafeValue: getSafeFontFamily(clientPravcickaBrana.googleFont),

    // ⚠️ customs...
    bodyBackground: '#F4F2EF',

    disabledDayColor: '#665D78',
    selectedDayColor: '#94795D',
    calendarTodayBorder: '1px solid #94795D',

    calendarDayNameColor: '#4A4A4A',
    calendarMonthArrowBg: '#FFFFFF',
    calendarMonthArrowBgHover: '#E7E2DC',
    calendarMonthArrowBorder: '1px solid #94795D',
    calendarMonthArrowIcon: '#94795D',
    calendarMonthArrowIconHover: '#94795D',

    calendarBorder: '1px solid #94795D',
    calendarShadow: '0px 10px 10px -5px rgba(33, 33, 33, 0.04), 0px 20px 25px -5px rgba(33, 33, 33, 0.05), 0px 1px 3px rgba(33, 33, 33, 0.05);',

    calendarTimeSlotBg: '#363152',
    calendarTimeSlotColor: '#FFFFFF',

    flashMessageBg: '#E7E2DC',

    borderRadius: {
        xs: 0,
        sm: 0,
    }
}
