import {BoomWidgetConfigThemeTypes} from "@local/configuration/boom-connect";

type BoomWidgetConfigWindowFieldType = {
    BOOM_WIDGET: {
        initializeSalesWidgets: () => void,
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
export const windowBoomWidget = window as unknown as (Window & BoomWidgetConfigWindowFieldType);

// example
const initializeSalesWidgets = () => {
    console.log("hello initializeSalesWidgets");
}

// example
const placeSalesWidget = (
    containerElement: Element,
    eventWidgetInternalId: number,
    eventUrl: string,
    eventId: string,
    theme: BoomWidgetConfigThemeTypes
): void => {
    console.log("hello placeSalesWidget");
}

// make methods accessible in window object
windowBoomWidget.BOOM_WIDGET = {
    initializeSalesWidgets,
    placeSalesWidget,
}
