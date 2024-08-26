export interface PaginateRequest {
   _page: number
   _limit: number
}

export interface FilterRequest {
   search: string
}
export interface FilterPaginateRequest {
   paginate: PaginateRequest
   filters: FilterRequest
}