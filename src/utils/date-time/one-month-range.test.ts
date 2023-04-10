import {getOneMonthRange} from "./one-month-range";

describe('getOneMonthRange', () => {
    test('returns correct date range for January 2022', () => {
        const timezone = 'UTC';
        const currentDate = new Date(2022, 0, 1);
        const result = getOneMonthRange(timezone, currentDate);

        expect(result.from).toEqual(new Date(Date.UTC(2022, 0, 1)));
        expect(result.to).toEqual(new Date(Date.UTC(2022, 0, 31, 23, 59, 59, 999)));
    });

    test('returns correct date range for February 2023', () => {
        const timezone = 'UTC';
        const currentDate = new Date(2023, 1, 1);
        const result = getOneMonthRange(timezone, currentDate);

        expect(result.from).toEqual(new Date(Date.UTC(2023, 1, 1)));
        expect(result.to).toEqual(new Date(Date.UTC(2023, 1, 28, 23, 59, 59, 999)));
    });
});
