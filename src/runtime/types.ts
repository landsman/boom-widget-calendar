import {EventType} from "@local/api/view/events/types";
import {FeatureTypes} from "@local/configuration/features";
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";

export type ProviderResponseTypes = {
    isProduction: boolean;
    features: FeatureTypes;
    notOccupiedDays: undefined | Date[];
    setSelectedMonth: (month: Date) => void;
    selectedDate: undefined | Date,
    setSelectedDate: (newDate: Date) => void;
    selectedDateEvents: undefined | EventType[];
    setSelectedEvent: (eventId: string) => void;
    selectedEvent: undefined | EventType;
    flashMessage: undefined | string;
    organizerId: undefined | string;
    themeConfig: CustomizedThemeOverride;
};
