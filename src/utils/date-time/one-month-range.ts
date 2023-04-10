interface DateRange {
    from: Date;
    to: Date;
}

export function getOneMonthRange(timezone: string, date: Date): DateRange {
    const startOfMonth = new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1));
    const endOfMonth = new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0));

    endOfMonth.setUTCDate(endOfMonth.getUTCDate() - 1);
    endOfMonth.setUTCHours(23, 59, 59, 999);

    if (isNaN(startOfMonth.getTime()) || isNaN(endOfMonth.getTime())) {
        throw new Error('Invalid date');
    }

    return { from: startOfMonth, to: endOfMonth };
}
