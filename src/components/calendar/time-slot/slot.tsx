import styled, {css} from "styled-components";
import {useAppContext} from "@local/runtime";
import {SlotText} from "@local/components/calendar/time-slot/text";

type PropTypes = {
    id: string;
    dateFrom: Date;
    dateTo: Date;
};

export function TimeSlot({ id, dateFrom, dateTo }: PropTypes): JSX.Element {
    const { selectedEvent, setSelectedEvent } = useAppContext();
    const isActive = selectedEvent?.id === id;

    const handleSelectItem = (eventId: string): void => {
        if (isActive) {
            return;
        }
        setSelectedEvent(eventId);
    }

    return (
        <Wrapper active={isActive}>
            <Content onClick={() => handleSelectItem(id)}>
                <SlotText
                    dateFrom={dateFrom}
                    dateTo={dateTo}
                />
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div<{ active: boolean }>`
  margin: auto;
  
  // clickable
  cursor: pointer;
  
  // debug
  border: 1px solid transparent;
  border-radius: 6px;

  &:hover {
    background: white;
    color: black;
  }

  ${({ active }) => active && css`
    background: ${(props) => props.theme.colors!.gray!['3']};
    color: white;
    
    &:hover {
      cursor: not-allowed;
      
      // same design as active
      background: ${(props) => props.theme.colors!.gray!['3']};
      color: white;
    }
  `}
`;

const Content = styled.div`
  padding: 5px 5px;
`;
