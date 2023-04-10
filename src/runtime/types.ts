import type { Locale } from "date-fns";
import {EventType} from "../api/view/events/types/event-type";
import {AppLocale} from "../configuration/i18n";
import {FeatureTypes} from "@local/configuration/features";

export type ProviderResponseTypes = {
    features: FeatureTypes,
    locale: AppLocale;
    localeDataForCalendar: undefined | Locale;
    date: undefined | Date,
    setDate: (newDate: Date) => void;
    events: undefined | EventType[];
    setSelectedEvent: (eventId: string) => void;
    selectedEvent: undefined | EventType;
    flashMessage: undefined | string;
};
