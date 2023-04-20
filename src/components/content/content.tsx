import React, {useEffect} from "react";
import styled from "styled-components";
import {Calendar} from "@local/components/calendar";
import {BoomWidget} from "@local/components/widget";
import {breakpoints} from "@local/components/theme/breakpoints";
import {LocaleSwitcher} from "@local/components/layout/locale-switcher";
import {useIframeMessenger} from "@local/hooks/iframe-messenger";
import {useAppContext} from "@local/runtime";

export function Content(): JSX.Element {
    const { organizerId } = useAppContext();
    const { handleContentInitialized, handleContentResize  } = useIframeMessenger();

    const handleResize = (entries: ResizeObserverEntry[]) => {
        console.log("resize!!!!", entries);
        handleContentResize(organizerId!);
    }

    /** Run after page init necessarily steps to handle widget on 3rd party website */
    const handleWidgetMessageBroker = () => {
        handleContentInitialized(organizerId!);
        new ResizeObserver(handleResize).observe(window.document.body);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(handleWidgetMessageBroker, []);

    return (
        <Grid>
            <Left>
                <LocaleSwitcher />
                <Calendar />
            </Left>
            <Right>
                <BoomWidget />
            </Right>
        </Grid>
    );
}

const Grid = styled.div`
  width: 100%;
  max-width: 100%;
  
  height: auto;

  // columns
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
  }
  
  background: transparent;
`;

const Column = styled.div`
  display: block;
  width: 100%;
  
  @media (min-width: ${breakpoints.tablet}) {
    width: auto;
    display: block;
  }
`;

const Left = styled(Column)`
  width: 100%;

  // columns
  @media (min-width: ${breakpoints.tablet}) {
    width: 40%;
  }
`;

const Right = styled(Column)`
  width: 100%;

  // columns
  @media (min-width: ${breakpoints.tablet}) {
    width: 60%;
  }
`;
