import {Matcher} from "react-day-picker";

/**
 * disable every date before api fetch is done
 */
export function getOccupied(notOccupiedDays: undefined | Date[]): Matcher | Matcher[] | undefined {
    const generateBigRange = {
        from: new Date(2021, 1, 1),
        to: new Date(2029, 1, 1),
    };

    return (undefined === notOccupiedDays)
        ? [generateBigRange]
        : notOccupiedDays;
}
