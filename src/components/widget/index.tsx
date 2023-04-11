import styled from "styled-components";
import {useAppContext} from "@local/runtime";
import {BoomWidgetConfigTypes} from "@local/configuration/boom-widget";
import {SelectedDate} from "@local/components/content/selected-date";
import {FlashMessage} from "@local/components/flash-message";
import {BoomWidgetElement} from "@local/components/widget/boom-element";
import {buildBoomWidgetUrl} from "@local/configuration/boom-widget/build-url";

export function BoomWidget({ organizerId, theme }: BoomWidgetConfigTypes): JSX.Element {
    const { isProduction, selectedEvent, flashMessage } = useAppContext();

    let eventUrl;
    if (selectedEvent) {
        eventUrl = buildBoomWidgetUrl(
            isProduction,
            selectedEvent.localization.localization,
            selectedEvent.localization.slug
        );
    }

    return (
        <Wrapper>
            <SelectedDate />
            <FlashMessage
                text={flashMessage}
            />
            {selectedEvent && (
                <>
                    <BoomWidgetElement
                        organizerId={organizerId}
                        eventId={selectedEvent!.id}
                        eventUrl={eventUrl}
                        theme={theme}
                    />
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
