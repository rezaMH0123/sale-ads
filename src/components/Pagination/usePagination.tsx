import React from "react";

export const usePagination = ({
  maxPage = 1,
  page = 1,
  onPage = (page: number) => { },
}) => {
  // صفحه بعدی
  const hasNextPage = page < maxPage ? maxPage + 1 : undefined;
  // صفحه قبلی
  const hasPrevPage = page > 1 ? maxPage - 1 : undefined;

  const handleNextPage = () => {
    if (hasNextPage) {
      onPage(page + 1);
    } else {
      onPage(1);
    }
  };

  const handlePrevPage = () => {
    if (hasPrevPage) {
      onPage(page - 1);
    } else {
      onPage(maxPage);
    }
  };

  return {
    handleNextPage,
    handlePrevPage,
    page,
    hasNextPage,
    hasPrevPage
  }
};
