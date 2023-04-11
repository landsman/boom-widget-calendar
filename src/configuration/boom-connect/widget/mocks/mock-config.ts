import {mockTheme} from "./mock-theme";
import {BoomWidgetConfigTypes} from "../properties";

// todo: this will be dynamic from outside
//export const mockOrganizerId = "8fabf06c-0078-47e4-9c30-3f17827da0ab";

// michal landsman
export const mockOrganizerId = "e43780b9-a220-42d3-a026-cc97875a61e3";

export const mockConfig: BoomWidgetConfigTypes = {
    organizerId: mockOrganizerId,
    eventId: '#',
    eventUrl: '#',
    theme: mockTheme,
};
