import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";
import {getSafeFontFamily} from "@local/components/theme/fonts/safe-font";

const clientPubQuiz = {
    main: '#FFFFFF',
    secondary: '#FF0000B2',
    labels: '#000000',
    background: '#FFFFFF',
    googleFont: 'Montserrat',
    shadows: '0px 7px 7px -5px rgba(0, 0, 0, 0.02), 0px 10px 15px -5px rgba(0, 0, 0, 0.03), 0px 1px 3px 0px rgba(0, 0, 0, 0.03)',
};

/**
 * Figma: https://www.figma.com/file/mEss2Av6En0RwshfgDajo7/PubQuiz-custom-designs?type=design&node-id=27%3A9725&mode=design&t=ILvoEvzjVdwCLC3q-1
 */
const pubQuizTheme: CustomizedThemeOverride = {
    colors: {
        gray: [
            clientPubQuiz.main, // Icon white
            clientPubQuiz.background, // ticket type in order
            clientPubQuiz.main, // currency switcher,
            clientPubQuiz.secondary, // Border a icons
            '#D9D9D9', // input borders,
            '#6C6C6C',
            '#4B4B4B',
            '#333333',
            '#262626',
            clientPubQuiz.labels, // labels
        ],
        violet: [
            '#F3EBFF',
            '#EDE2FC',
            '#24d347', // Disabled button colors
            '#24d347',
            '#861172',
            '#5db446',
            clientPubQuiz.secondary, // Buttons background, icon violet
            '#FF6666',
            '#7b9822',
            '#FFF', // Button background hover
        ],
    },

    loaderColor: '#000000',

    customFontFamilyName: clientPubQuiz.googleFont,
    customFontFamilySafeValue: getSafeFontFamily(clientPubQuiz.googleFont),

    // ⚠️ customs...
    bodyBackground: '#FFFFFF',

    leftSize: '36.5%',
    rightSize: '63.5%',

    disabledDayColor: '#4B4B4B',
    disabledDayAndTodayBg: '#FFF',
    calendarAvailableDayColor: '#000',
    selectedDayColor: '#F66767',
    calendarTodayBorder: '1.2px solid rgba(255, 0, 0, 0.70)',

    calendarPadding: '16px',
    calendarPaddingMobile: '20px',

    calendarDayNameColor: '#626262',
    calendarMonthArrowBg: '#FFFFFF',
    calendarMonthArrowBgHover: '#FFD5D5',
    calendarMonthArrowBorder: '1px solid #FF0000B2',
    calendarMonthArrowIcon: '#FF0000B2',
    calendarMonthArrowIconHover: '#FF0000B2',

    calendarBorder: '1px solid #E8E8E8',
    calendarShadow: clientPubQuiz.shadows,

    calendarTimeSlotBg: '#FFF',
    calendarTimeSlotBgHover: '#FFD5D5',
    calendarTimeSlotColor: '#000',
    calendarTimeSlotColorActive: '#FFF',
    calendarTimeSlotBorder: `1px solid ${clientPubQuiz.secondary}`,

    flashMessageBg: '#FFF',
    flashMessageColor: '#000',
    flashMessageShadow: clientPubQuiz.shadows,

    borderRadius: {
        xs: 4,
        sm: 6,
    }
};

export default pubQuizTheme;
