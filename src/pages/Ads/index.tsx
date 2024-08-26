import { useQuery } from "@tanstack/react-query";
import Container from "../../components/Container";
import { getAdsByPaginate } from "../../controllers/adsController";
import { useEffect, useState } from "react";
import { IAds } from "../../types/models/ads.model";
import { SearchBar } from "../../components/SearchBar";
import { Pagination } from "../../components/Pagination";
import ErrorMessage from "../../components/Messages/ErrorMessage";
import EmptyState from "../../components/Messages/EmptyMessage";
import { delay } from "../../utils/helpers/timeout.helpers";
import { AdsCardList } from "../../sections/AdsCardList";
import { usePagination } from "../../components/Pagination/usePagination";
import { Link } from "react-router-dom";

export default function AllAds() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [maxPage, setMaxPage] = useState(6);

  const paginate = usePagination({ maxPage, onPage: setPage, page });
  const createSearchParams = () => {
    return {
      filters: {
        search,
      },
      paginate: {
        _limit: limit,
        _page: page,
      },
    };
  };

  const adsQuery = useQuery({
    queryKey: ["ads", limit, page],
    queryFn: async () => {
      await delay();
      return getAdsByPaginate(createSearchParams());
    },
    staleTime: Infinity,
  });

  useEffect(() => {
    adsQuery.refetch();
  }, [page, limit]);

  const handleSearch = () => {
    setPage(1);
    adsQuery.refetch();
  };

  const handlePageClick = (pageNum: number) => {
    setPage(pageNum);
  };

  useEffect(() => {
    if (adsQuery.data) {
      setMaxPage(adsQuery.data.maxPage);
      setPage(adsQuery.data.currentPage);
    }
  }, [adsQuery.data]);

  return (
    <Container outherClassName="border-transparent  p-3">
      <main className="col-span-12 flex flex-col">
        <div className="flex text-center justify-between">
          <h1 className="text-2xl font-bold mb-4">فهرست اگهی ها</h1>
          <Link to="/creatAds">
            <div className="py-2 px-4 rounded-lg bg-sky-400 text-white">
              ساخت اگهی جدید
            </div>
          </Link>
        </div>
        <div className="my-4 flex items-center justify-between flex-col md:flex-row space-y-2">
          <SearchBar
            search={search}
            setSearch={setSearch}
            onSearch={handleSearch}
          />
          {maxPage > 1 && (
            <Pagination
              {...paginate}
              page={page || 1}
              maxPage={maxPage || 1}
              onPageClick={handlePageClick}
            />
          )}
        </div>

        {/* لودینگ */}
        {adsQuery.isLoading && (
          <div className="flex justify-center items-center flex-1 dark:text-white">
            درحال بارگذاری اگهی ها، لطفا صبور باشید...
          </div>
        )}

        {/* نمایش خطا */}
        {adsQuery.isError && (
          <div className="flex justify-center items-center flex-1">
            <ErrorMessage message="مشکلی در دریافت داده‌ها پیش آمده است." />
          </div>
        )}

        {/* اگر داده‌ای موجود نیست */}
        {!adsQuery.isLoading && adsQuery.data?.data.length === 0 && (
          <div className="flex justify-center items-center flex-1">
            <EmptyState message="هیچ آگهی‌ای برای نمایش وجود ندارد." />
          </div>
        )}

        {/* نمایش لیست آگهی‌ها */}
        {!adsQuery.isLoading &&
          adsQuery.data?.data &&
          adsQuery.data?.data.length > 0 && (
            <div className="flex-1">
              <AdsCardList adsList={adsQuery.data?.data as IAds[]} />
            </div>
          )}
      </main>
    </Container>
  );
}
