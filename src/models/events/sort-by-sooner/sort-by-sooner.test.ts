import {sortBySooner} from "@local/models/events/sort-by-sooner/sort-by-sooner";

describe("sortByDateField", () => {
    it("should sort objects by the specified date field", () => {
        // Create an array of objects to sort
        const input = [
            { name: "Alice", birthdate: new Date("1990-01-01") },
            { name: "Bob", birthdate: new Date("1980-01-01") },
            { name: "Charlie", birthdate: new Date("2000-01-01") },
        ];

        // Define the name of the date field to sort by
        const dateFieldName = "birthdate";

        // Sort the objects by the specified date field
        const output = sortBySooner(input, dateFieldName);

        // Define the expected output
        const expectedOutput = [
            { name: "Bob", birthdate: new Date("1980-01-01") },
            { name: "Alice", birthdate: new Date("1990-01-01") },
            { name: "Charlie", birthdate: new Date("2000-01-01") },
        ];

        // Assert that the output matches the expected output
        expect(output).toEqual(expectedOutput);
    });
});
