import { FilterPaginateRequest } from "../../types/request.type";

export const createFilterPaginateQuery = (filterPaginate: FilterPaginateRequest) => {
   const _search = filterPaginate.filters.search || '';
   const _page = filterPaginate.paginate._page || 1;
   const _limit = filterPaginate.paginate._limit || 10;

   const query = { _search, _page, _limit }

   return query
}