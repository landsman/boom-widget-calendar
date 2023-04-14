import {excludeMultiDayEvent} from "@local/models/events/exclude-multi-day-event/exclude-multi-day-event";
import {mockWithMultiDayEvents} from "@local/mocks";

describe('excludeMultiDayEvent', () => {
    test('exclude events with more day duration', () => {
        const result = excludeMultiDayEvent(mockWithMultiDayEvents);
        expect(result).toHaveLength(4);
    });
});
