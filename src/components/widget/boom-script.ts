export function loadBoomScript(): void {
    const id = 'boom_widget_script';
    const existingScript = document.getElementById(id);
    if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://connect.boomevents.dev/events/v3/widget.js';
        script.id = id;
        document.body.appendChild(script);
        script.onload = () => {
            console.debug("👀 BOOM widget script loaded");
        };
    }
}

export function loadBoomCss(): void {
    const id = 'boom_widget_css';
    const existingScript = document.getElementById(id);
    if (!existingScript) {
        const script = document.createElement('link');
        script.rel = "stylesheet"
        script.href = 'https://connect.boomevents.dev/events/v3/widget.css';
        script.id = id;
        document.body.appendChild(script);
        script.onload = () => {
            console.debug("👀 BOOM widget css loaded");
        };
    }
}
