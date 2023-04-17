import {ReactNode} from "react";
import styled from "styled-components";
import {breakpoints} from "@local/components/theme/breakpoints";
import 'react-day-picker/dist/style.css';

type PropTypes = {
    children: ReactNode;
}

/**
 * Overrides to default styles - 'react-day-picker/dist/style.css'
 * @See https://react-day-picker.js.org/basics/styling
 */
export function CalendarStyles({ children }: PropTypes) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 90%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    max-width: ${breakpoints.container};
    margin: 0 auto;
    padding: 10px 0;

    background: ${(props) => props.theme.colors!.gray!['0']};
  }
  
  // calendar styles overrides
  &> div, .rdp {
    width: 100%;
    max-width: 100%;
    padding: 30px 30px;
    background: ${(props) => props.theme.colors!.gray!['0']};
    border-radius: ${(props) => props.theme.borderRadius ? props.theme.borderRadius.sm + `px` : 'unset'};
    
    margin: 0 auto;

    // columns
    @media (max-width: ${breakpoints.tablet}) {
      width: 290px;
      max-width: 100%;
      margin: 0 auto;
      padding: 10px 0;
    }
    
    border: ${(props) => props.theme?.calendarBorder ? props.theme?.calendarBorder : 'unset'};
  }

  .rdp-months {
    margin: 0 auto;
  }
  
  .rdp-caption_label {
    color: ${(props) => props.theme.colors!.gray!['9']};
  }
  
  .rdp-button_reset {
    border-radius: ${(props) => props.theme.borderRadius ? props.theme.borderRadius.xs + `px` : 'unset'};
  }
  
  .rdp-head_cell {
    color: ${(props) => props.theme.colors!.gray!['4']};
  }
  
  .rdp-button {
    color: ${(props) => props.theme.colors!.gray!['4']};
    
    &:hover {
      color: black;
    }
  }
  
  .rdp-nav_button {
    width: 36px;
    height: 36px;
    overflow: hidden;
    
    // todo: specific for client!
    background: #363053;

    svg {
      height: 10px;
      width: auto;
      
      &> path {
        fill: white;
      }
    }
    
    &:hover {
      background: black;

      svg {
        &> path {
          fill: black;
        }
      }
    }
  }
  
  // todo: specic for client
  .rdp-nav_icon {

  }
  
  .rdp-nav_button_previous {
    
  }
  
  .rdp-nav_button_next {
    margin-left: 5px;
  }
  
  .rdp-day {
    font-weight: 500;
  }

  .rdp-day_today {
    // todo: client specific, move to theme!
    border: 1px solid #D527D7;
  }

  .rdp-day_selected {
    font-weight: bold;
    // todo: client specific, move to theme!
    background: #D527D7;
    border: 1px solid transparent;
    //background: props => props.widgetTheme.colors.violet[0]

    &:hover {
      color: white;
    }
  }
  
  .rdp-day_disabled {
    cursor: not-allowed;
    color: #665D78;
    
    &:hover {
      // todo: client specific, move to theme!
      color: #665D78;
    }
  }
    
`;
