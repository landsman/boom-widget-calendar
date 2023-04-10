import React from "react";
import {format} from "date-fns";
import {useLingui} from "@lingui/react";
import {t} from "@lingui/macro";
import styled from "styled-components";
import {useAppContext} from "@local/runtime";

export function SelectedDate(): JSX.Element {
    const { localeDataForCalendar, date } = useAppContext();
    const { i18n } = useLingui();

    if (undefined === date) {
        return <div />;
    }

    const formattedDate = format(date, 'PP', {
        locale: localeDataForCalendar,
    });

    return (
        <Wrapper>
            <p>{i18n._(t`selected_date_is`)}{': '}{formattedDate}.</p>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: block;
  width: 100%;
  
  // debug
  background: aqua;
`;
