export type BoomWidgetConfigTypes = {
    eventId: string;
    eventUrl: string;
    theme: BoomWidgetConfigThemeTypes;
}

// https://github.com/boomeventsorg/frontend/blob/main/packages/app-connect/public/events/v3/example-mighty.html
export type BoomWidgetConfigThemeTypes = {
    colors: {
        gray: []; // todo: wtf
        violet: []; // todo: wtf
    }
}
