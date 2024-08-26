import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout";
import Login from "../../pages/Auth/login";
import NotFound from "../../pages/NotFound";
import Register from "../../pages/Auth/register";
import AllAds from "../../pages/Ads";
import CreatAds from "../../pages/Ads/creat";
import { ViewAds } from "../../pages/Ads/view";
import EditAds from "../../pages/Ads/edit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AllAds />,
      },
      {
        path: "/editAds/:id",
        element: <EditAds />,
      },
      {
        path: "/creatAds",
        element: <CreatAds />,
      },
      {
        path: "/view/:id",
        element: <ViewAds />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
