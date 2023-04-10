import {ReactNode, useEffect, useState} from "react";
import {EventType} from "../api/view/events/types/event-type";
import {AppContext} from "./app-context";
import {handleGetEvents} from "./data/get-events";
import {CurrentDateType, ProviderResponseTypes} from "./types";
import {Locale} from "../configuration/locale";
import {mockConfig} from "../configuration/boom-widget/mock-config";

type PropTypes = {
    children: ReactNode;
    currentDate: CurrentDateType;
    locale: Locale; // todo: implementation of i18n provider
}

export function AppProvider({ children, currentDate, locale }: PropTypes) {
    const [year, setYear] = useState<undefined | number>(currentDate.year);
    const [month, setMonth] = useState<undefined | number>(currentDate.month);
    const [events, setEvents] = useState<undefined | EventType[]>(undefined);
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

    // year, month
    useEffect(() => {
        handleGetEvents(
            mockConfig.organizerId,
            year,
            month,
            setEvents,
        );
    }, []);

    const contextValue: ProviderResponseTypes = {
        locale,
        year,
        setYear: handleSetYear,
        month,
        setMonth: handleSetMonth,
        events,
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
