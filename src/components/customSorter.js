export function customSorter(a, b) {
    // variable to hold the order I want the sorter to ahear to.
    const ordering = { object: 0, string: 1 };
    return ordering[typeof a] - ordering[typeof b];
}
