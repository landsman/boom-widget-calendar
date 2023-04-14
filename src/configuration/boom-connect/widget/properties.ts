import { MantineThemeColors } from '@mantine/styles/lib/theme/types/MantineColor'

/**
 * my custom DTO
 */
export type BoomWidgetConfigDTO = {
    eventId: string;
    eventUrl: string;
};

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
    BOOM_WIDGET_CONFIG = 'BOOM_WIDGET_CONFIG',
}

/**
 * interface of window objects
 */
type BoomWidgetConfigWindowFieldType = {
    [BoomDataConfigProperty.BOOM_WIDGET_CONFIG]?: {
        placeSalesWidget?: (
            containerElement: Element,
            eventWidgetInternalId: number,
            eventUrl: string,
            eventId: string,
            theme: BoomWidgetConfigThemeTypes
        ) => void,
    }
};

/**
 * let typescript know about boom's custom object in window
 */
export const windowBoomWidgetConfig = window as unknown as (Window & BoomWidgetConfigWindowFieldType);
