import {getOrganizerId} from "@local/runtime/url-query-params/get-organizer-id";
import mockLocation from './mock/window.location.mock';

describe('getOrganizerId', () => {
    test('nothing in url', () => {
        const url = new URL(mockLocation.href);
        mockLocation.href = url.toString();
        expect(getOrganizerId()).toBe(null);
    });

    test('org id in url', () => {
        const url = new URL(mockLocation.href);
        url.searchParams.set('organizerId', '12345');
        mockLocation.href = url.toString();
        expect(getOrganizerId()).toBe('12345');
    });
});
