import styled, {css} from "styled-components";
import {differenceInHours, format, parseISO} from "date-fns";
import {t} from "@lingui/macro";
import {useLingui} from "@lingui/react";
import {useAppContext} from "@local/runtime";
import {useLocaleContext} from "@local/configuration/i18n";

type PropTypes = {
    id: string;
    dateFrom: Date;
    dateTo: Date;
}

// in hours
const wholeDay = 8;

export function TimeSlot({ id, dateFrom, dateTo }: PropTypes): JSX.Element {
    const { i18n } = useLingui();
    const { localeDataForCalendar } = useLocaleContext();
    const { selectedEvent, setSelectedEvent } = useAppContext();

    const opts = {
        locale: localeDataForCalendar,
    };

    // convert for date-fns
    const fromParsed = parseISO(dateFrom.toString());
    const toParsed = parseISO(dateTo.toString());

    const eventDuration = differenceInHours(fromParsed, toParsed) * -1;

    // show localised message instead of hours
    let text: JSX.Element;
    if (eventDuration >= wholeDay) {
        text = <span>{i18n._(t`calendar.time_slot.whole_day`)}</span>;
    } else {
        const fromFormatted = format(fromParsed, 'p', opts);
        const toFormatted = format(toParsed, 'p', opts);
        text = <span>{fromFormatted} - {toFormatted}</span>;
    }

    return (
        <Wrapper active={selectedEvent?.id === id}>
            <Content onClick={() => setSelectedEvent(id)}>
                {text}
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div<{ active: boolean }>`
  margin: auto;
  
  // clickable
  cursor: pointer;
  
  &:hover {
    background: green;
    * {
      color: white;
    }
  }

  // debug
  border: 1px solid black;
  
  ${({ active }) => active && css`
    font-weight: bold;
    
    background: blue;
    color: white;
  `}
`;

const Content = styled.div`
  padding: 5px 5px;
  
  // debug
  color: red;
`;
