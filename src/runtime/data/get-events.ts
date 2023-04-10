import {Dispatch, SetStateAction} from "react";
import {getViewEvents} from "../../api/view/events/view-events";
import {EventType} from "../../api/view/events/types/event-type";

export async function handleGetEvents(
    organizerId: string,
    year: undefined | number,
    month: undefined | number,
    setEvents: Dispatch<SetStateAction<undefined | EventType[]>>,
): Promise<void> {
    if (undefined === year) {
        console.debug("handleGetEvents - skip because of `year` is undefined");
        return;
    }
    if (undefined === month) {
        console.debug("handleGetEvents - skip because of `month` is undefined");
        return;
    }
    try {
        const response = await getViewEvents({
            organizerId,
        });
        if (response) {
            setEvents(response.page);
        }
    } catch (e: any) {
        console.error("handleGetEvents - problem", e);
    }
}
