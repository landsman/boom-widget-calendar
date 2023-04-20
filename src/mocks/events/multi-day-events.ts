import {EventType} from "@local/api/view/events/types";

export const mockMultiDayEvents: EventType[] = [
    {
        id: '5',
        type: 'conference',
        organizer: 'Global Tech Conferences',
        location: { latitude: 37.7749, longitude: -122.4194 },
        localization: {
            id: '5',
            slug: 'global-tech-conference',
            localization: 'en',
            description: 'Join us for a three-day conference on the latest tech trends',
            title: 'Global Tech Conference',
            address: 'Moscone Center, 747 Howard St, San Francisco, CA 94103',
            web: 'https://globaltechconference.com',
            facebook: 'https://www.facebook.com/global-tech-conference',
            organizerName: 'Global Tech Conferences',
            organizerEmail: 'info@globaltechconferences.com',
            organizerPhone: '+1 (555) 123-4567',
            image: 'https://globaltechconference.com/image.jpg',
            metaDescription: 'A three-day conference on the latest tech trends',
            metaImage: 'https://globaltechconference.com/meta-image.jpg',
        },
        dateFrom: new Date(2023, 5, 12, 9, 0, 0).toISOString(),
        dateTo: new Date(2023, 5, 14, 17, 0, 0).toDateString(),
        orderableFrom: new Date(2023, 2, 1).toISOString(),
        orderableUntil: new Date(2023, 5, 11).toISOString(),
        timezone: {
            displayName: 'Pacific Standard Time',
            id: 'America/Los_Angeles',
            dstsavings: 3600000,
            rawOffset: -28800000,
        },
        published: true,
        publishedRestriction: false,
        suspended: false,
        soldOut: false,
        draft: false,
    },
    {
        id: '6',
        type: 'concert',
        organizer: 'ABC Concerts',
        location: { latitude: 51.5074, longitude: 0.1278 },
        localization: {
            id: '3',
            slug: 'summer-concert',
            localization: 'en',
            description: 'An amazing summer concert with great musicians!',
            title: 'Summer Concert',
            address: 'Wembley Stadium, Wembley, London, HA9 0WS',
            web: 'https://abcconcerts.com/summer-concert',
            facebook: 'https://www.facebook.com/abcconcerts',
            organizerName: 'ABC Concerts',
            organizerEmail: 'info@abcconcerts.com',
            organizerPhone: '+44 20 1234 5678',
            image: 'https://abcconcerts.com/image.jpg',
            metaDescription: 'An amazing summer concert with great musicians!',
            metaImage: 'https://abcconcerts.com/meta-image.jpg',
        },
        dateFrom: new Date(2022, 6, 15, 19, 0, 0).toISOString(),
        dateTo: new Date(2022, 6, 16, 23, 0, 0).toISOString(),
        orderableFrom: new Date(2022, 3, 1).toISOString(),
        orderableUntil: new Date(2022, 6, 14).toISOString(),
        timezone: {
            displayName: 'British Summer Time',
            id: 'Europe/London',
            dstsavings: 3600000,
            rawOffset: 0,
        },
        published: true,
        publishedRestriction: false,
        suspended: false,
        soldOut: false,
        draft: false,
    },
];
