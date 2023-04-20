import {sortByFunction} from "@local/models/general/sort-objects/sort-objects";

describe('sortByFunction', () => {
    it('should sort the array by the function', () => {
        const items = [
            { name: 'John', age: 30 },
            { name: 'Jane', age: 25 },
            { name: 'Bob', age: 40 },
            { name: 'Alice', age: 20 },
        ];

        const result = sortByFunction(items, (item) => item.age > 25);

        expect(result).toEqual([
            { name: 'John', age: 30 },
            { name: 'Bob', age: 40 },
            { name: 'Jane', age: 25 },
            { name: 'Alice', age: 20 },
        ]);
    });
});
