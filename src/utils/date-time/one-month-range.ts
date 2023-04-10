interface DateRange {
    from: Date;
    to: Date;
}

export function getOneMonthRange(timezone: string, year: number, month: number): DateRange {
    if (isNaN(year)) {
        throw new Error('Invalid year');
    }

    if (isNaN(month) || month > 12) {
        throw new Error('Invalid month');
    }

    const startOfMonth = new Date(Date.UTC(year, month - 1, 1));
    const endOfMonth = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0));

    endOfMonth.setUTCDate(endOfMonth.getUTCDate() - 1);
    endOfMonth.setUTCHours(23, 59, 59, 999);

    if (isNaN(startOfMonth.getTime()) || isNaN(endOfMonth.getTime())) {
        throw new Error('Invalid date');
    }

    return { from: startOfMonth, to: endOfMonth };
}
