import React, {useState} from 'react';
import styled from "styled-components";
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {BoomWidgetConfigThemeTypes} from "@local/configuration/boom-widget";
import {useAppContext} from "@local/runtime";
import {useLingui} from "@lingui/react";
import {t} from "@lingui/macro";
import {ListOfSlots} from "@local/components/calendar/time-slot";

type PropTypes = {
    widgetTheme: BoomWidgetConfigThemeTypes;
}

export function Calendar({ widgetTheme }: PropTypes) {
    const { i18n } = useLingui();
    const { localeDataForCalendar, features, events, date, setDate } = useAppContext();
    const [showFooter, setShowFooter] = useState<boolean>(true);

    /** show skeleton until app context fetch locale data */
    if (undefined === localeDataForCalendar) {
        return (
            <div>{i18n._(t`loading`)}</div>
        );
    }

    /**
     * place under calendar with time slots
     */
    const footer = () => {
        const anyEvents = undefined !== events && events?.length > 0;
        if (showFooter && features.allowTimeSlots && anyEvents) {
            return <ListOfSlots events={events} />;
        }
        return <span />;
    };

    /** set date to app context */
    const handleSelected = (day: Date | undefined, selectedDay: Date) => {
        setDate(selectedDay!);
        setShowFooter(true);
    };

    /** hide footer when change month */
    const handleOnMonthChange = (month: Date) => {
        if (date?.getMonth() === month.getMonth()) {
            setShowFooter(true);
        } else {
            setShowFooter(false);
        }
    };

    return (
        <Wrapper>
            <DayPicker
                mode="single"
                locale={localeDataForCalendar}
                selected={date}
                onSelect={handleSelected}
                onMonthChange={handleOnMonthChange}
                footer={footer()}
                showOutsideDays
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
`;
