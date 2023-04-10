import {EventType} from "@local/api/view/events/types/event-type";
import styled from "styled-components";
import {useAppContext} from "@local/runtime";
import {differenceInHours, format, parseISO} from "date-fns";
import {t} from "@lingui/macro";
import {useLingui} from "@lingui/react";

type PropTypes = {
    event: EventType; // todo: sent just necessary data!
}

const wholeDay = 8;

export function TimeSlot({ event }: PropTypes): JSX.Element {
    const { setSelectedEvent, localeDataForCalendar } = useAppContext();
    const { i18n } = useLingui();

    const opts = {
        locale: localeDataForCalendar,
    };

    // convert for date-fns
    const fromParsed = parseISO(event.dateFrom.toString());
    const toParsed = parseISO(event.dateTo.toString());

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
        <Wrapper>
            <Content onClick={() => setSelectedEvent(event.id)}>
                {text}
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: block;
  cursor: pointer;
  
  &:hover {
    background: chocolate;
  }
`;

const Content = styled.div`
  color: red;
`;
