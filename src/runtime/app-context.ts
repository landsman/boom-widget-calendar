import {createContext, useContext} from "react";
import {ProviderResponseTypes} from "@local/runtime/types";
import {defaultLocale} from "@local/configuration/i18n";
import {featureDefaultValues} from "@local/configuration/features";
import {EventType} from "@local/api/view/events/types/event-type";

const defaultValues = {
    features: featureDefaultValues,
    locale: defaultLocale,
    localeDataForCalendar: undefined,
    date: undefined,
    setDate: (_d: Date) => null,
    selectedEvent: undefined,
    setSelectedEvent: (_e: EventType) => null,
    flashMessage: undefined,
};

export const AppContext = createContext<ProviderResponseTypes>(defaultValues);

export const useAppContext = () => useContext(AppContext);
