interface Datatable {
    [key: string]: any; // or define explicitly as { date: Date }
}

export function sortBySooner<T extends Datatable>(items: T[], dateField: keyof T): T[] {
    return items.slice().sort((a, b) => {
        const aDate = new Date(a[dateField]).getTime();
        const bDate = new Date(b[dateField]).getTime();
        return aDate - bDate;
    });
}
