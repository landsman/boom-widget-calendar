import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";

/**
 * my custom DTO
 */
export type BoomWidgetConfigDTO = {
    eventId: string;
    eventUrl: string;
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
        placeSalesWidget: (
            containerElement: Element,
            eventWidgetInternalId: number,
            eventUrl: string,
            eventId: string,
            theme: CustomizedThemeOverride
        ) => void,
    };
    [BoomDataConfigProperty.BOOM_WIDGET_API]?: {
        placeSalesWidget?: (
            containerElement: Element,
            eventWidgetInternalId: number,
            eventUrl: string,
            eventId: string,
            theme: CustomizedThemeOverride
        ) => void,
    }
};

/**
 * let typescript know about boom's custom object in window
 */
export const windowBoomWidgetConfig = window as unknown as (Window & BoomWidgetConfigWindowFieldType);
