const ids = {
    script: 'boom_widget_script',
    css: 'boom_widget_css',
}

export function loadBoomScript(): void {
    const isExist = document.getElementById(ids.script);
    if (!isExist) {
        const el = document.createElement('script');
        el.src = 'https://connect.boomevents.dev/events/v3/widget.js';
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

        const load_event = new Event("load");
        window.dispatchEvent(load_event);

        // remove declared function
        // @ts-ignore
        //delete window.initializeSalesWidgets;
    }
    //loadBoomScript();
}

export function loadBoomCss(): void {
    const isExist = document.getElementById(ids.css);
    if (!isExist) {
        const el = document.createElement('link');
        el.rel = "stylesheet"
        el.href = 'https://connect.boomevents.dev/events/v3/widget.css';
        el.id = ids.css;
        document.body.appendChild(el);
        el.onload = () => {
            console.debug("👀 BOOM widget css loaded");
        };
    }
}
