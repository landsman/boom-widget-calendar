import {LocationType, TimezoneType} from "@local/api/general/types";
import {LocalizationType} from "@local/api/view/events/types";

export type EventType = {
    id: string;
    type: string;
    organizer: string;
    location: LocationType;
    localization: LocalizationType;
    dateFrom: string;
    dateTo: string;
    orderableFrom: string;
    orderableUntil: string;
    timezone: TimezoneType;
    published: boolean;
    publishedRestriction: boolean;
    suspended: boolean;
    soldOut: boolean;
    draft: boolean;
};

/**
 * @see #EventType
 */
export const eventTypeIsoDateFields = [
    'dateFrom',
    'dateTo',
    'orderableFrom',
    'orderableUntil',
];
