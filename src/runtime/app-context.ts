import {createContext, useContext} from "react";
import {ProviderResponseTypes} from "@local/runtime/types";
import {defaultLocale} from "@local/configuration/i18n";

const defaultValues = {
    locale: defaultLocale,
    localeDataForCalendar: undefined,
    year: undefined,
    setYear: (_y: number) => null,
    month: undefined,
    setMonth: (_m: number) => null,
    day: undefined,
    setDay: (_d: number) => null,
    date: undefined,
    setDate: (_d: Date) => null,
    events: undefined,
    eventsInTheDay: undefined,
    flashMessage: undefined,
};

export const AppContext = createContext<ProviderResponseTypes>(defaultValues);

export const useAppContext = () => useContext(AppContext);
