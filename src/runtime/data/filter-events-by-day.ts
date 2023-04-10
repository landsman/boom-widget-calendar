import {EventType} from "../../api/view/events/types/event-type";

export function filterEventsByDay(
    events: undefined | EventType[],
    targetDate: undefined | Date,
): EventType[] {
    if (undefined === events) {
        console.debug("Events state is undefined!");
        return [];
    }
    if (undefined === targetDate) {
        console.debug("targetDate is undefined!");
        return [];
    }
    return events.filter((event: EventType) => {
        const eventDay = new Date(event.dateFrom.getFullYear(), event.dateFrom.getMonth(), event.dateFrom.getDate());
        return eventDay.getTime() === targetDate.getTime();
    });
}
