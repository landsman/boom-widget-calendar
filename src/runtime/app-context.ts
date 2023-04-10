import {createContext, useContext} from "react";
import {ProviderResponseTypes} from "@local/runtime/types";
import {defaultLocale} from "@local/configuration/i18n";
import {featureDefaultValues} from "@local/configuration/features";

const defaultValues = {
    features: featureDefaultValues,
    locale: defaultLocale,
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
