import React, {useState} from 'react';
import styled from "styled-components";
import {useLingui} from "@lingui/react";
import {t} from "@lingui/macro";
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {useAppContext} from "@local/runtime";
import {ListOfSlots} from "@local/components/calendar";
import {useLocaleContext} from "@local/configuration/i18n";
import {breakpoints} from "@local/components/theme/breakpoints";
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";

type PropTypes = {
    themeConfig: CustomizedThemeOverride;
}

export function Calendar({ themeConfig }: PropTypes) {
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
        if (showFooter && features?.allowTimeSlots && anyEvents) {
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
        <Wrapper themeConfig={themeConfig}>
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

// todo: use theme styles to calendar
const Wrapper = styled.div<{ themeConfig: CustomizedThemeOverride }>`
  // columns
  @media (max-width: ${breakpoints.tablet}) {
    width: 300px;
    margin: 0 auto;
    padding: 10px 0;
  }
  
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
