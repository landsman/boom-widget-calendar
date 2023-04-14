import {getOneMonthRange} from "@local/utils";

describe('getOneMonthRange', () => {
    it('should return range for January 2022', () => {
        const calendarDay = new Date(2022, 0, 15);
        const range = getOneMonthRange(calendarDay);
        expect(range.from).toEqual(new Date(2022, 0, 1));
        expect(range.to).toEqual(new Date(2022, 0, 31, 23, 59, 59, 999));
    });

    it('should return range for February 2023', () => {
        const calendarDay = new Date(2023, 1, 20);
        const range = getOneMonthRange(calendarDay);
        expect(range.from).toEqual(new Date(2023, 1, 1));
        expect(range.to).toEqual(new Date(2023, 1, 28, 23, 59, 59, 999));
    });

    it('should return range for March 2024', () => {
        const calendarDay = new Date(2024, 2, 7);
        const range = getOneMonthRange(calendarDay);
        expect(range.from).toEqual(new Date(2024, 2, 1));
        expect(range.to).toEqual(new Date(2024, 2, 31, 23, 59, 59, 999));
    });
});
