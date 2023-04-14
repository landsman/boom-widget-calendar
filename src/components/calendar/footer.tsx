import {ListOfSlots} from "@local/components/calendar/time-slot";
import React from "react";
import {EventType} from "@local/api/view/events/types";

/**
 * place under calendar with time slots
 */
export function getFooter(
    showFooter: boolean,
    allowTimeSlots: boolean,
    selectedDateEvents: undefined | EventType[],
): JSX.Element {
    const anyEvents = undefined !== selectedDateEvents && selectedDateEvents?.length > 0;
    if (showFooter && allowTimeSlots && anyEvents) {
        return <ListOfSlots events={selectedDateEvents} />;
    }
    return <span />;
}
