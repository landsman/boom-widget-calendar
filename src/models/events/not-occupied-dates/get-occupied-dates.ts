import {I18n} from "@lingui/core";
import {getOneMonthRangeEvents} from "@local/models";
import {EventType} from "@local/api/view/events/types";
import {excludeMultiDayEvent} from "@local/models/events/exclude-multi-day-event/exclude-multi-day-event";
import {Dispatch, SetStateAction} from "react";
import {t} from "@lingui/macro";

function getOccupiedDatesFromEvents(events: EventType[]): Date[] {
    const filteredEvents = excludeMultiDayEvent(events);
    return filteredEvents.map(event => new Date(event.dateFrom));
}

export async function getOccupiedDates(
    i18n: I18n,
    organizerId: string,
    currentMonthDate: Date,
    setErrorMessage: Dispatch<SetStateAction<undefined | string>>,
): Promise<Date[]> {
    try {
        const events = await getOneMonthRangeEvents(i18n, organizerId, currentMonthDate);
        return getOccupiedDatesFromEvents(events)
    } catch (e: any) {

        console.error("🔥 getFreeDatesWithoutEvent problem", e);

        if (e?.response?.status === 404) {
            setErrorMessage(t`error.api.org_not_exist`);
        } else {
            setErrorMessage(t`error.api.occupied_dates_general_issue`);
        }

        return [];
    }
}
