import {generateDaysArray} from "@local/utils/date-time/days-array/days-array";

describe('generateDaysArray', () => {
    it('should return an array of Date objects for January', () => {
        const result = generateDaysArray(1); // January

        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(31);

        result.forEach(date => {
            expect(date).toBeInstanceOf(Date);
            expect(date.getMonth()).toBe(0); // January = month index 0
        });
    });

    it('should return an array of Date objects for February in a non-leap year', () => {
        const result = generateDaysArray(2); // February (assuming current year is not a leap year)

        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(28);

        result.forEach(date => {
            expect(date).toBeInstanceOf(Date);
            expect(date.getMonth()).toBe(1); // February = month index 1
        });
    });

    it('should return an array of Date objects for April', () => {
        const result = generateDaysArray(4); // April

        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(30);

        result.forEach(date => {
            expect(date).toBeInstanceOf(Date);
            expect(date.getMonth()).toBe(3); // April = month index 3
        });
    });
});
