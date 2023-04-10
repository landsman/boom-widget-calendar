import styled from "styled-components";
import {BoomWidgetConfigTypes} from "../../configuration/boom-widget/properties";
import {SelectedDate} from "../content/selected-date";

export function BoomWidget({ theme, organizerId, eventId, eventUrl }: BoomWidgetConfigTypes): JSX.Element {
    return (
        <Wrapper>
            <SelectedDate />
            <h1>
                boom widget
            </h1>
            <>
                organizerId: {organizerId}
            </>
            <>
                eventId: {eventId}
            </>
            <>
                eventUrl: {eventUrl}
            </>
            <>
                <h2>theme</h2>
                {JSON.stringify(theme)}
            </>
            <ForTests>for-tests</ForTests>
        </Wrapper>
    );
}

const Wrapper = styled.div`
`;

const ForTests = styled.div`
    display: none;
`;
