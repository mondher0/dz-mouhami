import HomeHero from "../../components/home/HomeHero";
import SearchResults from "../../components/search/SearchResults";
import { baseUrl } from "../../lib/utils";
import Home from "../page";

const SearchPage = async ({ searchParams }) => {
  const { name, location } = searchParams || {};
  console.log(name, location);

  // get lowyers
  const getLowyers = async () => {
    try {
      const response = await fetch(
        `${baseUrl}lawyers/user?page=0&pageSize=100&${
          name ? `name=${name}` : ""
        }${location ? `&location=${location}` : ""}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const lowyers = await getLowyers();
  console.log(lowyers);
  return (
    <>
      <HomeHero />
      <SearchResults lowyers={lowyers} />
    </>
  );
};

export default SearchPage;
