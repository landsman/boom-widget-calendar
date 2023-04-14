import React, {useState} from 'react';
import styled from "styled-components";
import {useLingui} from "@lingui/react";
import {t} from "@lingui/macro";
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {useAppContext} from "@local/runtime";
import {useLocaleContext} from "@local/configuration/i18n";
import {breakpoints} from "@local/components/theme/breakpoints";
import {getFooter} from "@local/components/calendar/footer";
import {isSameDay} from "date-fns";

export function Calendar(): JSX.Element {
    const { i18n } = useLingui();
    const {
        features,
        notOccupiedDays,
        setSelectedMonth,
        selectedDate,
        setSelectedDate,
        selectedDateEvents
    } = useAppContext();
    const { localeDataForCalendar  } = useLocaleContext();
    const [showFooter, setShowFooter] = useState<boolean>(true);
    const [defaultMonth, setDefaultMonth] = useState<undefined | Date>(new Date());

    /** show skeleton until app context fetch locale data */
    if (undefined === localeDataForCalendar) {
        return (
            <div>{i18n._(t`loading`)}...</div>
        );
    }

    /** set date to app context */
    const handleSelected = (day: Date | undefined, selectedDay: Date) => {
        setSelectedDate(selectedDay!);
        setShowFooter(true);
    };

    /** hide footer when change month */
    const handleOnMonthChange = (month: Date) => {
        setDefaultMonth(month);
        setSelectedMonth(month);
        if (selectedDate?.getMonth() === month.getMonth()) {
            setShowFooter(true);
        } else {
            setShowFooter(false);
        }
    };

    const disabled = notOccupiedDays || [];
    const footer = getFooter(showFooter, features.allowTimeSlots, selectedDateEvents);

    return (
        <Wrapper>
            <DayPicker
                mode="single"
                locale={localeDataForCalendar}
                disabled={(date: Date) => disabled.some((d) => isSameDay(d, date))}
                selected={selectedDate}
                onSelect={handleSelected}
                onMonthChange={handleOnMonthChange}
                defaultMonth={defaultMonth}
                footer={footer}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 90%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    padding: 10px 0;

    background: ${(props) => props.theme.colors!.gray!['0']};
  }
  
  // calendar styles overrides
  .rdp {
    width: 100%;
    max-width: 100%;
    padding: 30px 30px;
    background: ${(props) => props.theme.colors!.gray!['0']};
    border-radius: 6px;
    
    margin: 0 auto;

    // columns
    @media (max-width: ${breakpoints.tablet}) {
      width: 290px;
      max-width: 100%;
      margin: 0 auto;
      padding: 10px 0;
    }
  }

  .rdp-months {
    margin: 0 auto;
  }
  
  .rdp-caption_label {
    color: ${(props) => props.theme.colors!.gray!['9']};
  }
  
  .rdp-button_reset {
    // todo: this is specific for client!
    border-radius: 4px;
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
