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
  
  .rdp {
    font-family: ${(props) => props.theme.customFontFamilySafeValue ? props.theme.customFontFamilySafeValue : 'inherit'};
  }
  
  // calendar styles overrides
  &> div, .rdp {
    
    width: 100%;
    max-width: 100%;
    padding: ${(props) => props.theme.calendarPadding ? props.theme.calendarPadding : '30px 30px'}; // todo
    background: ${(props) => props.theme.colors!.gray!['0']};
    border-radius: ${(props) => props.theme.borderRadius ? props.theme.borderRadius.sm + `px` : 'unset'};
    
    margin: 0 auto;

    border: ${(props) => props.theme?.calendarBorder ? props.theme?.calendarBorder : 'unset'};
    box-shadow:  ${(props) => props.theme?.calendarShadow ? props.theme?.calendarShadow : 'unset'};
    
    @media (max-width: ${breakpoints.tablet}) {
      width: 290px;
      max-width: 100%;
      margin: 0 auto;
      padding: 10px 0;
      // todo
      //border: 0;
      //box-shadow: unset;
    }
  }

  .rdp-months {
    margin: 0 auto;
  }
  
  .rdp-caption_label {
    color: ${(props) => props.theme.colors!.gray!['9']};
    text-transform: capitalize;
  }
  
  .rdp-button_reset {
    border-radius: ${(props) => props.theme.borderRadius ? props.theme.borderRadius.xs + `px` : 'unset'};
  }
  
  .rdp-head_cell {
    color: ${(props) => props.theme.calendarDayNameColor ? props.theme.calendarDayNameColor : props.theme.colors!.gray!['4']};
  }
  
  .rdp-button {
    color: ${(props) => props.theme.colors!.gray!['4']};
    
    &:hover:not(.rdp-day_selected) {
      border-color: ${(props) => props.theme?.calendarMonthArrowBgHover ? props.theme?.calendarMonthArrowBgHover : 'unset'}!important;
    }
    
    &:hover:not([disabled]):not(.rdp-day_selected) {
      background: ${(props) => props.theme?.calendarMonthArrowBgHover ? props.theme?.calendarMonthArrowBgHover : 'unset'}!important;
    }
  }
  
  .rdp-nav_button {
    width: 36px;
    height: 36px;
    overflow: hidden;
    
    background: ${(props) => props.theme?.calendarMonthArrowBg ? props.theme?.calendarMonthArrowBg : 'unset'};
    border: ${(props) => props.theme?.calendarMonthArrowBorder ? props.theme?.calendarMonthArrowBorder : 'unset'};

    svg {
      height: 10px;
      width: auto;
      
      &> path {
        fill: ${(props) => props.theme?.calendarMonthArrowIcon ? props.theme?.calendarMonthArrowIcon : 'unset'};
      }
    }
    
    &:hover {
      background: ${(props) => props.theme?.calendarMonthArrowBgHover ? props.theme?.calendarMonthArrowBgHover : 'unset'}!important;

      svg {
        &> path {
          fill: ${(props) => props.theme?.calendarMonthArrowIconHover ? props.theme?.calendarMonthArrowIconHover : 'unset'};;
        }
      }
    }
  }
  
  .rdp-nav_icon {

  }
  
  .rdp-nav_button_previous {
    
  }
  
  .rdp-nav_button_next {
    margin-left: 5px;
  }
  
  .rdp-day {
    font-weight: 500;
    color: ${(props) => props.theme.calendarAvailableDayColor ? props.theme.calendarAvailableDayColor : props.theme.colors!.gray!['4']};
  }

  .rdp-day_today {
    border: ${(props) => props.theme?.calendarTodayBorder ? props.theme?.calendarTodayBorder : 'unset'};
  }

  .rdp-day_selected {
    font-weight: bold;
    background: ${(props) => props.theme?.selectedDayColor ? props.theme?.selectedDayColor : 'unset'};
    border: 1px solid transparent;

    &:hover {
      color: white;
    }
  }
  
  .rdp-day_disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme?.disabledDayColor ? props.theme?.disabledDayColor : 'unset'};
    opacity: 0.7 !important;
    
    &:hover {
      color: ${(props) => props.theme?.disabledDayColor ? props.theme?.disabledDayColor : 'unset'};
    }
  }

  .rdp-day_today.rdp-day_disabled {
    background: ${(props) => props.theme?.disabledDayAndTodayBg ? props.theme?.disabledDayAndTodayBg : 'unset'};
    border-color: ${(props) => props.theme?.disabledDayAndTodayBg ? props.theme?.disabledDayAndTodayBg : 'unset'};
    color: ${(props) => props.theme.colors!.gray!['4']};
    opacity: 1;
  }
    
`;
