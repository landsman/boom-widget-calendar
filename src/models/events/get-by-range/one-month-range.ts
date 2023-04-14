import {EventType} from "@local/api/view/events/types";
import {filterByRange} from "@local/models/events/get-by-range/filter-by-range";
import {getOneMonthRange} from "@local/utils";
import {excludeMultiDayEvent} from "@local/models/events/occupied-dates/exclude-multi-day-event";

export async function getOneMonthRangeEvents(organizerId: string, date: undefined | Date): Promise<EventType[]> {
    if (undefined === date) {
        console.debug("handleGetEvents - skip because of `date` is undefined");
        return [];
    }
    const range = getOneMonthRange(date);
    const result = await filterByRange(organizerId, range);

    return excludeMultiDayEvent(result);
}
