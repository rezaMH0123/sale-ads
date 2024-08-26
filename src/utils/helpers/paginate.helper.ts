import { AxiosResponse } from "axios";
import { PaginateResponse } from "../../types/response.type";

export const createPaginateResponse = <T>(page: number, limit: number, response: AxiosResponse<any, any>): PaginateResponse<T> => {
   // تعداد کل آیتم‌ها
   const totalCount = parseInt(response.headers['x-total-count'], 10);
   // محاسبه تعداد کل صفحات
   const pageCount = Math.ceil(totalCount / limit);
   // صفحه فعلی
   const currentPage = page;
   // صفحه بعدی
   const nextPage = currentPage < pageCount ? currentPage + 1 : undefined;
   // صفحه قبلی
   const prevPage = currentPage > 1 ? currentPage - 1 : undefined;

   const data = response.data
   return {
      totalCount,
      data,
      currentPage,
      nextPage,
      prevPage,
      maxPage: pageCount
   }
}