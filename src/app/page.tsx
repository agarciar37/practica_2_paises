import axios from "axios";
import SearchBar from "@/components/SearchBar";
import { CountryType } from "@/types/country";

export default async function HomePage() {
  const res = await axios.get(
    "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,subregion,languages,currencies"
  );

  const countries: CountryType[] = res.data;

  return (
    <main>
      <h1>Países</h1>

      <SearchBar countries={countries} />
    </main>
  );
}