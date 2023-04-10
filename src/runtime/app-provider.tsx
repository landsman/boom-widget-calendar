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

type PropTypes = {
    children: ReactNode;
    currentDate: CurrentDateType;
    locale: AppLocale; // todo: implementation of i18n provider
    features: FeatureTypes;
}

export function AppProvider({ children, currentDate, locale, features }: PropTypes) {
    const [localeDataForCalendar, setLocaleDataForCalendar] = useState<undefined | Locale>(undefined);

    const [date, setDate] = useState<Date>(currentDate.date);

    const [events, setEvents] = useState<undefined | EventType[]>(undefined);
    const [eventsInTheDay, setEventsInTheDay] = useState<undefined | EventType[]>(undefined);
    const [flashMessage, setFlashMessage] = useState<undefined | string>(undefined);

    const handleLocaleDataForCalendar = () => {
        lazyLoadLocale(locale, setLocaleDataForCalendar);
    }

    const handleEventsInTheDay = async () => {
        const result = filterEventsByDay(events, date);
        setEventsInTheDay(result);
    }

    useEffect(() => {
        handleLocaleDataForCalendar();
    }, [locale]);

    /**
     * init, user changed day in the calendar
     */
    useEffect(() => {
        handleEventsInTheDay();
        handleGetEvents(
            mockConfig.organizerId,
            date,
            setEvents,
        );
    }, [date]);

    const contextValue: ProviderResponseTypes = {
        locale,
        localeDataForCalendar,
        date,
        setDate,
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
