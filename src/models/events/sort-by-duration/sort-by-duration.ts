import {EventType} from "@local/api/view/events/types";
import {sortByFunction} from "@local/models/general/sort-objects";
import {getEventDuration} from "@local/models/events/duration";

/**
 * put events with flag "whole day" as first in the array
 */
export function sortEventsByDuration(events: EventType[]): EventType[] {
    return sortByFunction(events, (item: EventType) => {
        return getEventDuration(item.dateFrom, item.dateTo).isItWholeDayEvent;
    });
}
