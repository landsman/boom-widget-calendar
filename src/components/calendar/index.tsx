import styled from "styled-components";
import {BoomWidgetConfigThemeTypes} from "../../configuration/boom-widget/properties";

type PropTypes = {
    widgetTheme: BoomWidgetConfigThemeTypes;
}

export function Calendar({ widgetTheme }: PropTypes) {
    return (
        <Wrapper>
            calendar
        </Wrapper>
    );
}

const Wrapper = styled.div`
`;
