import React, {useState} from 'react';
import styled from "styled-components";
import {useLingui} from "@lingui/react";
import {t} from "@lingui/macro";
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {useAppContext} from "@local/runtime";
import {BoomWidgetConfigThemeTypes} from "@local/configuration/boom-connect";
import {ListOfSlots} from "@local/components/calendar";
import {useLocaleContext} from "@local/configuration/i18n";

type PropTypes = {
    widgetTheme: BoomWidgetConfigThemeTypes;
}

export function Calendar({ widgetTheme }: PropTypes) {
    const { i18n } = useLingui();
    const { localeDataForCalendar  } = useLocaleContext();
    const { features, events, date, setDate } = useAppContext();

    const [showFooter, setShowFooter] = useState<boolean>(true);

    /** show skeleton until app context fetch locale data */
    if (undefined === localeDataForCalendar) {
        return (
            <div>{i18n._(t`loading`)}</div>
        );
    }

    /**
     * place under calendar with time slots
     */
    const footer = () => {
        const anyEvents = undefined !== events && events?.length > 0;
        if (showFooter && features.allowTimeSlots && anyEvents) {
            return <ListOfSlots events={events} />;
        }
        return <span />;
    };

    /** set date to app context */
    const handleSelected = (day: Date | undefined, selectedDay: Date) => {
        setDate(selectedDay!);
        setShowFooter(true);
    };

    /** hide footer when change month */
    const handleOnMonthChange = (month: Date) => {
        if (date?.getMonth() === month.getMonth()) {
            setShowFooter(true);
        } else {
            setShowFooter(false);
        }
    };

    return (
        <Wrapper widgetTheme={widgetTheme}>
            <DayPicker
                mode="single"
                locale={localeDataForCalendar}
                selected={date}
                onSelect={handleSelected}
                onMonthChange={handleOnMonthChange}
                footer={footer()}
                showOutsideDays
            />
        </Wrapper>
    );
}

const Wrapper = styled.div<{ widgetTheme: BoomWidgetConfigThemeTypes }>`
    
    // calendar styles overrides
  .rdp-button_reset {
    border-radius: 0;
  }
  .rdp-button {
    
  }
  
  .rdp-nav_button {
    width: 36px;
    height: 36px;
    overflow: hidden;
    
    border: 1px solid black;
  }
  
  .rdp-nav_button_previous {
    
  }
  
  .rdp-nav_button_next {
    margin-left: 5px;
  }
  
  .rdp-day {
    
  }

  .rdp-day_selected {
    background: black;
    //background: props => props.widgetTheme.colors.violet[0]
  } 
  
  .rdp-day_today {
    border: 1px solid gray;
  }
    
`;
