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
    const { date } = useAppContext();

    if (undefined === date) {
        return <div />;
    }

    const formattedDate = format(date, 'PP', {
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
  max-width: 100%;
  margin-bottom: 10px;
  
  text-align: center;

  @media (min-width: ${breakpoints.tablet}) {
    text-align: left;
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
