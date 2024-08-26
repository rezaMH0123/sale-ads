import { Outlet } from "react-router-dom";
import PrivateRoutes from "../core/routes/privateRoute";
import ThemeToggleButton from "./ThemToggelButton";
import { useTheme } from "../context/ThemContext";

export default function Layout() {
  const { isDarkMode } = useTheme();
  console.log(isDarkMode);
  return (
    <PrivateRoutes>
      <div className="px-2 md:px-12 py-4 h-full w-screen dark:bg-black">
        <ThemeToggleButton />
        <Outlet />
      </div>
    </PrivateRoutes>
  );
}
