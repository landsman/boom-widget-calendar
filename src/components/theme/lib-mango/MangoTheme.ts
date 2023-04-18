import { DEFAULT_THEME, MantineThemeOverride } from '@mantine/core'

import { mangoThemeConfig } from './MangoThemeConfig'

// todo: somehow merge with: BoomWidgetConfigThemeTypes
type MangoCustomizedTheme = {
    borderRadius: {
        xs: number
        sm: number
    };

    bodyBackground?: string;
    disabledDayColor?: string;
    selectedDayColor?: string;
    calendarTodayBorder?: string;
    calendarMonthArrowBg?: string;
    calendarMonthArrowIcon?: string;
    calendarMonthArrowBorder?: string;
    calendarBorder?: string;
    calendarShadow?: string;
    calendarTimeSlotBg?: string;
    calendarTimeSlotColor?: string;
}

export type CustomizedThemeOverride = MantineThemeOverride & MangoCustomizedTheme;

export const mangoTheme: CustomizedThemeOverride = {
    white: mangoThemeConfig.colors.gray?.[0] || DEFAULT_THEME.white,
    black: mangoThemeConfig.colors.gray?.[9] || DEFAULT_THEME.black,
    colorScheme: 'light',
    cursorType: 'pointer',

    primaryColor: 'violet',
    primaryShade: 6,

    fontFamily: 'Poppins',
    fontSizes: {
        xl: 28,
    },

    headings: {
        sizes: {
            h1: { fontSize: '42px', lineHeight: '42px' },
            h2: { fontSize: '28px', lineHeight: '40px' },
            h3: { fontSize: '26px', lineHeight: '30px' },
            h4: { fontSize: '20px' },
            h5: { fontSize: '16px' },
            h6: { fontSize: '12px' },
        },
    },

    spacing: {
        xs: 12,
        sm: 16,
        md: 24,
        lg: 32,
        xl: 40,
    },

    borderRadius: {
        xs: 4,
        sm: 6,
    },

    // NOTE: due to the fact that breakpoints weren't available in styled component props.
    breakpoints: DEFAULT_THEME.breakpoints,

    colors: mangoThemeConfig.colors,

    // https://github.com/mantinedev/mantine/discussions/660
    shadows: {
        xs:
            '0px 1px 6px rgba(33, 33, 33, 0.04),' +
            '0px 0px 8px rgba(33, 33, 33, 0.04);',

        sm:
            '0 7px 7px -5px rgba(33, 33, 33, 0.04),' +
            '0 10px 15px -5px rgba(33, 33, 33, 0.05),' +
            '0 1px 3px rgba(33, 33, 33, 0.05)',
    },

    // Customize Mantine default components with Styles API
    // https://mantine.dev/theming/mantine-provider/#styles-on-mantineprovider
    // todo: is this needed there? probably not
    components: {
        // ...MantineButton,
        // ...MantineBadge,
        // ...MantineCard,
        // ...MantineCheckbox,
    },
};
