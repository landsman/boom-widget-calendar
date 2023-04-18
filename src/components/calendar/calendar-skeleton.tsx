import React from "react";
import styled from "styled-components";
import {CalendarStyles} from "@local/components/calendar/calendar-styles";
import {PureCssLoader} from "@local/components/loader/pure-css-loader";
import {useAppContext} from "@local/runtime";

export function CalendarSkeleton(): JSX.Element {
    const { themeConfig } = useAppContext();
    return (
        <CalendarStyles>
            <MinHeight>
                <PureCssLoader
                    color={themeConfig.loaderColor}
                />
            </MinHeight>
        </CalendarStyles>
    );
}

const MinHeight = styled.div`
  height: 296px;
  padding-top: 100px !important;
  overflow: hidden;
`;

