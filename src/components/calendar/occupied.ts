import {Matcher} from "react-day-picker";

/**
 * disable every date before api fetch is done
 */
export function getOccupied(notOccupiedDays: undefined | Date[]): Matcher | Matcher[] | undefined {
    const generateBigRange = {
        from: new Date(2023, 1, 1),
        to: new Date(2025, 1, 1),
    };

    return (undefined === notOccupiedDays)
        ? [generateBigRange]
        : notOccupiedDays;
}
