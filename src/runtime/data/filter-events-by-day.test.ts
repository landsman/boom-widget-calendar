import {filterEventsByDay} from "./filter-events-by-day";
import {mockEvents} from "./mocks/events.mock";

describe('filterEventsByDay', () => {
    test('filters events by a specific day', () => {
        const filteredEvents = filterEventsByDay(mockEvents, 2023, 4, 10);
        expect(filteredEvents).toHaveLength(1);
        expect(filteredEvents[0].id).toBe('1');
    });

    test('returns an empty array if no events match the specified day', () => {
        const filteredEvents = filterEventsByDay(mockEvents, 2023, 4, 11);
        expect(filteredEvents).toHaveLength(0);
    });
});
