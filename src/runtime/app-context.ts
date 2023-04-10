import {createContext, useContext} from "react";
import {ProviderResponseTypes} from "./types";
import {Locale} from "../configuration/locale";

const defaultValues = {
    locale: Locale.en,
    year: undefined,
    setYear: (_y: number) => null,
    month: undefined,
    setMonth: (_m: number) => null,
    day: undefined,
    setDay: (_d: number) => null,
    events: undefined,
    eventsInTheDay: undefined,
    flashMessage: undefined,
};

export const AppContext = createContext<ProviderResponseTypes>(defaultValues);

export const useAppContext = () => useContext(AppContext);
