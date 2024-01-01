"use client";
import React from "react";
import { Button } from "../ui/button";
import { CiSearch, CiLocationOn } from "react-icons/ci";

const SearchInput = () => {
  return (
    <form
      className="flex items-center justify-center gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e);
      }}
    >
      <div className="flex items-center">
        <div className="flex items-center gap-2 bg-white border-r-2 border-solid border-[#8E8E8E] p-2 rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md">
          <CiSearch />
          <input
            type="text"
            placeholder="nom de l’avocat"
            className="outline-none"
          />
        </div>
        <div className="flex items-center gap-2 bg-white p-2 rounded-md rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none">
          <CiLocationOn />
          <input
            type="text"
            placeholder="region ,wilaya"
            className="outline-none"
          />
        </div>
      </div>
      <Button type="submit">Rechercher</Button>
    </form>
  );
};

export default SearchInput;
