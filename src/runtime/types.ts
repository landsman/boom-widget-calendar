import {EventType} from "@local/api/view/events/types";
import {FeatureTypes} from "@local/api/view/organizer/detail";
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";
import {DateRangeString} from "@local/utils/date-time/types/date-range";

export type ProviderResponseTypes = {
    isLoading: boolean;
    setIsLoading: (state: boolean) => void;
    isProduction: boolean;
    features: null | FeatureTypes;
    isWidgetLoading: boolean;
    setWidgetLoading: (state: boolean) => void;
    occupiedDates: undefined | Date[];
    setSelectedMonth: (month: Date) => void;
    selectedDate: undefined | Date,
    selectedTimeSlot: undefined | DateRangeString;
    setSelectedTimeSlot: (dateRange: undefined | DateRangeString) => void,
    setSelectedDate: (newDate: Date) => void;
    selectedDateEvents: undefined | EventType[];
    setSelectedEvent: (eventId: string) => void;
    selectedEvent: undefined | EventType;
    flashMessage: undefined | string;
    organizerId: undefined | string;
    themeConfig: CustomizedThemeOverride;
};
