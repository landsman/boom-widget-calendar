import {EventType} from "@local/api/view/events/types";
import {excludeMultiDayEvent} from "@local/models/events/occupied-dates/exclude-multi-day-event";

export function getOccupiedDates(events: EventType[]): Date[] {
    const filteredEvents = excludeMultiDayEvent(events);
    return filteredEvents.map(event => new Date(event.dateFrom));
}
