/**
 * sort items by true first
 */
export function sortByFunction(items: Array<any>, func: (item: any) => boolean) {
    const trueItems = items.filter(func);
    const falseItems = items.filter((item) => !func(item));
    return [...trueItems, ...falseItems];
}
