import styled, {css} from "styled-components";

type PropTypes = {
  disabled?: true;
}

export const SlotWrapper = styled.div<PropTypes>`
  width: calc(33.33% - 10px);
  margin-left: 10px;
  margin-top: 10px;
  
  // clickable
  cursor: pointer;
  font-size: 13px;

  ${({ disabled }) => disabled && css`
    cursor: progress;
  `}
`;

export const SlotContent = styled.div<{ active?: boolean }>`
  padding: 5px 0;
  text-align: center;

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
`;
