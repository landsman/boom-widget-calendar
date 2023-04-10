export type CurrentDateType = {
    year: number;
    month: number;
    day: number;
}

// todo: revisit this code in respect to user's timezone!
export function getCurrentDate(): CurrentDateType {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDay();
    return {
        year,
        month,
        day,
    }
}
