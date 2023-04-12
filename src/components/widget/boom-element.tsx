import {useEffect, useState} from "react";
import styled, {css} from "styled-components";
import {loadBoomScripts, resetBoomScript} from '@local/components/widget/boom-script';
import {
    BoomDataConfigProperty,
    BoomWidgetConfigThemeColors,
    BoomWidgetConfigTypes,
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
    const { organizerId, isProduction, isWidgetLoading, setWidgetLoading } = useAppContext();
    const [oldEventId, setOldEventId] = useState<undefined | string>(undefined);
    const [config, setConfig] = useState<undefined | BoomWidgetConfigTypes>(undefined);

    useEffect(() => {
        if (undefined === config) {
            return;
        }
        setOldEventId(config?.eventId);
        setWidgetLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config, isProduction]);

    /**
     * init
     */
    useEffect(() => {
        const _config = {
            organizerId: organizerId!,
            eventId: eventId,
            eventUrl: eventUrl,
            theme: {
                colors: theme.colors as BoomWidgetConfigThemeColors,
            },
        }
        setConfig(_config)

        // todo: force to show
        windowBoomWidgetConfig.WIDGET_CONFIG_PREVIEW = {};
        windowBoomWidgetConfig.WIDGET_CONFIG = _config;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [eventId, eventUrl])

    /**
     * force to reload boom script, because there is no method for it
     */
    useEffect(() => {
        if (undefined === config) {
            return;
        }
        if (undefined === oldEventId) {
            return;
        }
        if (eventId !== oldEventId) {
            resetBoomScript(config, setWidgetLoading);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config, eventId, oldEventId])

    return (
        <Wrapper>
            <Loader visible={isWidgetLoading} />
            {/*<!-- BOOM Events Widget -->*/}
            <SalesWidget
                visible={!isWidgetLoading}
                className={boomWidgetIds.widgetClass}
                data-config-property={BoomDataConfigProperty.WIDGET_CONFIG}
            />
            {/*<!-- BOOM Events Widget -->'*/}
        </Wrapper>
    );
}

const Wrapper = styled.div`
  position: relative;
`;

// todo
const Loader = styled.div<{ visible: boolean }>`
  width: 100%;
  height: 50px;
  background: red;
  display: none;
  
  ${({ visible }) => visible && css`
    display: block;
  `}
`;

// todo
const SalesWidget = styled.div<{ visible: boolean }>`
  height: auto;
  display: none;
  
  &> iframe {
    // todo: debug
    min-height: 1500px; 
  }

  ${({ visible }) => visible && css`
    display: block;
  `}
`;
