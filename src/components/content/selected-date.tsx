import React from "react";
import {useAppContext} from "../../runtime";
import {format} from "date-fns";
import styled from "styled-components";

export function SelectedDate(): JSX.Element {
    const { localeDataForCalendar, date } = useAppContext();

    const formattedDate = format(date!, 'PP', {
        locale: localeDataForCalendar,
    });

    return (
        <Wrapper>
            <p>You picked {formattedDate}.</p>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: block;
  width: 100%;
  
  // debug
  background: aqua;
`;
