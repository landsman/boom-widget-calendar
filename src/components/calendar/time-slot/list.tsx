import {EventType} from "@local/api/view/events/types/event-type";
import {TimeSlot} from "@local/components/calendar/time-slot/slot";
import styled from "styled-components";

type PropTypes = {
    events: EventType[]; // todo: change to small DTO
}

export function ListOfSlots({ events }: PropTypes): JSX.Element {
    return (
        <Wrapper>
            {events.map((item) => (
                <TimeSlot
                    key={item.id}
                    id={item.id}
                    dateFrom={item.dateFrom}
                    dateTo={item.dateTo}
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
