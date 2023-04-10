import React from "react";
import styled from "styled-components";

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import {BoomWidgetConfigThemeTypes} from "../../configuration/boom-widget/properties";
import {useAppContext} from "../../runtime";

type PropTypes = {
    widgetTheme: BoomWidgetConfigThemeTypes;
}

export function Calendar({ widgetTheme }: PropTypes) {
    const { year, month } = useAppContext();

    console.debug("Calendar - current year is ", year);
    console.debug("Calendar - current month is ", month);

    const [selected, setSelected] = React.useState<Date>();

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    return (
        <Wrapper>
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
`;
