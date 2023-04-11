import {connectEndpoints, connectHost} from "@local/configuration/boom-connect";

const ids = {
    script: 'boom_widget_script',
    css: 'boom_widget_css',
}

export function loadBoomScript(production: boolean): void {
    const host = connectHost(production);
    const isExist = document.getElementById(ids.script);
    if (!isExist) {
        const el = document.createElement('script');
        el.src = host + connectEndpoints.widgetScript;
        el.id = ids.script;
        document.body.appendChild(el);
        el.onload = () => {
            console.debug("👀 BOOM widget script loaded");
        };
    }
}

export function resetBoomScript(): void {
    const isExist = document.getElementById(ids.script);
    if (isExist) {
        // remove script
        //isExist.remove();

        // remove iframe
        const widgetsWrappers = window.document.querySelectorAll('.sales-widget');
        widgetsWrappers.forEach((el) => {
            el.innerHTML = '';
        });

        alert("Missing support for reload sales widget :( in JS API ... you have to reload the page");

        //const load_event = new Event("load");
        //window.dispatchEvent(load_event);

        // remove declared function
        // @ts-ignore
        //delete window.initializeSalesWidgets;
    }
    //loadBoomScript();
}

export function loadBoomCss(production: boolean): void {
    const host = connectHost(production);
    const isExist = document.getElementById(ids.css);
    if (!isExist) {
        const el = document.createElement('link');
        el.rel = "stylesheet"
        el.href = host + connectEndpoints.widgetStyle;
        el.id = ids.css;
        document.body.appendChild(el);
        el.onload = () => {
            console.debug("👀 BOOM widget css loaded");
        };
    }
}