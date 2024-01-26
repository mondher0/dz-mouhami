import React from "react";
import SingleSearchItem from "./SingleSearchItem";

const SearchResults = () => {
  return (
    <div className="container" id="search">
      <h1 className="text-[#FFC700] text-[25px] font-bold">
        There are 46080 Attorneys with 54312 Reviews
      </h1>
      <div className="flex flex-col items-start justify-center w-full gap-5 mt-5">
        <SingleSearchItem />
        <SingleSearchItem />
      </div>
    </div>
  );
};

export default SearchResults;
