export interface PaginateResponse<T> {
   totalCount: number
   currentPage: number
   maxPage: number
   data: T[]
   nextPage?: number
   prevPage?: number
}