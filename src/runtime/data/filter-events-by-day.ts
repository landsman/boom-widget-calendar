import {EventType} from "../../api/view/events/types/event-type";

export function filterEventsByDay(
    events: undefined | EventType[],
    year: undefined | number,
    month: undefined | number,
    day: undefined | number
): EventType[] {
    if (undefined === events) {
        console.error("Events state is undefined!");
        return [];
    }
    if (undefined === year) {
        console.error("year is undefined!");
        return [];
    }
    if (undefined === month) {
        console.error("month is undefined!");
        return [];
    }
    if (undefined === day) {
        console.error("day is undefined!");
        return [];
    }
    return events.filter((event: EventType) => {
        const eventDay = new Date(event.dateFrom.getFullYear(), event.dateFrom.getMonth(), event.dateFrom.getDate());
        const targetDay = new Date(year, month - 1, day);
        return eventDay.getTime() === targetDay.getTime();
    });
}
