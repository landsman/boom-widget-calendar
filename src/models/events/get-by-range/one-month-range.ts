import {I18n} from "@lingui/core";
import {EventType} from "@local/api/view/events/types";
import {filterByRange} from "@local/models/events/get-by-range/filter-by-range";
import {getOneMonthRange} from "@local/utils";
import {excludeMultiDayEvent} from "@local/models/events/exclude-multi-day-event/exclude-multi-day-event";

export async function getOneMonthRangeEvents(
    i18n: I18n,
    organizerId: string,
    date: undefined | Date
): Promise<EventType[]> {
    if (undefined === date) {
        console.debug("handleGetEvents - skip because of `date` is undefined");
        return [];
    }
    const range = getOneMonthRange(date);
    const result = await filterByRange(i18n, organizerId, range);

    return excludeMultiDayEvent(result);
}
