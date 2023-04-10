import {getCurrentDate} from "./get-current-date";

describe('getCurrentDate', () => {
    it('returns an object with properties year, month, and day', () => {
        const currentDate = getCurrentDate();
        expect(currentDate).toHaveProperty('year');
        expect(currentDate).toHaveProperty('month');
        expect(currentDate).toHaveProperty('day');
    });

    it('returns the current year', () => {
        const currentDate = getCurrentDate();
        const currentYear = new Date().getFullYear();
        expect(currentDate.year).toBe(currentYear);
    });

    it('returns the current month', () => {
        const currentDate = getCurrentDate();
        const currentMonth = new Date().getMonth() + 1;
        expect(currentDate.month).toBe(currentMonth);
    });

    it('returns the current day of the week', () => {
        const currentDate = getCurrentDate();
        const currentDay = new Date().getDate();
        expect(currentDate.day).toBe(currentDay);
    });
});
