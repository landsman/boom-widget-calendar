import {ReactNode, useEffect, useState} from "react";
import {useLingui} from "@lingui/react";
import {EventType} from "@local/api/view/events/types";
import {FeatureTypes} from "@local/configuration/features";
import {CurrentDateType} from "@local/utils";
import {flashMessageText} from "@local/components/flash-message";
import {AppContext, ProviderResponseTypes} from "@local/runtime";
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";
import {getOccupiedDates, oneDayRangeEvents} from "@local/models";
import {appProviderDefaultValues} from "@local/runtime/default-values";
import {buildConfigFromUrl} from "@local/configuration/organizer";

type PropTypes = {
    children: ReactNode;
    features: FeatureTypes;
    currentDate: CurrentDateType;
    isProduction: boolean;
    themeConfig: CustomizedThemeOverride;
};

export function AppProvider({ features, children, currentDate, isProduction, themeConfig }: PropTypes) {
    const { i18n } = useLingui();
    const { organizerId } = buildConfigFromUrl();

    const init = appProviderDefaultValues;
    const [isLoading, setIsLoading] = useState<boolean>(init.isLoading);
    const [occupiedDates, setOccupiedDates] = useState<undefined | Date[]>(init.occupiedDates);
    const [selectedMonth, setSelectedMonth] = useState<Date>(currentDate.date);
    const [selectedDate, setSelectedDate] = useState<undefined | Date>(init.selectedDate);
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
        const result = await getOccupiedDates(i18n, organizerId!, newMonthSelected);
        setOccupiedDates(result);
    };

    /**
     * user clicked to the specific date in the calendar
     */
    const handleSetDate = async (newDateSelected: Date) => {
        setFlashMessage(undefined);
        setSelectedDateEvents(undefined);
        setSelectedEvent(undefined);
        setSelectedDate(newDateSelected);

        const apiEvents = await oneDayRangeEvents(
            i18n,
            organizerId!,
            newDateSelected || currentDate.date
        );

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

    /**
     * 🛑 stop with rendering
     */
    if (null === organizerId) {
        return <>no organizer id!!</>;
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
