import {format} from "date-fns";
import {t} from "@lingui/macro";
import {useLingui} from "@lingui/react";
import styled from "styled-components";
import {useLocaleContext} from "@local/configuration/i18n";
import {getEventDuration} from "@local/models/events/duration";

type PropTypes = {
    dateFrom: string;
    dateTo: string;
};

/**
 * Prepare localised date or text
 */
export function SlotText({ dateFrom, dateTo }: PropTypes): JSX.Element {
    const { i18n } = useLingui();
    const { localeDataForCalendar } = useLocaleContext();

    const opts = {
        locale: localeDataForCalendar,
    };

    try {
        const duration = getEventDuration(dateFrom, dateTo);
        let text: JSX.Element;
        if (duration.isItWholeDayEvent) {
            text = <WholeDay>{i18n._(t`calendar.time_slot.whole_day`)}</WholeDay>;
        } else {
            const fromFormatted = format(duration.fromParsed, 'p', opts);
            const toFormatted = format(duration.toParsed, 'p', opts);
            text = <span>{fromFormatted} - {toFormatted}</span>;
        }
        return text;
    } catch (e: any) {
        console.error("SlotText issue!", e);
        return <span>{dateFrom} - {dateTo}</span>;
    }
}

const WholeDay = styled.span`
    text-transform: uppercase;
`;
