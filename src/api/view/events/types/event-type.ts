import {LocationType} from "../../../general/types/location";
import {LocalizationType} from "./localization";
import {TimezoneType} from "../../../general/types/timezone";

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
