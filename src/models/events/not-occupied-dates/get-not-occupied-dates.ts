import {getOccupiedDates, getOneMonthRangeEvents} from "@local/models";
import {excludeOccupiedDays, generateMonthDates} from "@local/utils/date-time";

export async function getNotOccupiedDates(organizerId: string, currentMonthDate: Date): Promise<Date[]> {
    try {
        // generate empty days
        const month = currentMonthDate.getMonth();
        const dates = generateMonthDates(month);

        // fetch occupied
        const events = await getOneMonthRangeEvents(organizerId, currentMonthDate);
        const occupied = getOccupiedDates(events);

        // do the diff
        return excludeOccupiedDays(dates, occupied);
    } catch (e: any) {
        console.error("🔥 getFreeDatesWithoutEvent problem", e);
        return [];
    }
}
