import styled from "styled-components";
import {BoomWidgetConfigTypes} from "../../configuration/boom-widget/properties";

export function BoomWidget({ theme, organizerId, eventId, eventUrl }: BoomWidgetConfigTypes): JSX.Element {
    return (
        <Wrapper>
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
        </Wrapper>
    );
}

const Wrapper = styled.div`
`;
