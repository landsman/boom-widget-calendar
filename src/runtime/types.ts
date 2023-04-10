import {EventType} from "../api/view/events/types/event-type";
import {Locale} from "../configuration/locale";

export type ProviderResponseTypes = {
    locale: Locale;
    year: undefined | number;
    setYear: (newYearNumber: number) => void;
    month: undefined | number;
    setMonth: (newMonthNumber: number) => void;
    day: undefined | number;
    setDay: (newDayNumber: number) => void;
    events: undefined | EventType[];
    flashMessage: undefined | string;
};
