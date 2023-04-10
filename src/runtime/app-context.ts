import {createContext, useContext} from "react";
import {ProviderResponseTypes} from "./types";
import {AppLocale} from "../configuration/locale";

const defaultValues = {
    locale: AppLocale.en,
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
