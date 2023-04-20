import {mockWholeDayEvents} from "@local/mocks";
import {getEventDuration} from "@local/models/events/duration/event-duration";

describe('getEventDuration', () => {
    test('it have to be whole day', () => {
        const mockEventExample = mockWholeDayEvents[0];
        const duration = getEventDuration(mockEventExample.dateFrom, mockEventExample.dateTo);
        expect(duration.isItWholeDayEvent).toBe(true);
    });
    test('the last is not whole day', () => {
        const mockEventExample = mockWholeDayEvents[3];
        const duration = getEventDuration(mockEventExample.dateFrom, mockEventExample.dateTo);
        expect(duration.isItWholeDayEvent).toBe(false);
    });
});
