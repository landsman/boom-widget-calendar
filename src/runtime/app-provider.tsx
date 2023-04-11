import {ReactNode, useEffect, useState} from "react";
import type {Locale} from "date-fns";
import {EventType} from "@local/api/view/events/types";
import {AppLocale} from "@local/configuration/i18n";
import {mockConfig} from "@local/configuration/boom-connect";
import {FeatureTypes} from "@local/configuration/features";
import {CurrentDateType} from "@local/utils";
import {lazyLoadLocale} from "@local/components/calendar";
import {flashMessageText} from "@local/components/flash-message";
import {AppContext, ProviderResponseTypes, handleGetEvents} from "@local/runtime";

type PropTypes = {
    children: ReactNode;
    currentDate: CurrentDateType;
    locale: AppLocale;
    features: FeatureTypes;
    isProduction: boolean;
}

export function AppProvider({ children, currentDate, locale, features, isProduction }: PropTypes) {
    const [localeDataForCalendar, setLocaleDataForCalendar] = useState<undefined | Locale>(undefined);
    const [date, setDate] = useState<undefined | Date>(undefined);
    const [events, setEvents] = useState<undefined | EventType[]>(undefined);
    const [selectedEvent, setSelectedEvent] = useState<undefined | EventType>(undefined);

    /** calendar localization */
    useEffect(() => {
        lazyLoadLocale(locale, setLocaleDataForCalendar);
    }, [locale]);

    /** different init message for time slots */
    let defaultFlashMessage = flashMessageText.selectDate;
    if (features.allowTimeSlots && undefined === date) {
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
        setDate(newDateSelected);

        const apiEvents = await handleGetEvents(
            mockConfig.organizerId,
            newDateSelected || currentDate.date
        );

        if (0 === apiEvents.length) {
            setFlashMessage(flashMessageText.noEvents);
            return;
        }

        if (features.allowTimeSlots) {
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

    const contextValue: ProviderResponseTypes = {
        isProduction,
        features,
        locale,
        localeDataForCalendar,
        date,
        setDate: handleSetDate,
        events,
        setSelectedEvent: handleSetSelectedEvent,
        selectedEvent,
        flashMessage,
    }

    return (
        <>
            <AppContext.Provider value={contextValue}>
                {children}
            </AppContext.Provider>
        </>
    );
}
