export const sortName = (first, second) => {
    return second.NAME.localeCompare(first.NAME);
};

export const sortDate = (first, second) => {
    return second.DATE - first.DATE;
};