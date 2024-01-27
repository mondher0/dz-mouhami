import React from "react";
import TopRatedLoyerCard from "./TopRatedLoyerCard";

const TopRatedLoyers = ({ topRatedLoyers }) => {
  return (
    <section className=" bg-white p-[50px]">
      <p className="text-[#FFC700] text-[30px] font-semibold">
        TROUVER UN AVOCAT
      </p>
      <p className="text-[#001F3F] text-[40px] font-bold ">
        LES AVOCAT LES MIEUX NOTES
      </p>
      <div className="flex items-start gap-[30px] flex-wrap justify-between">
        {topRatedLoyers.map((topLoyer, index) => (
          <TopRatedLoyerCard key={index} topLoyer={topLoyer} />
        ))}
        <div className="flex items-center justify-center h-[535px] w-[300px] bg-[#FFC70066] text-[#FFF] text-[40px] font-semibold hover:cursor-pointer">
          SEE MORE
        </div>
      </div>
    </section>
  );
};

export default TopRatedLoyers;
