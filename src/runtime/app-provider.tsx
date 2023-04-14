import {ReactNode, useEffect, useState} from "react";
import {EventType} from "@local/api/view/events/types";
import {FeatureTypes} from "@local/configuration/features";
import {CurrentDateType} from "@local/utils";
import {flashMessageText} from "@local/components/flash-message";
import {AppContext, ProviderResponseTypes} from "@local/runtime";
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";
import {getNotOccupiedDates, oneDayRangeEvents} from "@local/models";

type PropTypes = {
    children: ReactNode;
    organizerId: string;
    features: FeatureTypes;
    currentDate: CurrentDateType;
    isProduction: boolean;
    themeConfig: CustomizedThemeOverride;
}

export function AppProvider({ organizerId, features, children, currentDate, isProduction, themeConfig }: PropTypes) {
    const [notOccupiedDays, setNotOccupiedDays] = useState<undefined | Date[]>(undefined);
    const [selectedMonth, setSelectedMonth] = useState<Date>(currentDate.date);
    const [selectedDate, setSelectedDate] = useState<undefined | Date>(undefined);
    const [selectedDateEvents, setSelectedDateEvents] = useState<undefined | EventType[]>(undefined);
    const [selectedEvent, setSelectedEvent] = useState<undefined | EventType>(undefined);

    /** different init message for time slots */
    let defaultFlashMessage = flashMessageText.selectDate;
    if (features?.allowTimeSlots && undefined === selectedDate) {
        defaultFlashMessage = flashMessageText.selectDateAndTime;
    }

    const [flashMessage, setFlashMessage] = useState<undefined | string>(defaultFlashMessage);

    const handleGetEventsForCurrentMonth = async (newMonthSelected: Date) => {
        const result = await getNotOccupiedDates(organizerId, newMonthSelected);
        console.log("getNotOccupiedDates", result);

        setNotOccupiedDays(result);
    };

    /**
     * todo: make it pretty
     */
    useEffect(() => {
        console.log("change month triggered!")

        setNotOccupiedDays(undefined);
        handleGetEventsForCurrentMonth(selectedMonth);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedMonth]);

    /**
     * user clicked to the specific date in the calendar
     */
    const handleSetDate = async (newDateSelected: Date) => {
        setFlashMessage(undefined);
        setSelectedDateEvents(undefined);
        setSelectedEvent(undefined);
        setSelectedDate(newDateSelected);

        const apiEvents = await oneDayRangeEvents(organizerId, newDateSelected || currentDate.date);

        if (0 === apiEvents.length) {
            setFlashMessage(flashMessageText.noEvents);
            return;
        }

        if (features?.allowTimeSlots) {
            setSelectedDateEvents(apiEvents);
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
        const result = selectedDateEvents?.filter((i) => i.id === eventId).shift();
        setSelectedEvent(result);
    }

    /**
     * hide flash message when its specific event selected
     */
    useEffect(() => {
        if (undefined !== selectedEvent) {
            setFlashMessage(undefined);
        }
    }, [selectedEvent]);

    const contextValue: ProviderResponseTypes = {
        organizerId,
        isProduction,
        features,
        notOccupiedDays,
        setSelectedMonth,
        selectedDate,
        setSelectedDate: handleSetDate,
        selectedDateEvents,
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
