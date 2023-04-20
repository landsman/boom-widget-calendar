import {differenceInHours, parseISO} from "date-fns";
import {EventDurationType} from "@local/models/events/duration/types";

/** when event is longer than 8 hours, let's call it whole day */
const wholeDay = 8;

export function getEventDuration(dateFrom: string, dateTo: string): EventDurationType {
    const fromParsed = parseISO(dateFrom.toString());
    const toParsed = parseISO(dateTo.toString());
    const duration = differenceInHours(fromParsed, toParsed) * -1;
    const isItWholeDayEvent = duration >= wholeDay;

    if (isNaN(duration)) {
        throw new Error(`Duration result is Nan! from: ${fromParsed}, to: ${toParsed}`);
    }

    return {
        duration,
        isItWholeDayEvent,
        fromParsed,
        toParsed,
    };
}
