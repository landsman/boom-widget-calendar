import {useEffect} from "react";
import {BoomWidgetConfigTypes, windowBoomWidgetConfig} from "@local/configuration/boom-widget";
import {loadBoomCss, loadBoomScript} from './boom-script';

/**
 * @see https://github.com/boomeventsorg/frontend/blob/main/packages/app-connect/public/events/v3/example-mighty.html
 */
export function BoomWidgetElement({ organizerId, eventId, eventUrl, theme }: BoomWidgetConfigTypes) {

    windowBoomWidgetConfig.WIDGET_CONFIG = {
        organizerId: organizerId,
        eventId: eventId,
        eventUrl: eventUrl,
        theme: theme,
    };

    useEffect(() => {
        loadBoomCss();
        loadBoomScript();
    });

    return (
        <>
            {/*<!-- BOOM Events Widget -->*/}
            <div
                className='sales-widget'
                data-config-property='WIDGET_CONFIG'
                style={{
                    padding: 10,
                    background: 'green',
                }}
            >
                BOOM SALES WIDGET
            </div>
            {/*<!-- BOOM Events Widget -->'*/}
        </>
    );
}
