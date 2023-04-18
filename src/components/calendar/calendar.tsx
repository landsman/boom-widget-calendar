import React, {useEffect, useState} from 'react';
import {DayPicker} from 'react-day-picker';
import {useAppContext} from "@local/runtime";
import {useLocaleContext} from "@local/configuration/i18n";
import {getFooter} from "@local/components/calendar/footer";
import {isSameDay} from "date-fns";
import {CalendarStyles} from "@local/components/calendar/calendar-styles";
import {CalendarSkeleton} from "@local/components/calendar/calendar-skeleton";

export function Calendar(): JSX.Element {
    const {
        features,
        occupiedDates,
        setSelectedMonth,
        selectedDate,
        setSelectedDate,
        selectedDateEvents,
        setIsLoading
    } = useAppContext();
    const { localeDataForCalendar } = useLocaleContext();
    const [showFooter, setShowFooter] = useState<boolean>(false);
    const [defaultMonth, setDefaultMonth] = useState<undefined | Date>(new Date());

    /** hide global splash screen */
    useEffect(() => {
        if (localeDataForCalendar) {
            setIsLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /** set date to app context */
    const handleSelected = (day: Date | undefined, selectedDay: Date) => {
        setSelectedDate(selectedDay!);
        setShowFooter(true);
    };

    /** hide footer when change month */
    const handleOnMonthChange = (month: Date) => {
        setDefaultMonth(month);
        setSelectedMonth(month);
        if (selectedDate?.getMonth() === month.getMonth()) {
            setShowFooter(true);
        } else {
            setShowFooter(false);
        }
    };

    const footer = getFooter(showFooter, features?.allowTimeSlots, selectedDateEvents);

    /** show skeleton until app context fetch locale data */
    if (undefined === localeDataForCalendar || undefined === occupiedDates) {
        return (
            <CalendarSkeleton />
        );
    }

    return (
        <CalendarStyles>
            <DayPicker
                mode="single"
                locale={localeDataForCalendar}
                disabled={(date: Date) => !occupiedDates.some((d) => isSameDay(d, date))}
                selected={selectedDate}
                onSelect={handleSelected}
                onMonthChange={handleOnMonthChange}
                defaultMonth={defaultMonth}
                footer={footer}
                showOutsideDays
            />
        </CalendarStyles>
    );
}
