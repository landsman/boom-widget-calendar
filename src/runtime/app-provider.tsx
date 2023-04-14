import {ReactNode, useEffect, useState} from "react";
import {EventType} from "@local/api/view/events/types";
import {mockConfig} from "@local/configuration/boom-connect";
import {FeatureTypes} from "@local/configuration/features";
import {CurrentDateType} from "@local/utils";
import {flashMessageText} from "@local/components/flash-message";
import {AppContext, ProviderResponseTypes, handleGetEvents} from "@local/runtime";
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";

type PropTypes = {
    children: ReactNode;
    organizerId: string;
    features?: undefined | FeatureTypes;
    currentDate: CurrentDateType;
    isProduction: boolean;
    themeConfig: CustomizedThemeOverride;
}

export function AppProvider({ organizerId, features, children, currentDate, isProduction, themeConfig }: PropTypes) {
    const [selectedDate, setSelectedDate] = useState<undefined | Date>(undefined);
    const [events, setEvents] = useState<undefined | EventType[]>(undefined);
    const [selectedEvent, setSelectedEvent] = useState<undefined | EventType>(undefined);

    /** different init message for time slots */
    let defaultFlashMessage = flashMessageText.selectDate;
    if (features?.allowTimeSlots && undefined === selectedDate) {
        defaultFlashMessage = flashMessageText.selectDateAndTime;
    }

    const [flashMessage, setFlashMessage] = useState<undefined | string>(defaultFlashMessage);

    /**
     * user clicked to the specific date in the calendar
     */
    const handleSetDate = async (newDateSelected: Date) => {
        setFlashMessage(undefined);
        setEvents(undefined);
        setSelectedEvent(undefined);
        setSelectedDate(newDateSelected);

        const apiEvents = await handleGetEvents(
            mockConfig.organizerId,
            newDateSelected || currentDate.date
        );

        if (0 === apiEvents.length) {
            setFlashMessage(flashMessageText.noEvents);
            return;
        }

        if (features?.allowTimeSlots) {
            setEvents(apiEvents);
            setFlashMessage(flashMessageText.selectTime);
        } else {
            setFlashMessage(undefined);
            setSelectedEvent(apiEvents[0]);
        }
    }

    /**
     * user clicked to specific event in the calendar (time slot)
     */
    const handleSetSelectedEvent = async (eventId: string) => {
        const result = events?.filter((i) => i.id === eventId).shift();
        setSelectedEvent(result);
    }

    /**
     * hide flash message when its specific event selected
     */
    useEffect(() => {
        if (undefined !== selectedEvent) {
            setFlashMessage(undefined);
        }
    }, [selectedEvent])

    const contextValue: ProviderResponseTypes = {
        organizerId,
        isProduction,
        features,
        selectedDate,
        setSelectedDate: handleSetDate,
        events,
        setSelectedEvent: handleSetSelectedEvent,
        selectedEvent,
        flashMessage,
        themeConfig,
    }

    return (
        <>
            <AppContext.Provider value={contextValue}>
                {children}
            </AppContext.Provider>
        </>
    );
}
