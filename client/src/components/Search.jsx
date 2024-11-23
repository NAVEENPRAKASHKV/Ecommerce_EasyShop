import React, { useState } from "react";

const Search = ({ setPerPage, searchValue, setSearchValue }) => {
  return (
    <div>
      <div className="h-14 bg-slate-600 rounded-t-md flex justify-between items-center px-4">
        <select
          onChange={(e) => setPerPage(parseInt(e.target.value))}
          className="px-3 py-2 rounded font-semibold"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="hidden md:block bg-white border border-gray-300 h-10 px-3 py-1 rounded focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Search;
