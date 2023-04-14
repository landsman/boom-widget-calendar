import {EventType} from "@local/api/view/events/types";

function filterCallback(event: EventType): boolean {
    const dateFromDay = event.dateFrom.getDate();
    const dateToDay = event.dateTo.getDate();
    return dateFromDay === dateToDay;
}

/**
 * if event has defined time for more days, exclude it
 */
export function excludeMultiDayEvent(events: EventType[]): EventType[] {
    return events.filter(filterCallback);
}
