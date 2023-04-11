import { MantineThemeColors } from '@mantine/styles/lib/theme/types/MantineColor'

export type BoomWidgetConfigTypes = {
    organizerId: string;
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
    bodyBackground?: string;
};

/**
 * possible fields
 */
export enum BoomDataConfigProperty {
    WIDGET_CONFIG = 'WIDGET_CONFIG',
    WIDGET_CONFIG_PREVIEW = 'WIDGET_CONFIG_PREVIEW',
}

/**
 * interface of window objects
 */
type BoomWidgetConfigWindowFieldType = {
    [BoomDataConfigProperty.WIDGET_CONFIG]?: BoomWidgetConfigTypes;
    [BoomDataConfigProperty.WIDGET_CONFIG_PREVIEW]?: {};
    placeSalesWidget?: (
        containerElement: Element,
        eventWidgetInternalId: number,
        eventUrl: string,
        eventId: string,
        theme: BoomWidgetConfigThemeTypes
    ) => void,
};

/**
 * let typescript know about boom's custom object in window
 */
export const windowBoomWidgetConfig = window as unknown as (Window & BoomWidgetConfigWindowFieldType);
