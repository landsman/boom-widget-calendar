import {EventType} from "@local/api/view/events/types";
import {sortByFunction} from "@local/models/general/sort-objects";
import {getEventDuration} from "@local/models/events/duration";
import {sortBySooner} from "@local/models/events/sort-by-sooner";

/**
 * put events with flag "whole day" as first in the array
 */
export function sortEventsByDuration(events: EventType[]): EventType[] {
    // 1. sort them by sooner
    const sooner = sortBySooner(events, "dateFrom");

    // 2. sort them by whole day first
    return sortByFunction(sooner, (item: EventType) => {
        return getEventDuration(item.dateFrom, item.dateTo).isItWholeDayEvent;
    });
}
