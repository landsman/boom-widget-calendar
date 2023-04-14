import {useEffect, useState} from "react";
import styled, {css} from "styled-components";
import {placeBoomWidget} from '@local/components/widget/boom-script';
import {
    BoomWidgetConfigDTO,
    BoomWidgetConfigThemeColors,
    boomWidgetIds,
    buildBoomWidgetIframeUrl,
} from "@local/configuration/boom-connect";
import {useAppContext} from "@local/runtime";
import {PureCssLoader} from "@local/components/loader/pure-css-loader";

export function BoomWidgetElement() {
    const {
        isProduction,
        themeConfig,
        selectedEvent,
        isWidgetLoading,
        setWidgetLoading
    } = useAppContext();

    const [oldEventId, setOldEventId] = useState<undefined | string>(undefined);

    // todo: prettier?
    const _theme = {
        colors: themeConfig.colors as BoomWidgetConfigThemeColors,
    };

    const eventId = selectedEvent!.id;

    /** build url */
    const eventUrl = buildBoomWidgetIframeUrl(
        isProduction,
        selectedEvent!.localization.localization,
        selectedEvent!.localization.slug
    );

    /** build dto */
    const config: BoomWidgetConfigDTO = {
        eventId,
        eventUrl,
    }

    /**
     * init
     */
    useEffect(() => {
        setOldEventId(config?.eventId);
        placeBoomWidget(config, _theme, setWidgetLoading);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [eventId, eventUrl])

    /**
     * switch widget
     */
    useEffect(() => {
        if (eventId !== oldEventId) {
            placeBoomWidget(config, _theme, setWidgetLoading);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [eventId, oldEventId])

    return (
        <Wrapper>
            <Loader visible={isWidgetLoading}>
                <PureCssLoader size={80} />
            </Loader>
            {/*<!-- BOOM Events Widget -->*/}
            <SalesWidget
                visible={!isWidgetLoading}
                className={boomWidgetIds.widgetClass}
            />
            {/*<!-- BOOM Events Widget -->'*/}
        </Wrapper>
    );
}

const Wrapper = styled.div`
  position: relative;
`;

const Loader = styled.div<{ visible: boolean }>`
  width: 100%;
  height: 110px;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  background: transparent;
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
