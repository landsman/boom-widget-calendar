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
import {filterEventsByDay} from "./data/filter-events-by-day";
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
    const [eventsInTheDay, setEventsInTheDay] = useState<undefined | EventType[]>(undefined);

    useEffect(() => {
        lazyLoadLocale(locale, setLocaleDataForCalendar);
    }, [locale]);

    /** different init message for time slots */
    let defaultFlashMessage = flashMessageText.selectDate;
    if (features.allowTimeSlots && undefined === date) {
        defaultFlashMessage = flashMessageText.selectDateAndTime;
    }

    const [flashMessage, setFlashMessage] = useState<undefined | string>(defaultFlashMessage);

    const handleEventsInTheDay = async () => {
        const result = filterEventsByDay(events, date);
        setEventsInTheDay(result);
    }

    const handleSetDate = async (newValue: Date) => {
        setFlashMessage(undefined);
        setDate(newValue);
        handleGetEvents(
            mockConfig.organizerId,
            date || currentDate.date,
            setEvents,
        );
    }

    useEffect(() => {
        //handleEventsInTheDay();
    }, [date, events])

    const contextValue: ProviderResponseTypes = {
        features,
        locale,
        localeDataForCalendar,
        date,
        setDate: handleSetDate,
        events,
        eventsInTheDay,
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
