import {excludeOccupiedDays} from "@local/utils/date-time/exclude-occupied-dates/exclude-occupied-days";

const wholeWeekDays = [
    new Date(2023, 4, 2, 1, 0, 0, 0),
    new Date('2023-04-02'),
    new Date('2023-04-03'),
    new Date('2023-04-04'),
    new Date('2023-04-05'),
    new Date('2023-04-06'),
    new Date('2023-04-07')
];

describe('excludeOccupiedDays', () => {
    it('returns an empty array when all days are occupied', () => {
        const occupiedDays = [...wholeWeekDays];
        const freeDays = excludeOccupiedDays(wholeWeekDays, occupiedDays);
        expect(freeDays).toEqual([]);
    });

    it('returns all days when none are occupied', () => {
        const occupiedDays: Date[] = [];
        const freeDays = excludeOccupiedDays(wholeWeekDays, occupiedDays);
        expect(freeDays).toEqual(wholeWeekDays);
    });

    it('returns only the days that are not occupied', () => {
        const occupiedDays = [
            new Date('2023-04-02'),
            new Date('2023-04-04'),
            new Date('2023-04-06')
        ];
        const freeDays = excludeOccupiedDays(wholeWeekDays, occupiedDays);
        expect(freeDays).toEqual([
            new Date(2023, 4, 2, 1, 0, 0, 0),
            new Date('2023-04-03'),
            new Date('2023-04-05'),
            new Date('2023-04-07')
        ]);
    });
});
