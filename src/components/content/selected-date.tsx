import React from "react";
import {format} from "date-fns";
import {useLingui} from "@lingui/react";
import {t} from "@lingui/macro";
import styled from "styled-components";
import {useAppContext} from "@local/runtime";
import {useLocaleContext} from "@local/configuration/i18n";
import {breakpoints} from "@local/components/theme/breakpoints";

export function SelectedDate(): JSX.Element {
    const { i18n } = useLingui();
    const { localeDataForCalendar } = useLocaleContext();
    const { selectedDate } = useAppContext();

    if (undefined === selectedDate) {
        return <div />;
    }

    const formattedDate = format(selectedDate, 'PP', {
        locale: localeDataForCalendar,
    });

    return (
        <Wrapper>
            <Text>{i18n._(t`selected_date_is`)}{': '}{formattedDate}.</Text>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 700px;
  margin: 10px auto;
  text-align: center;

  // todo: sticky
  //position: fixed;
  //top: 0;
  
  @media (min-width: ${breakpoints.tablet}) {
    width: 100%;
    max-width: 100%;
    text-align: left;
    margin-top: 0;
  }

  // todo: client specific, move to theme!
  color: #FFFFFF;
  font-size: 16px;

  background: #251D3F;
  border: 1px solid transparent;
  border-radius: 6px;
`;

const Text = styled.p`
  padding: 10px;
`;
