import {mockEvents, mockMultiDayEvents} from "@local/mocks/events";

export * from "./events";

export const mockWithMultiDayEvents = [...mockEvents, ...mockMultiDayEvents];
