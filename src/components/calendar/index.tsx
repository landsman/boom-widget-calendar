import React from 'react';
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

    /** show skeleton until app context fetch locale data */
    if (undefined === localeDataForCalendar) {
        return (
            <div>{i18n._(t`loading`)}</div>
        );
    }

    let footer = <div />;

    if (features.allowTimeSlots &&
        undefined !== events &&
        events?.length > 0
    ) {
        footer = <ListOfSlots events={events} />;
    }

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
