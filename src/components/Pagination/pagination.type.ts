export type PaginationProps = {
   page: number;
   maxPage: number;
   onPageClick: (pageNum: number) => void;
}