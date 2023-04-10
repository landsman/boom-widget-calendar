import {ReactNode, useEffect, useState} from "react";
import {EventType} from "../api/view/events/types/event-type";
import {AppContext} from "./app-context";
import {handleGetEvents} from "./data/get-events";
import {ProviderResponseTypes} from "./types";
import {Locale} from "../configuration/locale";
import {mockConfig} from "../configuration/boom-widget/mock-config";
import {CurrentDateType} from "../utils/date-time/get-current-date";
import {FeatureTypes} from "../configuration/features";
import {filterEventsByDay} from "./data/filter-events-by-day";

type PropTypes = {
    children: ReactNode;
    currentDate: CurrentDateType;
    locale: Locale; // todo: implementation of i18n provider
    features: FeatureTypes;
}

export function AppProvider({ children, currentDate, locale, features }: PropTypes) {
    const [year, setYear] = useState<undefined | number>(currentDate.year);
    const [month, setMonth] = useState<undefined | number>(currentDate.month);
    const [day, setDay] = useState<undefined | number>(currentDate.day);
    const [events, setEvents] = useState<undefined | EventType[]>(undefined);
    const [eventsInTheDay, setEventsInTheDay] = useState<undefined | EventType[]>(undefined);
    const [flashMessage, setFlashMessage] = useState<undefined | string>(undefined);

    // todo: add reset actions for flash message etc
    const handleSetYear = (newYear: number) => {
        setYear(newYear);
        setFlashMessage("please select date");
    }

    // todo: add reset action for flash message etc
    const handleSetMonth = (newMonth: number) => {
        setMonth(newMonth);
        setFlashMessage("please select date");
    }

    // todo: add reset action for flash message etc
    const handleSetDay = (newDay: number) => {
        setDay(newDay);
        setFlashMessage(undefined);
    }

    const handleEventsInTheDay = async () => {
        const result = filterEventsByDay(events, year, month, day);
        setEventsInTheDay(result);
    }

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
        year,
        setYear: handleSetYear,
        month,
        setMonth: handleSetMonth,
        day,
        setDay: handleSetDay,
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
