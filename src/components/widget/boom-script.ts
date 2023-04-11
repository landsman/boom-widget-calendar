import {
    BoomDataConfigProperty, BoomWidgetConfigTypes,
    boomWidgetIds,
    connectEndpoints,
    connectHost,
    windowBoomWidgetConfig
} from "@local/configuration/boom-connect";

export function loadBoomScript(production: boolean): void {
    const host = connectHost(production);
    const isExist = document.getElementById(boomWidgetIds.script);
    if (!isExist) {
        const el = document.createElement('script');
        el.src = host + connectEndpoints.widgetScript;
        el.id = boomWidgetIds.script;
        document.body.appendChild(el);
        el.onload = () => {
            console.debug("👀 BOOM widget script loaded");
        };
    }
}

export function resetBoomScript(): void {
    const isExist = document.getElementById(boomWidgetIds.script);
    if (isExist) {
        // replace iframe
        const widgetsWrappers = window.document.querySelectorAll(`.` + boomWidgetIds.widgetClass);
        widgetsWrappers.forEach((containerElement) => {

            const config: undefined | BoomWidgetConfigTypes = windowBoomWidgetConfig[BoomDataConfigProperty.WIDGET_CONFIG];

            if (undefined === config) {
                console.log("config is missing!");
                return;
            }

            if (undefined === windowBoomWidgetConfig.placeSalesWidget) {
                console.error("placeSalesWidget is not in window object!");
                return;
            }

            const internalId = Math.random();
            windowBoomWidgetConfig.placeSalesWidget(
                containerElement,
                internalId,
                config.eventUrl,
                config.eventId,
                config.theme
            );
        });

        //alert("Missing support for reload sales widget :( in JS API ... you have to reload the page");
    }
}

export function loadBoomCss(production: boolean): void {
    const host = connectHost(production);
    const isExist = document.getElementById(boomWidgetIds.css);
    if (!isExist) {
        const el = document.createElement('link');
        el.rel = "stylesheet"
        el.href = host + connectEndpoints.widgetStyle;
        el.id = boomWidgetIds.css;
        document.body.appendChild(el);
        el.onload = () => {
            console.debug("👀 BOOM widget css loaded");
        };
    }
}
