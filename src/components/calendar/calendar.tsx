import React, {useState} from 'react';
import {useLingui} from "@lingui/react";
import {t} from "@lingui/macro";
import {DayPicker} from 'react-day-picker';
import {useAppContext} from "@local/runtime";
import {useLocaleContext} from "@local/configuration/i18n";
import {getFooter} from "@local/components/calendar/footer";
import {isSameDay} from "date-fns";
import {CalendarStyles} from "@local/components/calendar/calendar-styles";

export function Calendar(): JSX.Element {
    const { i18n } = useLingui();
    const {
        features,
        occupiedDates,
        setSelectedMonth,
        selectedDate,
        setSelectedDate,
        selectedDateEvents
    } = useAppContext();
    const { localeDataForCalendar  } = useLocaleContext();
    const [showFooter, setShowFooter] = useState<boolean>(false);
    const [defaultMonth, setDefaultMonth] = useState<undefined | Date>(new Date());

    /** show skeleton until app context fetch locale data */
    if (undefined === localeDataForCalendar) {
        return (
            <div>{i18n._(t`loading`)}...</div>
        );
    }

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

    const footer = getFooter(showFooter, features.allowTimeSlots, selectedDateEvents);
    const disabled = occupiedDates || [];

    return (
        <CalendarStyles>
            <DayPicker
                mode="single"
                locale={localeDataForCalendar}
                disabled={(date: Date) => !disabled.some((d) => isSameDay(d, date))}
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
