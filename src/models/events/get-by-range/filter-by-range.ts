import {I18n} from "@lingui/core";
import {getViewEvents} from "@local/api/view/events/view-events";
import {EventType} from "@local/api/view/events/types";
import {DateRange} from "@local/utils/date-time/types/date-range";

export async function filterByRange(
    i18n: I18n,
    organizerId: string,
    dateRange: DateRange,
): Promise<EventType[]> {
    let response: EventType[] = [];
    try {
        const api = await getViewEvents({
            organizerId,
            fromDate: dateRange.from,
            toDate: dateRange.to,
            size: 100,
            sort: 'desc',
        });
        if (api) {
            response = api.page;
        }
    } catch (e: any) {
        console.error("filterByRange - problem", e);
        throw e;
    }
    return response;
}
