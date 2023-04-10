import {CurrentDateType} from "../types";

// todo: revisit this code in respect to user's timezone!
export function initCurrentDate(): CurrentDateType {
    const currentDate = new Date();
    const year = currentDate.getUTCFullYear();
    const month = currentDate.getUTCMonth();
    return {
        year,
        month,
    }
}
