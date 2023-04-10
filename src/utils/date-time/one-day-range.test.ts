import {getOneDayDateRange} from "./one-day-range";

describe('getOneMonthRange', () => {
    test('returns correct date range for January 2022', () => {
        const currentDate = new Date(2022, 0, 1);
        const result = getOneDayDateRange(currentDate);

        expect(result.from).toEqual(
            new Date(2022, 0, 1)
        );
        expect(result.to).toEqual(
            new Date(2022, 0, 1, 23, 59, 59, 59)
        );
    });

    test('returns correct date range for February 2023', () => {
        const currentDate = new Date(2023, 1, 1);
        const result = getOneDayDateRange(currentDate);

        expect(result.from).toEqual(new Date(2023, 1, 1));
        expect(result.to).toEqual(new Date(2023, 1, 1, 23, 59, 59, 59));
    });
});
