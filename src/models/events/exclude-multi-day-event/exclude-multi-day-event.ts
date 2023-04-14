import {EventType} from "@local/api/view/events/types";

function filterCallback(event: EventType): boolean {
    const dateFromDay = new Date(event.dateFrom).getDate();
    const dateToDay = new Date(event.dateTo).getDate();
    return dateFromDay === dateToDay;
}

/**
 * if event has defined time for more days, exclude it
 */
export function excludeMultiDayEvent(events: EventType[]): EventType[] {
    return events.filter(filterCallback);
}
