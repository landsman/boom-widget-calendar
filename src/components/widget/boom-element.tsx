import {useEffect, useState} from "react";
import {BoomWidgetConfigTypes, windowBoomWidgetConfig} from "@local/configuration/boom-widget";
import {loadBoomCss, loadBoomScript, resetBoomScript} from './boom-script';
import styled from "styled-components";

/**
 * @see https://github.com/boomeventsorg/frontend/blob/main/packages/app-connect/public/events/v3/example-mighty.html
 */
export function BoomWidgetElement({ organizerId, eventId, eventUrl, theme }: BoomWidgetConfigTypes) {
    const [oldEventId, setOldEventId] = useState<undefined | string>(undefined);

    // todo: force to show
    windowBoomWidgetConfig.WIDGET_CONFIG_PREVIEW = {};

    windowBoomWidgetConfig.WIDGET_CONFIG = {
        organizerId: organizerId,
        eventId: eventId,
        eventUrl: eventUrl,
        theme: theme,
    };

    useEffect(() => {
        loadBoomCss();
        loadBoomScript();
        setOldEventId(eventId);
    }, []);

    /**
     * force to reload boom script, because there is no method for it
     */
    useEffect(() => {
        if (undefined === oldEventId) {
            return;
        }
        if (eventId !== oldEventId) {
            resetBoomScript();
        }
    }, [eventId])

    return (
        <>
            {/*<!-- BOOM Events Widget -->*/}
            <SalesWidget
                className='sales-widget'
                data-config-property='WIDGET_CONFIG'
            >
                BOOM SALES WIDGET
            </SalesWidget>
            {/*<!-- BOOM Events Widget -->'*/}
        </>
    );
}

const SalesWidget = styled.div`
  height: auto;
  
  &> iframe {
    // todo: debug
    min-height: 1500px; 
  }
`;
