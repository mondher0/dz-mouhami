import React from "react";
import SingleSearchItem from "./SingleSearchItem";
import { DropDown } from "../auth/DropDown";
import { SearchDropDown } from "./SearchDropDown";
import { CategoriesDropDown } from "../auth/CategoriesDropDown";
import { SearchCategoriesDropDown } from "./SearchCategoriesDropDown";
import { TopRatedLoyerDropDown } from "./TopRatedLoyerDropDown";

const SearchResults = ({ lowyers }) => {
  return (
    <div className="container" id="search">
      <h1 className="text-[#FFC700] text-[25px] font-bold">
        There are 46080 Attorneys with 54312 Reviews
      </h1>
      <div className="flex items-center gap-5 mt-3">
        <SearchDropDown displayValue="wilaya" />
        <SearchCategoriesDropDown displayValue="Spécialité" />
        <TopRatedLoyerDropDown />
      </div>
      <div className="flex flex-col items-start justify-center w-full gap-5 mt-5">
        {lowyers.map((lowyer, index) => (
          <SingleSearchItem key={index} lowyer={lowyer} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
