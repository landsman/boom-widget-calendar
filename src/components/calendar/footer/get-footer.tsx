import React from "react";
import {ListOfSlots, ListSkeleton} from "@local/components/calendar/footer/time-slot";
import {EventType} from "@local/api/view/events/types";

/**
 * place under calendar with time slots
 */
export function getFooter(
    showFooter: boolean,
    allowTimeSlots: undefined | null | boolean,
    selectedDateEvents: undefined | EventType[],
): JSX.Element {
    const anyEvents = undefined !== selectedDateEvents && selectedDateEvents?.length > 0;

    if (showFooter && allowTimeSlots && !anyEvents) {
        return <ListSkeleton />;
    }

    if (showFooter && allowTimeSlots && anyEvents) {
        return <ListOfSlots events={selectedDateEvents} />;
    }

    return <span />;
}
