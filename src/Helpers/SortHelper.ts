export const sortBy = (data: any[], name: string, sortType: string) => {
    return data.sort((a: any, b: any) => {
        let type = typeof a[`${name}`];
        return (
            type === 'number' ?
                numberSortBy(a[`${name}`], b[`${name}`], sortType)
                :
                stringSortBy(a[`${name}`], b[`${name}`], sortType)
        )
    })
}

const numberSortBy = (a, b, sortType) => {
    return (sortType === "asc" ? b - a : a - b)
}

const stringSortBy = (a, b, sortType) => {
    return (sortType === "asc" ? b.localeCompare(a) : a.localeCompare(b))
}