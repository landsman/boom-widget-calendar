import {ReactNode, useEffect, useState} from "react";
import {EventType} from "../api/view/events/types/event-type";
import {AppContext} from "./app-context";
import {handleGetEvents} from "./data/get-events";
import {ProviderResponseTypes} from "./types";
import {AppLocale} from "../configuration/locale";
import {mockConfig} from "../configuration/boom-widget/mock-config";
import {CurrentDateType} from "../utils/date-time/get-current-date";
import {FeatureTypes} from "../configuration/features";
import {filterEventsByDay} from "./data/filter-events-by-day";
import type {Locale} from "date-fns";
import {lazyLoadLocale} from "../components/calendar/locale-loader";

type PropTypes = {
    children: ReactNode;
    currentDate: CurrentDateType;
    locale: AppLocale; // todo: implementation of i18n provider
    features: FeatureTypes;
}

export function AppProvider({ children, currentDate, locale, features }: PropTypes) {
    const [localeDataForCalendar, setLocaleDataForCalendar] = useState<undefined | Locale>(undefined);

    const [year, setYear] = useState<undefined | number>(currentDate.year);
    const [month, setMonth] = useState<undefined | number>(currentDate.month);
    const [day, setDay] = useState<undefined | number>(currentDate.day);
    const [date, setDate] = useState<Date>(currentDate.date);

    const [events, setEvents] = useState<undefined | EventType[]>(undefined);
    const [eventsInTheDay, setEventsInTheDay] = useState<undefined | EventType[]>(undefined);
    const [flashMessage, setFlashMessage] = useState<undefined | string>(undefined);

    const handleLocaleDataForCalendar = () => {
        lazyLoadLocale(locale, setLocaleDataForCalendar);
    }

    const handleEventsInTheDay = async () => {
        const result = filterEventsByDay(events, year, month, day);
        setEventsInTheDay(result);
    }

    useEffect(() => {
        handleLocaleDataForCalendar();
    }, [locale]);

    /**
     * init, year/month change in the calendar
     */
    useEffect(() => {
        handleGetEvents(
            mockConfig.organizerId,
            year,
            month,
            setEvents,
        );
    }, [year, month]);

    /**
     * when user has click to some day in the calendar
     */
    useEffect(() => {
        handleEventsInTheDay();
    }, [day])

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
