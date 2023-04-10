import {ReactNode, useEffect, useState} from "react";
import type {Locale} from "date-fns";
import {EventType} from "@local/api/view/events/types/event-type";
import {AppLocale} from "@local/configuration/i18n";
import {mockConfig} from "@local/configuration/boom-widget";
import {CurrentDateType} from "@local/utils/date-time/get-current-date";
import {FeatureTypes} from "@local/configuration/features";
import {lazyLoadLocale} from "@local/components/calendar/locale-loader";
import {AppContext, ProviderResponseTypes} from "@local/runtime";
import {handleGetEvents} from "./data/get-events";
import {flashMessageText} from "@local/components/flash-message/messages";

type PropTypes = {
    children: ReactNode;
    currentDate: CurrentDateType;
    locale: AppLocale;
    features: FeatureTypes;
}

export function AppProvider({ children, currentDate, locale, features }: PropTypes) {
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
