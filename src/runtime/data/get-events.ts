
import {getViewEvents} from "../../api/view/events/view-events";
import {EventType} from "../../api/view/events/types/event-type";
import {getOneDayDateRange} from "../../utils/date-time/one-day-range";

export async function handleGetEvents(organizerId: string, date: undefined | Date): Promise<EventType[]> {
    let response: EventType[] = [];
    if (undefined === date) {
        console.debug("handleGetEvents - skip because of `date` is undefined");
        return [];
    }
    try {
        const range = getOneDayDateRange(date);
        const api = await getViewEvents({
            organizerId,
            fromDate: range.from,
            toDate: range.to,
        });
        if (api) {
            response = api.page;
        }
    } catch (e: any) {
        console.error("handleGetEvents - problem", e);
    }
    return response;
}
