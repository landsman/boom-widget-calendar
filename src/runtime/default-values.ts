import {featureDefaultValues} from "@local/configuration/features";
import {ProviderResponseTypes} from "@local/runtime/types";
import {mangoTheme} from "@local/components/theme/lib-mango/MangoTheme";

export const appProviderDefaultValues: ProviderResponseTypes = {
    isProduction: false,
    features: featureDefaultValues,
    date: undefined,
    setDate: (_d: Date) => null,
    events: undefined,
    setSelectedEvent: (_id: string) => null,
    selectedEvent: undefined,
    flashMessage: undefined,
    organizerId: undefined,
    themeConfig: mangoTheme,
};
