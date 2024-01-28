import React from "react";
import SearchInput from "./SearchInput";

const HomeHero = () => {
  return (
    <section
      id="home"
      className="home-hero bg-cover bg-center h-[800px] w-full m-0 flex flex-col items-center justify-center"
    >
      <h1 className="text-[#FFF] text-[65px] font-bold text-center">
        Trouvez l'avocat parfait près
        <br /> de chez vous
      </h1>
      <SearchInput />
    </section>
  );
};

export default HomeHero;
