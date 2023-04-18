import styled, {css} from "styled-components";

type PropTypes = {
  active?: boolean;
  disabled?: true;
}

export const SlotWrapper = styled.div<PropTypes>`
  margin: auto;
  
  // clickable
  cursor: pointer;
  font-size: 13px;
  
  background: ${(props) => props.theme.calendarTimeSlotBg ? props.theme.calendarTimeSlotBg : 'unset'};
  color: ${(props) => props.theme.calendarTimeSlotColor ? props.theme.calendarTimeSlotColor : 'unset'};
  border-radius: ${(props) => props.theme.borderRadius ? props.theme.borderRadius.sm + `px` : 'unset'};

  &:hover {
    background: white;
    color: black;
  }

  ${({ active }) => active && css`
    background: ${(props) => props.theme.colors!.gray!['3']};
    color: ${(props) => props.theme.colors!.gray!['4']};
    
    &:hover {
      cursor: not-allowed;
      
      // same design as active
      background: ${(props) => props.theme.colors!.gray!['3']};
      color: white;
    }
  `}

  ${({ disabled }) => disabled && css`
    cursor: progress;
  `}
`;

export const SlotContent = styled.div`
  padding: 5px 5px;
`;
