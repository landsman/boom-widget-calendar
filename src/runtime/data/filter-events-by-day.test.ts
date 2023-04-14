import {filterEventsByDay} from "@local/runtime";
import {mockEvents} from "@local/mocks";

describe('filterEventsByDay', () => {
    test('filters events by a specific day', () => {
        const targetDate = new Date(2023, 3, 10);
        const filteredEvents = filterEventsByDay(mockEvents, targetDate);
        expect(filteredEvents).toHaveLength(1);
        expect(filteredEvents[0].id).toBe('1');
    });

    test('returns an empty array if no events match the specified day', () => {
        const targetDate = new Date(2023, 3, 11);
        const filteredEvents = filterEventsByDay(mockEvents, targetDate);
        expect(filteredEvents).toHaveLength(0);
    });
});
