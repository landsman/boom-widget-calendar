import styled from "styled-components";
import {BoomWidgetConfigThemeTypes} from "../../configuration/boom-widget/properties";
import {useAppContext} from "../../runtime";

type PropTypes = {
    widgetTheme: BoomWidgetConfigThemeTypes;
}

export function Calendar({ widgetTheme }: PropTypes) {
    const { year, month } = useAppContext();

    console.debug("Calendar - current year is ", year);
    console.debug("Calendar - current month is ", month);

    return (
        <Wrapper>
            calendar
        </Wrapper>
    );
}

const Wrapper = styled.div`
`;
