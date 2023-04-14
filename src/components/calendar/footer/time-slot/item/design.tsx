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
  
  // todo: client-specific! move it to theme!
  background: #363152;
  color: white;
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

  ${({ disabled }) => disabled && css`
    cursor: progress;
  `}
`;

export const SlotContent = styled.div`
  padding: 5px 5px;
`;