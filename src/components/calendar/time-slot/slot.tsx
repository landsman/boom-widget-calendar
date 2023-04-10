import {EventType} from "@local/api/view/events/types/event-type";
import styled from "styled-components";
import {useAppContext} from "@local/runtime";

type PropTypes = {
    event: EventType; // todo: sent just necessary data!
}

export function TimeSlot({ event }: PropTypes): JSX.Element {
    const { setSelectedEvent } = useAppContext();
    return (
        <Wrapper>
            <Content onClick={() => setSelectedEvent(event.id)}>
                {event.dateFrom.toString()}
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  display: block;
  cursor: pointer;
  
  &:hover {
    background: chocolate;
  }
`;

const Content = styled.div`
  color: red;
`;
