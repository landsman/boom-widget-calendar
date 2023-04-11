import {EventType} from "@local/api/view/events/types";
import {FeatureTypes} from "@local/configuration/features";

export type ProviderResponseTypes = {
    isProduction: boolean,
    features: undefined | FeatureTypes,
    date: undefined | Date,
    setDate: (newDate: Date) => void;
    events: undefined | EventType[];
    setSelectedEvent: (eventId: string) => void;
    selectedEvent: undefined | EventType;
    flashMessage: undefined | string;
};
