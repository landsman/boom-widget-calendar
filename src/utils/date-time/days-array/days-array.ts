/**
 * Insert number of the month and get array with new Date().
 * This is prerequisite for "disabled dates" in React Day Picker.
 */
export function generateDaysArray(forMonth: number): Date[] {
    const year = new Date().getFullYear(); // get current year
    const daysInMonth = new Date(year, forMonth, 0).getDate(); // get number of days in the given month
    const daysArray: Date[] = [];

    // loop through each day in the month and add to the array
    for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push(new Date(year, forMonth - 1, i));
    }

    return daysArray;
}
