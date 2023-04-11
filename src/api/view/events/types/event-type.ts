import {LocationType, TimezoneType} from "@local/api/general/types";
import {LocalizationType} from "@local/api/view/events/types";

export type EventType = {
    id: string;
    type: string;
    organizer: string;
    location: LocationType;
    localization: LocalizationType;
    dateFrom: Date;
    dateTo: Date;
    orderableFrom: Date;
    orderableUntil: Date;
    timezone: TimezoneType;
    published: boolean;
    publishedRestriction: boolean;
    suspended: boolean;
    soldOut: boolean;
    draft: boolean;
};
