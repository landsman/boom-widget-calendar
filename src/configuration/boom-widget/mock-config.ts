import {mockTheme} from "./mock-theme";
import {BoomWidgetConfigTypes} from "./properties";

// todo: this will be dynamic from outside
export const mockOrganizerId = "8fabf06c-0078-47e4-9c30-3f17827da0ab";

export const mockConfig: BoomWidgetConfigTypes = {
    organizerId: mockOrganizerId,
    theme: mockTheme,
};
