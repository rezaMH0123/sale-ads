import { FC } from "react";
import { SearchBarProps } from "./search-bar.type";

export const SearchBar: FC<SearchBarProps> = ({
  search,
  setSearch,
  onSearch,
}) => {
  return (
    <div className="flex items-center bg-white border border-gray-300 rounded-lg shadow-sm p-3 w-full max-w-md">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="جستجو با آدرس ..."
        className="flex-grow  border-0 rounded-lg outline-none text-sky-700"
      />
      <button
        onClick={onSearch}
        className="bg-blue-500 text-white p-2 rounded-lg hover:bg-sky-600 transition-colors duration-200"
      >
        جستجو
      </button>
    </div>
  );
};
