import {DateRange} from "@local/utils/date-time/types/date-range";

export function getOneDayDateRange(date: Date): DateRange {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const endOfMonth = new Date(date.getFullYear(), date.getMonth(),  date.getDate(), 23, 59, 59, 59);
    return {
        from: startOfMonth,
        to: endOfMonth
    };
}
