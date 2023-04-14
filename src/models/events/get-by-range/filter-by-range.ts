import {getViewEvents} from "@local/api/view/events/view-events";
import {EventType} from "@local/api/view/events/types";
import {DateRange} from "@local/utils/date-time/types/date-range";

export async function filterByRange(organizerId: string, dateRange: DateRange): Promise<EventType[]> {
    let response: EventType[] = [];
    try {
        const api = await getViewEvents({
            organizerId,
            fromDate: dateRange.from,
            toDate: dateRange.to,
        });
        if (api) {
            response = api.page;
        }
    } catch (e: any) {
        console.error("filterByRange - problem", e);
    }
    return response;
}
