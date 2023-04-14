function areTheyTheSame(first: Date, second: Date): boolean {
    return first.getFullYear() === second.getFullYear()
        && first.getMonth() === second.getMonth()
        && first.getDate() === second.getDate();
}

/**
 * The result are free days without any event
 */
export function excludeOccupiedDays(wholeMonthDays: Date[], occupiedDays: Date[]): Date[] {
    const freeDays: Date[] = [];

    for (const day of wholeMonthDays) {
        let isOccupied = false;
        for (const occupiedDay of occupiedDays) {
            if (areTheyTheSame(occupiedDay, day)) {
                isOccupied = true;
                break;
            }
        }
        if (!isOccupied) {
            freeDays.push(day);
        }
    }

    return freeDays;
}
