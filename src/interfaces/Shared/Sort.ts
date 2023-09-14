export interface Sort {
    sortType: "asc" | "desc" | string,
    sortFilter: "name" | "breed" | "age" | string,
}