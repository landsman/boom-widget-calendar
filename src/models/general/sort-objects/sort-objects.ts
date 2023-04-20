/**
 * sort items by true first
 */
export function sortByFunction<T>(items: Array<T>, func: (item: T) => boolean): Array<T> {
    const trueItems = items.filter(func);
    const falseItems = items.filter((item) => !func(item));
    return [...trueItems, ...falseItems];
}
