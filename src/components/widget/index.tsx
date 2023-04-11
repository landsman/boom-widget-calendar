import styled from "styled-components";
import {useAppContext} from "@local/runtime";
import {BoomWidgetConfigTypes} from "@local/configuration/boom-widget";
import {SelectedDate} from "@local/components/content/selected-date";
import {FlashMessage} from "@local/components/flash-message";
import {BoomWidgetElement} from "@local/components/widget/boom-element";

export function BoomWidget({ organizerId, theme }: BoomWidgetConfigTypes): JSX.Element {
    const { selectedEvent, flashMessage } = useAppContext();
    return (
        <Wrapper>
            <SelectedDate />
            <FlashMessage
                text={flashMessage}
            />
            {selectedEvent && (
                <>
                    <h1>
                        boom widget
                    </h1>
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
                    <>
                        <BoomWidgetElement
                            organizerId={organizerId}
                            eventId={selectedEvent!.id}
                            eventUrl={'#'}
                            theme={theme}
                        />
                    </>
                </>
            )}
            <ForTests>for-tests</ForTests>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
`;

const ForTests = styled.div`
    display: none;
`;
