import {Dispatch, SetStateAction} from "react";
import {getViewEvents} from "../../api/view/events/view-events";
import {EventType} from "../../api/view/events/types/event-type";
import {getOneMonthRange} from "../../utils/date-time/one-month-range";

export async function handleGetEvents(
    organizerId: string,
    date: undefined | Date,
    setEvents: Dispatch<SetStateAction<undefined | EventType[]>>,
): Promise<void> {
    if (undefined === date) {
        console.debug("handleGetEvents - skip because of `date` is undefined");
        return;
    }
    try {
        // todo: check timezone if it's okay or not
        const range = getOneMonthRange('UTC', date);
        const response = await getViewEvents({
            organizerId,
            fromDate: range.from,
            toDate: range.to,
        });
        if (response) {
            setEvents(response.page);
        }
    } catch (e: any) {
        console.error("handleGetEvents - problem", e);
    }
}
