import React from "react";
import styled from "styled-components";
import {CalendarStyles} from "@local/components/calendar/calendar-styles";
import {PureCssLoader} from "@local/components/loader/pure-css-loader";

export function CalendarSkeleton(): JSX.Element {
    return (
        <CalendarStyles>
            <MinHeight>
                <PureCssLoader />
            </MinHeight>
        </CalendarStyles>
    );
}

const MinHeight = styled.div`
  height: 296px;
  padding-top: 100px !important;
  overflow: hidden;
`;

