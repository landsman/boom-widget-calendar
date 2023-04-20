import {sortEventsByDuration} from "@local/models/events/sort-by-duration/sort-by-duration";
import {mockEvents, mockWholeDayEvents} from "@local/mocks";
import {getEventDuration} from "@local/models/events/duration";

describe('sortEventsByDuration', () => {
    test('whole day have to be first', () => {
        const mixed = mockEvents.concat(mockWholeDayEvents);
        const filteredEvents = sortEventsByDuration(mixed);

        // check if we didn't lose any data
        expect(filteredEvents).toHaveLength(8);

        const first = filteredEvents[0];
        expect(getEventDuration(first.dateFrom, first.dateTo).isItWholeDayEvent).toBe(true);

        const second = filteredEvents[1];
        expect(getEventDuration(second.dateFrom, second.dateTo).isItWholeDayEvent).toBe(true);
    });
});
