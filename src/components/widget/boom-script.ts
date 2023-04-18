import {
    BoomWidgetConfigDTO,
    boomWidgetIds,
    connectEndpoints,
    connectHost,
    windowBoomWidgetConfig
} from "@local/configuration/boom-connect";
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";

/**
 * place external CSS file to the page with styles for widget container
 */
function loadBoomCss(production: boolean): Promise<boolean> {
    const host = connectHost(production);
    const isExist = document.getElementById(boomWidgetIds.css);
    if (isExist) {
        return Promise.resolve(false);
    }
    return new Promise((resolve) => {
        const el = document.createElement('link');
        el.rel = "stylesheet"
        el.href = host + connectEndpoints.widgetStyle;
        el.id = boomWidgetIds.css;
        document.body.appendChild(el);
        el.onload = () => {
            console.debug("👀 BOOM widget css loaded");
            resolve(true);
        };
    });
}


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
 * util there will be some promise / JS API from widget we have to do this delay, to prevent white color blinking
 */
function showWidgetDelay(callback: any): void {
    setTimeout(() => {
        callback();
    }, 1000);
}

/**
 * place external JS script to the page for iframe loading & communication
 */
function loadBoomScript(production: boolean): Promise<boolean> {
    const isExist = document.getElementById(boomWidgetIds.script);
    if (isExist) {
        console.debug("BOOM script already exist on the page");
        return Promise.resolve(false);
    }
    return new Promise((resolve) => {
        const host = connectHost(production);
        const el = document.createElement('script');
        el.src = host + connectEndpoints.widgetScript;
        el.id = boomWidgetIds.script;
        document.body.appendChild(el);
        el.onload = () => {
            console.debug("👀 BOOM widget script loaded");
            resolve(true);
        };
    });
}

/**
 * replace widget iframe on the page
 */
export function placeBoomWidget(
    config: BoomWidgetConfigDTO,
    theme: CustomizedThemeOverride,
    setWidgetLoading: (state: boolean) => void,
): void {
    const isExist = document.getElementById(boomWidgetIds.script);
    if (!isExist) {
        console.error("BOOM widget JS script not initialized");
        return;
    }

    // show loader state
    setWidgetLoading(true);

    const containerElement = getWidget();
    if (!containerElement) {
        alert("Problem occurred, please try it again.");
        return;
    }

    if (undefined === config) {
        console.error("config is missing!");
        return;
    }

    if (
        undefined === windowBoomWidgetConfig.BOOM_WIDGET_CONFIG?.placeSalesWidget &&
        undefined === windowBoomWidgetConfig.BOOM_WIDGET_API?.placeSalesWidget
    ) {
        console.error("placeSalesWidget is not in window object!");
        return;
    }

    // do replacement
    const internalId = Math.random();

    /** deprecated */
    if (undefined !== windowBoomWidgetConfig.BOOM_WIDGET_CONFIG?.placeSalesWidget) {
        windowBoomWidgetConfig.BOOM_WIDGET_CONFIG.placeSalesWidget(
            containerElement,
            internalId,
            config.eventUrl,
            config.eventId,
            theme
        );
    }

    if (undefined !== windowBoomWidgetConfig.BOOM_WIDGET_API?.placeSalesWidget) {
        windowBoomWidgetConfig.BOOM_WIDGET_API.placeSalesWidget(
            containerElement,
            internalId,
            config.eventUrl,
            config.eventId,
            theme
        );
    }

    // show the widget
    showWidgetDelay(() => {
        setWidgetLoading(false);
    });
}

/**
 * load both necessary scripts on the page, before we show area with widget
 */
export async function loadBoomScripts(production: boolean): Promise<void> {
    try {
        loadBoomCss(production);
        await loadBoomScript(production);
    } catch (e: any) {
        console.error("🔥 loadBoomScripts - Error occurred", e);
    }
}
