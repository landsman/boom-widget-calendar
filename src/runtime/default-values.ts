import {featureDefaultValues} from "@local/api/view/organizer/detail/features";
import {ProviderResponseTypes} from "@local/runtime/types";
import {mangoTheme} from "@local/components/theme/lib-mango/MangoTheme";

export const appProviderDefaultValues: ProviderResponseTypes = {
    isProduction: false,
    isLoading: true,
    setIsLoading: (_s: boolean) => null,
    isWidgetLoading: true,
    setWidgetLoading: (_s: boolean) => null,
    features: featureDefaultValues,
    occupiedDates: undefined,
    setSelectedMonth: (_m: Date) => null,
    selectedDate: undefined,
    setSelectedDate: (_d: Date) => null,
    selectedDateEvents: undefined,
    setSelectedEvent: (_id: string) => null,
    selectedEvent: undefined,
    flashMessage: undefined,
    organizerId: undefined,
    themeConfig: mangoTheme,
};
