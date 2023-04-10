import styled from "styled-components";
import {useAppContext} from "@local/runtime";
import {BoomWidgetConfigTypes} from "@local/configuration/boom-widget";
import {SelectedDate} from "@local/components/content/selected-date";
import {FlashMessage} from "@local/components/flash-message";

export function BoomWidget({ theme, organizerId }: BoomWidgetConfigTypes): JSX.Element {
    const { selectedEvent, flashMessage } = useAppContext();
    return (
        <Wrapper>
            <SelectedDate />
            <FlashMessage
                text={flashMessage}
            />
            <h1>
                boom widget
            </h1>
            <>
                organizerId: {organizerId}
            </>
            <>
                <h2>selectedEvent</h2>
                <div>
                    {JSON.stringify(selectedEvent)}
                </div>
            </>
            <>
                <h2>theme</h2>
                <>
                    {JSON.stringify(theme)}
                </>
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
