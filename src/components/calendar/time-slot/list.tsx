import {EventType} from "@local/api/view/events/types/event-type";
import {TimeSlot} from "@local/components/calendar/time-slot/slot";
import styled from "styled-components";

type PropTypes = {
    events: EventType[];
}

export function ListOfSlots({ events }: PropTypes): JSX.Element {
    return (
        <Wrapper>
            {events.map((item) => (
                <TimeSlot
                    key={item.id}
                    event={item}
                />
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
  max-width: 100%;
  display: grid;
  
  // debug
  background: bisque;
`;
