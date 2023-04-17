import {getFixedLocale, getIsProduction, getOrganizerId} from "@local/runtime/url-query-params/get-value";
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

    test('production by default', () => {
        const url = new URL(mockLocation.href);
        mockLocation.href = url.toString();
        expect(getIsProduction()).toBe(null);
    });

    test('production is false', () => {
        const url = new URL(mockLocation.href);
        url.searchParams.set('isProduction', 'false');
        mockLocation.href = url.toString();
        expect(getIsProduction()).toBe('false');
    });

    test('locale is not present in url', () => {
        const url = new URL(mockLocation.href);
        mockLocation.href = url.toString();
        expect(getFixedLocale()).toBe(null);
    });

    test('locale is CS', () => {
        const url = new URL(mockLocation.href);
        url.searchParams.set('locale', 'cs');
        mockLocation.href = url.toString();
        expect(getFixedLocale()).toBe('cs');
    });
});
