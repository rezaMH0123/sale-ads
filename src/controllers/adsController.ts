import { FilterPaginateRequest } from "../types/request.type";
import { IAds } from "../types/models/ads.model";
import httpService from "../core/services/http-service";
import { createPaginateResponse } from "../utils/helpers/paginate.helper";
import { createFilterQueryString } from "../utils/helpers/query.helper";
import { AdsRouteApi } from "../config/route-api.config";
import { createFilterPaginateQuery } from "../utils/helpers/filterPaginate.helper";
import toast from "react-hot-toast";

export async function getAdsByPaginate(filterPaginate: FilterPaginateRequest) {
  const query = createFilterPaginateQuery(filterPaginate);
  const filterSearch = createFilterQueryString(query, true);

  const searchQuery = filterPaginate.filters.search
    ? `&address_like=${filterPaginate.filters.search || ""}`
    : "";
  const fetchUrl = AdsRouteApi.ALL.concat(
    `${filterSearch}&_sort=id&_order=desc` + searchQuery
  );

  try {
    const response = await httpService.get(fetchUrl);

    return createPaginateResponse(query._page, query._limit, response);
  } catch (error) {
    return {
      totalCount: 0,
      currentPage: 1,
      maxPage: 1,
      data: [],
    };
  }
}

export async function getAdsById(id: string) {
  const fetchUrl = AdsRouteApi.GET.concat(`/${id}`);
  try {
    const response = await httpService.get(fetchUrl);

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createAdsController(data: IAds) {
  try {
    const res = await httpService.post(AdsRouteApi.CREATE, data);
    if (res.status === 200 || res.status === 201) {
      toast.success("با موفقیت ساخته شد");
      return res;
    }
  } catch (err: any) {
    const str = Object.values(err).join("");
    toast.error(str);
    throw err;
  }
}

export async function updateAdsByIdController(data: IAds, id: string) {
  try {
    const res = await httpService.put(
      AdsRouteApi.UPDATE.concat(`/${id}`),
      data
    );
    if (res.status === 200 || res.status === 201) {
      toast.success("با موفقیت تغییر داده شد");
      return res;
    }
  } catch (err: any) {
    const str = Object.values(err).join("");
    toast.error(str);
    throw err;
  }
}

export async function removeAdsByIdController(id: string) {
  try {
    const res = await httpService.delete(AdsRouteApi.DELETE.concat(`/${id}`));
    if (res.status === 200 || res.status === 201) {
      toast.success("با موفقیت حذف شد");
      return res;
    }
  } catch (err: any) {
    const str = Object.values(err).join("");
    toast.error(str ? str : "مشکلی پیش آمده");
    throw err;
  }
}
