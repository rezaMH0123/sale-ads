import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout";
import Login from "../../pages/Auth/login";
import NotFound from "../../pages/NotFound";
import Register from "../../pages/Auth/register";
import AllAds from "../../pages/Ads";
import { ViewAds } from "../../pages/Ads/view";
import EditAds from "../../pages/Ads/edit";
import CreateAds from "../../pages/Ads/create";

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
        element: <CreateAds />,
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
