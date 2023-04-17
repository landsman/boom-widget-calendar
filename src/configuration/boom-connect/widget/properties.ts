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

/**
 * todo: compare it with: MangoCustomizedTheme
 */
export type BoomWidgetConfigThemeTypes = {
    colors: BoomWidgetConfigThemeColors;
    bodyBackground?: string;
    selectedDayColor?: string;
    calendarBorder?: string;
};

/**
 * possible fields
 */
export enum BoomDataConfigProperty {
    /** @deprecated */
    BOOM_WIDGET_CONFIG = 'BOOM_WIDGET_CONFIG',
    BOOM_WIDGET_API = 'BOOM_WIDGET_API',
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
    };
    [BoomDataConfigProperty.BOOM_WIDGET_API]?: {
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
