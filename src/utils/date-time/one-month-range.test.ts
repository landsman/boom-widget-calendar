import {getOneMonthRange} from "./one-month-range";

describe('getOneMonthRange', () => {
    test('returns correct date range for January 2022', () => {
        const timezone = 'UTC';
        const year = 2022;
        const month = 1;

        const result = getOneMonthRange(timezone, year, month);

        expect(result.from).toEqual(new Date(Date.UTC(2022, 0, 1)));
        expect(result.to).toEqual(new Date(Date.UTC(2022, 0, 31, 23, 59, 59, 999)));
    });

    test('returns correct date range for February 2023', () => {
        const timezone = 'UTC';
        const year = 2023;
        const month = 2;

        const result = getOneMonthRange(timezone, year, month);

        expect(result.from).toEqual(new Date(Date.UTC(2023, 1, 1)));
        expect(result.to).toEqual(new Date(Date.UTC(2023, 1, 28, 23, 59, 59, 999)));
    });

    test('throws error for invalid year', () => {
        const timezone = 'UTC';
        const year = 'invalid';
        const month = 5;

        // @ts-ignore, because of invalid input is wanted here
        expect(() => getOneMonthRange(timezone, year, month)).toThrow('Invalid year');
    });

    test('throws error for invalid month', () => {
        const timezone = 'UTC';
        const year = 2022;
        const month = 'invalid';

        // @ts-ignore, because of invalid input is wanted here
        expect(() => getOneMonthRange(timezone, year, month)).toThrow('Invalid month');
    });

    test('throws error for invalid date', () => {
        const timezone = 'UTC';
        const year = 2022;
        const month = 13;

        expect(() => getOneMonthRange(timezone, year, month)).toThrow('Invalid month');
    });
});
