import React from 'react';
import styled from "styled-components";
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {BoomWidgetConfigThemeTypes} from "@local/configuration/boom-widget";
import {useAppContext} from "@local/runtime";

type PropTypes = {
    widgetTheme: BoomWidgetConfigThemeTypes;
}

export function Calendar({ widgetTheme }: PropTypes) {
    const { localeDataForCalendar, date, setDate } = useAppContext();

    /** show skeleton until app context fetch locale data */
    if (undefined === localeDataForCalendar) {
        return (
            <div>Loading localization...</div>
        );
    }

    // todo
    let footer = <p>There should be time slots....</p>;

    /** set date to app context */
    const handleSelected = (day: Date | undefined, selectedDay: Date) => {
        setDate(selectedDay!);
    }

    return (
        <Wrapper>
            <DayPicker
                mode="single"
                locale={localeDataForCalendar}
                selected={date}
                onSelect={handleSelected}
                footer={footer}
                showOutsideDays
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
`;
