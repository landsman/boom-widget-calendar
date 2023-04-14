import styled from "styled-components";
import {useAppContext} from "@local/runtime";
import {SelectedDate} from "@local/components/content/selected-date";
import {FlashMessage} from "@local/components/flash-message";
import {BoomWidgetElement} from "@local/components/widget";

export function BoomWidget(): JSX.Element {
    const { selectedEvent, flashMessage } = useAppContext();

    return (
        <Wrapper>
            <SelectedDate />
            <FlashMessage
                text={flashMessage}
            />
            {selectedEvent && (
                <>
                    <BoomWidgetElement />
                </>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
`;
