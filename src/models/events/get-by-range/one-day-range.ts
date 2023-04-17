import {Dispatch, SetStateAction} from "react";
import {I18n} from "@lingui/core";
import {EventType} from "@local/api/view/events/types";
import {getOneDayDateRange} from "@local/utils";
import {filterByRange} from "@local/models/events/get-by-range/filter-by-range";
import {t} from "@lingui/macro";

export async function oneDayRangeEvents(
    i18n: I18n,
    organizerId: string,
    date: undefined | Date,
    setErrorMessage: Dispatch<SetStateAction<undefined | string>>,
): Promise<EventType[]> {
    if (undefined === date) {
        console.debug("handleGetEvents - skip because of `date` is undefined");
        return [];
    }
    try {
        const range = getOneDayDateRange(date);
        return filterByRange(i18n, organizerId, range);
    } catch (e: any) {

        if (e?.response?.status === 404) {
            setErrorMessage(t`error.api.org_not_exist`);
        } else {
            setErrorMessage(t`error.api.time_slots_general_issue`);
        }

        return [];
    }
}
