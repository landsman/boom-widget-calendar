import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import type { Locale } from "date-fns";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import {BoomWidgetConfigThemeTypes} from "../../configuration/boom-widget/properties";
import {useAppContext} from "../../runtime";
import {lazyLoadLocale} from "./locale-loader";

type PropTypes = {
    widgetTheme: BoomWidgetConfigThemeTypes;
}

export function Calendar({ widgetTheme }: PropTypes) {
    const { locale, year, month } = useAppContext();

    console.debug("Calendar - current year is ", year);
    console.debug("Calendar - current month is ", month);

    const [localeData, setLocaleData] = useState<undefined | Locale>(undefined);
    const [selected, setSelected] = useState<undefined | Date>(undefined);

    useEffect(() => {
        lazyLoadLocale(locale, setLocaleData);
    }, [locale]);

    if (undefined === localeData) {
        return (
            <div>Loading localization...</div>
        );
    }

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    return (
        <Wrapper>
            <DayPicker
                mode="single"
                locale={localeData}
                selected={selected}
                onSelect={setSelected}
                footer={footer}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
`;
