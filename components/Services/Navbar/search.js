import React from "react";

const Search = () => {
  return (
    <div className="flex bg-[#D9D9D9]/[0.3] rounded-3xl pl-7 h-12">
      <input
        type="text"
        placeholder="Search"
        className="w-4/5 outline-none text-lg font-normal bg-transparent mt-1"
      />
      <div className="mt-3 w-1/5 flex place-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
