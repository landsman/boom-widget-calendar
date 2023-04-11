import { MantineThemeColors } from '@mantine/styles/lib/theme/types/MantineColor'

export type BoomWidgetConfigTypes = {
    organizerId: string;
    eventId?: string;
    eventUrl?: string;
    theme: BoomWidgetConfigThemeTypes;
}

/**
 * keep this abstraction to know what's going on internally
 */
export type BoomWidgetConfigThemeColors = Partial<MantineThemeColors>;

export type BoomWidgetConfigThemeTypes = {
    colors: BoomWidgetConfigThemeColors;
}

/**
 * let typescript know about boom's custom object in window
 */
export const windowBoomWidgetConfig = window as unknown as (Window & { WIDGET_CONFIG: BoomWidgetConfigTypes });
export const widgetBoomConfigPreview = window as unknown as (Window & { WIDGET_CONFIG_PREVIEW: BoomWidgetConfigTypes });
