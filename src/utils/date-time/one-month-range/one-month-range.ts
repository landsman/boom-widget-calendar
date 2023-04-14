import {DateRange} from "@local/utils/date-time/types/date-range";

/**
 * Generates a DateRange for the calendar day of the given date.
 * The DateRange will cover the entire day, from the first second of the day
 * to the last second of the day, in the UTC time zone.
 * @param date The date to generate the DateRange for.
 * @returns A DateRange object representing the calendar day of the given date.
 */
export function getOneMonthRange(date: Date): DateRange {
    const year = date.getFullYear();
    const month = date.getMonth();

    const startOfMonth = new Date(year, month, 1);
    const endOfMonth = new Date(year, month + 1, 0, 23, 59, 59, 999);

    return {
        from: startOfMonth,
        to: endOfMonth
    };
}
