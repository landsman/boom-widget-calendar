import {EventType} from "../api/view/events/types/event-type";
import {AppLocale} from "../configuration/locale";

export type ProviderResponseTypes = {
    locale: AppLocale;
    year: undefined | number;
    setYear: (newYearNumber: number) => void;
    month: undefined | number;
    setMonth: (newMonthNumber: number) => void;
    day: undefined | number;
    setDay: (newDayNumber: number) => void;
    events: undefined | EventType[];
    eventsInTheDay: undefined | EventType[];
    flashMessage: undefined | string;
};
