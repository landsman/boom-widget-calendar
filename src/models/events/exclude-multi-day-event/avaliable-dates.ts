import {EventType} from "@local/api/view/events/types";
import {excludeMultiDayEvent} from "@local/models/events/exclude-multi-day-event/exclude-multi-day-event";

export function getAvailableDates(events: EventType[]): Date[] {
    const filteredEvents = excludeMultiDayEvent(events);
    return filteredEvents.map(event => event.dateFrom);
}
