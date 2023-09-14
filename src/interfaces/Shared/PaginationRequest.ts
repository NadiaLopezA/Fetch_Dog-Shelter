export interface PaginationRequest {
    size?: number, // the number of results to return; defaults to 25 if omitted
    from?: number // a cursor to be used when paginating results (optional)
}