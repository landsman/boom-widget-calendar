import {EventType} from "@local/api/view/events/types";

export const mockWholeDayEvents: EventType[] = [
    {
        id: '1',
        type: 'concert',
        organizer: 'ACME Concerts',
        location: { latitude: 40.7128, longitude: -74.006 },
        localization: {
            id: '1',
            slug: 'example-event',
            localization: 'en',
            description: 'An example event',
            title: 'Example Event',
            address: '123 Main St, New York, NY 10001',
            web: 'https://example.com/event',
            facebook: 'https://www.facebook.com/example-event',
            organizerName: 'ACME Concerts',
            organizerEmail: 'info@example.com',
            organizerPhone: '+1 (555) 123-4567',
            image: 'https://example.com/event/image.jpg',
            metaDescription: 'An example event for testing purposes',
            metaImage: 'https://example.com/event/meta-image.jpg',
        },
        dateFrom: new Date(2023, 3, 10, 1, 0).toISOString(),
        dateTo: new Date(2023, 3, 10, 10, 0).toISOString(),
        orderableFrom: new Date(2023, 2, 1).toISOString(),
        orderableUntil: new Date(2023, 3, 9).toISOString(),
        timezone: {
            displayName: 'Eastern Standard Time',
            id: 'America/New_York',
            dstsavings: 3600000,
            rawOffset: -18000000,
        },
        published: true,
        publishedRestriction: false,
        suspended: false,
        soldOut: false,
        draft: false,
    },
    {
        id: '2',
        type: 'theater',
        organizer: 'ACME Theaters',
        location: { latitude: 40.7128, longitude: -74.006 },
        localization: {
            id: '2',
            slug: 'example-theater-show',
            localization: 'en',
            description: 'An example theater show',
            title: 'Example Theater Show',
            address: '456 Broadway, New York, NY 10001',
            web: 'https://example.com/theater-show',
            facebook: 'https://www.facebook.com/example-theater-show',
            organizerName: 'ACME Theaters',
            organizerEmail: 'info@example.com',
            organizerPhone: '+1 (555) 123-4567',
            image: 'https://example.com/theater-show/image.jpg',
            metaDescription: 'An example theater show for testing purposes',
            metaImage: 'https://example.com/theater-show/meta-image.jpg',
        },
        dateFrom: new Date(2023, 3, 5, 10, 0, 0).toISOString(),
        dateTo: new Date(2023, 3, 5, 20, 0, 0).toISOString(),
        orderableFrom: new Date(2023, 2, 1).toISOString(),
        orderableUntil: new Date(2023, 3, 4).toISOString(),
        timezone: {
            displayName: 'Eastern Standard Time',
            id: 'America/New_York',
            dstsavings: 3600000,
            rawOffset: -18000000,
        },
        published: true,
        publishedRestriction: false,
        suspended: false,
        soldOut: false,
        draft: false,
    },
    {
        id: '3',
        type: 'concert',
        organizer: 'ACME Concerts',
        location: { latitude: 40.758, longitude: -73.985 },
        localization: {
            id: '3',
            slug: 'example-concert',
            localization: 'en',
            description: 'An example concert',
            title: 'Example Concert',
            address: '123 Main St, New York, NY 10001',
            web: 'https://example.com/concert',
            facebook: 'https://www.facebook.com/example-concert',
            organizerName: 'ACME Concerts',
            organizerEmail: 'info@example.com',
            organizerPhone: '+1 (555) 123-4567',
            image: 'https://example.com/concert/image.jpg',
            metaDescription: 'An example concert for testing purposes',
            metaImage: 'https://example.com/concert/meta-image.jpg',
        },
        dateFrom: new Date(2023, 3, 14, 19, 30, 0).toISOString(),
        dateTo: new Date(2023, 3, 14, 22, 30, 0).toISOString(),
        orderableFrom: new Date(2023, 2, 15).toISOString(),
        orderableUntil: new Date(2023, 3, 13).toISOString(),
        timezone: {
            displayName: 'Eastern Standard Time',
            id: 'America/New_York',
            dstsavings: 3600000,
            rawOffset: -18000000,
        },
        published: true,
        publishedRestriction: false,
        suspended: false,
        soldOut: false,
        draft: false,
    },
    {
        id: '4',
        type: 'workshop',
        organizer: 'ACME Workshops',
        location: { latitude: 40.714, longitude: -74.006 },
        localization: {
            id: '4',
            slug: 'example-workshop',
            localization: 'en',
            description: 'An example workshop',
            title: 'Example Workshop',
            address: '789 6th Ave, New York, NY 10001',
            web: 'https://example.com/workshop',
            facebook: 'https://www.facebook.com/example-workshop',
            organizerName: 'ACME Workshops',
            organizerEmail: 'info@example.com',
            organizerPhone: '+1 (555) 123-4567',
            image: 'https://example.com/workshop/image.jpg',
            metaDescription: 'An example workshop for testing purposes',
            metaImage: 'https://example.com/workshop/meta-image.jpg',
        },
        dateFrom: new Date(2023, 3, 28, 14, 0, 0).toISOString(),
        dateTo: new Date(2023, 3, 28, 16, 0, 0).toISOString(),
        orderableFrom: new Date(2023, 2, 20).toISOString(),
        orderableUntil: new Date(2023, 3, 27).toISOString(),
        timezone: {
            displayName: 'Eastern Standard Time',
            id: 'America/New_York',
            dstsavings: 3600000,
            rawOffset: -18000000,
        },
        published: true,
        publishedRestriction: false,
        suspended: false,
        soldOut: false,
        draft: false,
    },
]
