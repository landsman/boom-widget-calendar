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
  padding: 0;
  margin: 0;
  list-style: none;
  
  /* We first create a flex layout context */
  display: flex;

  /* Then we define the flow direction 
     and if we allow the items to wrap 
   * Remember this is the same as:
   * flex-direction: row;
   * flex-wrap: wrap;
   */
  flex-flow: row;

  /* Then we define how is distributed the remaining space */
  justify-content: left;
  
  gap: 10px 10px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 10px;
  
  // debug
  background: bisque;
`;
