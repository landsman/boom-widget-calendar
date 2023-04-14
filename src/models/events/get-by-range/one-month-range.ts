import {EventType} from "@local/api/view/events/types";
import {getOneDayDateRange} from "@local/utils";
import {filterByRange} from "@local/models/events/get-by-range/filter-by-range";

export async function getOneMonthRangeEvents(organizerId: string, date: undefined | Date): Promise<EventType[]> {
    if (undefined === date) {
        console.debug("handleGetEvents - skip because of `date` is undefined");
        return [];
    }
    // todo: replace
    const range = getOneDayDateRange(date);
    return filterByRange(organizerId, range);
}
