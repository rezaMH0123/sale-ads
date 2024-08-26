import React, { FC } from "react";
import { PaginationProps } from "./pagination.type";
import { usePagination } from "./usePagination";
import IconChevron from "../icons/chevron";

export const Pagination: FC<PaginationProps> = ({
  page,
  maxPage,
  onPageClick,
}) => {
  const { handleNextPage, handlePrevPage, hasNextPage, hasPrevPage } =
    usePagination({ maxPage, onPage: onPageClick, page });

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = Math.max(1, page - 2); i <= Math.min(maxPage, page + 1); i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageClick(i)}
          className={`relative mx-2 button-primary  ${
            i === page ? "active" : ""
          } cursor-pointer`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handlePrevPage}
        disabled={!hasPrevPage}
        className={`button-primary bg-none`}
      >
        <IconChevron
          className={`w-8 h-8 ${
            hasPrevPage ? "stroke-cyan-700" : "stroke-gray-600 opacity-30"
          }`}
        />
      </button>
      <div className="flex items-center justify-center mx-1 space-x-2">
        {renderPageNumbers()}
      </div>
      <button
        onClick={handleNextPage}
        disabled={!hasNextPage}
        className={`button-primary bg-none`}
      >
        <IconChevron
          className={`rotate-180 w-8 h-8 ${
            hasNextPage ? "stroke-cyan-700" : "stroke-gray-600 opacity-30"
          }`}
        />
      </button>
    </div>
  );
};
