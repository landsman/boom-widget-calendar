import {
    BoomWidgetConfigTypes,
    boomWidgetIds,
    connectEndpoints,
    connectHost,
    windowBoomWidgetConfig
} from "@local/configuration/boom-connect";

/**
 * there should not be more widgets than one on the page!
 */
function getWidget(): null | Element {
    const elements = window.document.querySelectorAll(`.` + boomWidgetIds.widgetClass);

    // good case scenario
    if (elements.length === 1) {
        return elements[0];
    }

    // more widget in page from some weird reason
    if (elements.length > 1) {
        console.error("We do not support more widget on the page!");
        return null;
    }

    console.error("Missing widget element in the page!");
    return null;
}

/**
 * place external JS script to the page for iframe loading & communication
 */
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

/**
 * replace widget iframe on the page
 */
export function resetBoomScript(config: BoomWidgetConfigTypes): void {
    const isExist = document.getElementById(boomWidgetIds.script);
    if (!isExist) {
        console.error("BOOM widget JS script not initialized");
        return;
    }

    const containerElement = getWidget();
    if (!containerElement) {
        alert("Problem occurred, please try it again.");
        return;
    }

    if (undefined === config) {
        console.log("config is missing!");
        return;
    }

    if (undefined === windowBoomWidgetConfig.BOOM_WIDGET_CONFIG?.placeSalesWidget) {
        console.error("placeSalesWidget is not in window object!");
        return;
    }

    const internalId = Math.random();
    windowBoomWidgetConfig.BOOM_WIDGET_CONFIG.placeSalesWidget(
        containerElement,
        internalId,
        config.eventUrl,
        config.eventId,
        config.theme
    );

}

/**
 * place external CSS file to the page with styles for widget container
 */
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
