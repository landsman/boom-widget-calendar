import {createContext, useContext} from "react";
import {ProviderResponseTypes} from "@local/runtime/types";
import {defaultLocale} from "@local/configuration/i18n";
import {featureDefaultValues} from "@local/configuration/features";

const defaultValues = {
    isProduction: false,
    features: featureDefaultValues,
    locale: defaultLocale,
    changeLocale: (_l: string) => null,
    localeDataForCalendar: undefined,
    date: undefined,
    setDate: (_d: Date) => null,
    events: undefined,
    setSelectedEvent: (_id: string) => null,
    selectedEvent: undefined,
    flashMessage: undefined,
};

export const AppContext = createContext<ProviderResponseTypes>(defaultValues);

export const useAppContext = () => useContext(AppContext);
