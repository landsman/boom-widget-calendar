import {ReactNode, useEffect, useState} from "react";
import {useLingui} from "@lingui/react";
import {t} from "@lingui/macro";
import {EventType} from "@local/api/view/events/types";
import {FeatureTypes} from "@local/api/view/organizer/detail";
import {CurrentDateType} from "@local/utils";
import {flashMessageText} from "@local/components/flash-message";
import {AppContext, ProviderResponseTypes} from "@local/runtime";
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";
import {getOccupiedDates, oneDayRangeEvents} from "@local/models";
import {appProviderDefaultValues} from "@local/runtime/default-values";
import {buildConfigFromUrl} from "@local/configuration/organizer";
import {loadBoomScripts} from "@local/components/widget";
import {ErrorMessage} from "@local/components/error-message";
import {DateRangeString} from "@local/utils/date-time/types/date-range";
import {sortEventsByDuration} from "@local/models/events/sort-by-duration";

type PropTypes = {
    children: ReactNode;
    features: null | FeatureTypes;
    currentDate: CurrentDateType;
    themeConfig: CustomizedThemeOverride;
};

export function AppProvider({ features, children, currentDate, themeConfig }: PropTypes) {
    const { i18n } = useLingui();
    const { organizerId, isProduction } = buildConfigFromUrl();

    const init = appProviderDefaultValues;
    const [isLoading, setIsLoading] = useState<boolean>(init.isLoading);
    const [errorMessage, setErrorMessage] = useState<undefined | string>(undefined);
    const [occupiedDates, setOccupiedDates] = useState<undefined | Date[]>(init.occupiedDates);
    const [selectedMonth, setSelectedMonth] = useState<Date>(currentDate.date);
    const [selectedDate, setSelectedDate] = useState<undefined | Date>(init.selectedDate);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState<undefined | DateRangeString>(undefined);
    const [selectedDateEvents, setSelectedDateEvents] = useState<undefined | EventType[]>(init.selectedDateEvents);
    const [selectedEvent, setSelectedEvent] = useState<undefined | EventType>(init.selectedEvent);
    const [isWidgetLoading, setWidgetLoading] = useState<boolean>(init.isWidgetLoading);

    /** different init message for time slots */
    let defaultFlashMessage = flashMessageText.selectDate;
    if (features?.allowTimeSlots && undefined === selectedDate) {
        defaultFlashMessage = flashMessageText.selectDateAndTime;
    }

    const [flashMessage, setFlashMessage] = useState<undefined | string>(defaultFlashMessage);

    /**
     * get a new data from api when user change the month
     */
    const handleGetEventsForCurrentMonth = async (newMonthSelected: Date) => {
        if (null === organizerId) {
            return;
        }
        const result = await getOccupiedDates(
            i18n,
            organizerId,
            newMonthSelected,
            setErrorMessage
        );
        setOccupiedDates(result);
    };

    /**
     * user clicked to the specific date in the calendar
     */
    const handleSetDate = async (newDateSelected: Date) => {
        setFlashMessage(undefined);
        setSelectedDateEvents(undefined);
        setSelectedEvent(undefined);
        setSelectedTimeSlot(undefined);
        setSelectedDate(newDateSelected);

        const apiEvents = await oneDayRangeEvents(
            i18n,
            organizerId!,
            newDateSelected || currentDate.date,
            setErrorMessage,
        );

        if (0 === apiEvents.length) {
            setFlashMessage(flashMessageText.noEvents);
            return;
        }

        if (features?.allowTimeSlots) {
            const sortData = sortEventsByDuration(apiEvents);
            setSelectedDateEvents(sortData);
            setFlashMessage(flashMessageText.selectTime);
        } else {
            setFlashMessage(undefined);
            setSelectedEvent(apiEvents[0]);
        }
    }

    /**
     * if the feature is allowed, put the info to app context
     */
    const handleSetSelectedTimeSlot = async (dateRange: undefined | DateRangeString) => {
        setSelectedTimeSlot(dateRange);
    }

    /**
     * user clicked to specific event in the calendar (time slot)
     */
    const handleSetSelectedEvent = async (eventId: string) => {
        const result = selectedDateEvents?.filter((i) => i.id === eventId).shift();
        setSelectedEvent(result);
    }

    /**
     * init and month switch in calendar component produce a new api request to get occupied days
     */
    useEffect(() => {
        setOccupiedDates(undefined);
        handleGetEventsForCurrentMonth(selectedMonth);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedMonth]);


    /**
     * hide flash message when its specific event selected
     */
    useEffect(() => {
        if (undefined !== selectedEvent) {
            setFlashMessage(undefined);
        }
    }, [selectedEvent]);


    /** load boom external files */
    useEffect(() => {
        if (null === organizerId) {
            return;
        }
        loadBoomScripts(isProduction);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**
     * 🛑 stop with rendering
     */
    if (null === organizerId) {
        return <ErrorMessage text={t`error.config.organizer_id_missing`} />;
    }

    /**
     * 🛑 stop with rendering
     */
    if (undefined !== errorMessage) {
        return <ErrorMessage text={errorMessage} />;
    }

    const contextValue: ProviderResponseTypes = {
        isLoading,
        setIsLoading,
        organizerId,
        isProduction,
        isWidgetLoading,
        setWidgetLoading,
        features,
        occupiedDates,
        setSelectedMonth,
        selectedDate,
        setSelectedDate: handleSetDate,
        selectedTimeSlot,
        setSelectedTimeSlot: handleSetSelectedTimeSlot,
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
