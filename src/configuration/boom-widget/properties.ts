import { MantineThemeColors } from '@mantine/styles/lib/theme/types/MantineColor'

export type BoomWidgetConfigTypes = {
    eventId: string;
    eventUrl: string;
    theme: BoomWidgetConfigThemeTypes;
}

/**
 * keep this abstraction to know what's going on internally
 */
export type BoomWidgetConfigThemeColors = Partial<MantineThemeColors>;

export type BoomWidgetConfigThemeTypes = {
    colors: BoomWidgetConfigThemeColors;
}

