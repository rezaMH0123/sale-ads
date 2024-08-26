import axios from "axios";
import { BASE_URL } from "../../config/global";
import { ApiError } from "../../types/http-errors.type";
import { errorHandler, networkErrorStrategy } from "./http.errors";

const httpService = axios.create({
  baseURL: BASE_URL,
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response) {
      const statusCode = error?.response?.status;
      if (statusCode >= 400) {
        const errorData: ApiError = error.response?.data;
        errorHandler[statusCode](errorData);
      }
    } else {
      networkErrorStrategy();
    }
  }
);

export default httpService;
