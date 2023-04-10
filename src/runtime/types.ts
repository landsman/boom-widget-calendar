import type { Locale } from "date-fns";
import {EventType} from "../api/view/events/types/event-type";
import {AppLocale} from "../configuration/locale";

export type ProviderResponseTypes = {
    locale: AppLocale;
    localeDataForCalendar: undefined | Locale;
    date: undefined | Date,
    setDate: (newDate: Date) => void;
    events: undefined | EventType[];
    eventsInTheDay: undefined | EventType[];
    flashMessage: undefined | string;
};
