import { MantineThemeColors } from '@mantine/styles/lib/theme/types/MantineColor'

export const mangoThemeConfig: {
    colors: Partial<MantineThemeColors>
} = {
    colors: {
        gray: [
            '#FCFCFC',
            '#F7F7F7',
            '#EDEDED',
            '#D8D8D8',
            '#BABABA',
            '#6C6C6C',
            '#4B4B4B',
            '#333333',
            '#262626',
            '#212121',
        ],

        violet: [
            '#F3EBFF',
            '#EDE2FC',
            '#DFCEF7',
            '#C9ADF0',
            '#AC82E6',
            '#884FDA',
            '#6117C9',
            '#4B00B5',
            '#380087',
            '#2E006E',
        ],

        orange: [
            '#FFF1EB',
            '#FDE6DC',
            '#F9CAB7',
            '#F29D79',
            '#E8632A',
            '#DA4A0D',
            '#C7450E',
            '#AC3908',
            '#8E2D03',
            '#6E2100',
        ],

        green: [
            '#E3FFED',
            '#C1FFDA',
            '#9FFFC9',
            '#5DF7A5',
            '#28E886',
            '#04D16C',
            '#00B25D',
            '#008B3D',
            '#006223',
            '#003B10',
        ],

        red: [
            '#FFE3E3',
            '#FED0D1',
            '#FD9596',
            '#F54F51',
            '#E51719',
            '#CC0002',
            '#AC0002',
            '#870002',
            '#600001',
            '#3B0001',
        ],

        cyan: [
            '#E3FAFF',
            '#C1F6FF',
            '#9FF1FF',
            '#5CE0FC',
            '#26CBEF',
            '#00B2D9',
            '#0095B5',
            '#00758D',
            '#005263',
            '#00313B',
        ],

        yellow: [
            '#FFFAE3',
            '#F9EEB2',
            '#F4E383',
            '#EDD23B',
            '#E5C100',
            '#E5B800',
            '#E4AB00',
            '#E29B00',
            '#E08A00',
            '#DE7A00',
        ],
    },
}

export type OverrideColorPaletteCodes = keyof typeof mangoThemeConfig['colors']
