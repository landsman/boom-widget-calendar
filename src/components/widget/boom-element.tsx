import {useEffect, useState} from "react";
import styled from "styled-components";
import {loadBoomCss, loadBoomScript, resetBoomScript} from '@local/components/widget/boom-script';
import {
    BoomDataConfigProperty, BoomWidgetConfigThemeColors,
    boomWidgetIds,
    windowBoomWidgetConfig
} from "@local/configuration/boom-connect";
import {useAppContext} from "@local/runtime";
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";

type PropTypes = {
    eventId: string;
    eventUrl: string;
    theme: CustomizedThemeOverride;
}

/**
 * @see https://github.com/boomeventsorg/frontend/blob/main/packages/app-connect/public/events/v3/example-mighty.html
 */
export function BoomWidgetElement({ eventId, eventUrl, theme }: PropTypes) {
    const { organizerId, isProduction } = useAppContext();
    const [oldEventId, setOldEventId] = useState<undefined | string>(undefined);

    const config = {
        organizerId: organizerId!,
        eventId: eventId,
        eventUrl: eventUrl,
        theme: {
            colors: theme.colors as BoomWidgetConfigThemeColors,
        },
    }

    // todo: force to show
    windowBoomWidgetConfig.WIDGET_CONFIG_PREVIEW = {};
    windowBoomWidgetConfig.WIDGET_CONFIG = config;

    useEffect(() => {
        loadBoomCss(isProduction);
        loadBoomScript(isProduction);
        setOldEventId(eventId);
    }, [eventId, isProduction]);

    /**
     * force to reload boom script, because there is no method for it
     */
    useEffect(() => {
        if (undefined === oldEventId) {
            return;
        }
        if (eventId !== oldEventId) {
            resetBoomScript(config);
        }
    }, [eventId, oldEventId])

    return (
        <>
            {/*<!-- BOOM Events Widget -->*/}
            <SalesWidget
                className={boomWidgetIds.widgetClass}
                data-config-property={BoomDataConfigProperty.WIDGET_CONFIG}
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
