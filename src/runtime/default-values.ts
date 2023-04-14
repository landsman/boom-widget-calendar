import {featureDefaultValues} from "@local/configuration/features";
import {ProviderResponseTypes} from "@local/runtime/types";
import {mangoTheme} from "@local/components/theme/lib-mango/MangoTheme";

export const appProviderDefaultValues: ProviderResponseTypes = {
    isProduction: false,
    features: featureDefaultValues,
    selectedDate: undefined,
    setSelectedDate: (_d: Date) => null,
    selectedDateEvents: undefined,
    setSelectedEvent: (_id: string) => null,
    selectedEvent: undefined,
    flashMessage: undefined,
    organizerId: undefined,
    themeConfig: mangoTheme,
};
