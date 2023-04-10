import {CurrentDateType} from "../types";

// todo: revisit this code in respect to user's timezone!
export function getCurrentYearAndMonth(): CurrentDateType {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    return {
        year,
        month,
    }
}
