import { FC, PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { GetFromStorage } from "../../utils/storage";

const PrivateRoutes: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const access_token = GetFromStorage("accessToken");
  return access_token ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoutes;
