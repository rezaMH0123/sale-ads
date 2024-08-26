import React, { useEffect } from "react";
import { useTheme } from "../../context/ThemContext";
import IconLight from "../icons/light";
import IconDark from "../icons/dark";

const ThemeToggleButton: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button onClick={toggleDarkMode} className="px-4 py-2 rounded  text-white">
      {isDarkMode ? (
        <IconLight className="w-8 h-h stroke-amber-500" />
      ) : (
        <IconDark className="w-8 h-h stroke-slate-800 " />
      )}
    </button>
  );
};

export default ThemeToggleButton;
