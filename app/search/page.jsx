import HomeHero from "../../components/home/HomeHero";
import SearchResults from "../../components/search/SearchResults";
import Home from "../page";

const SearchPage = ({ searchParams }) => {
  const { q } = searchParams;
  return (
    <>
      <HomeHero />
      <SearchResults />
    </>
  );
};

export default SearchPage;
