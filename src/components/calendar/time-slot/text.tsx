import {differenceInHours, format, parseISO} from "date-fns";
import {t} from "@lingui/macro";
import {useLingui} from "@lingui/react";
import {useLocaleContext} from "@local/configuration/i18n";

type PropTypes = {
    dateFrom: string;
    dateTo: string;
    wholeDay?: number;
}

/**
 * Prepare localised date or text
 */
export function SlotText({ dateFrom, dateTo, wholeDay = 8 }: PropTypes): JSX.Element {
    const { i18n } = useLingui();
    const { localeDataForCalendar } = useLocaleContext();

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
    return text;
}
