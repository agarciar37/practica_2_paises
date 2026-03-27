import { getAllCountries } from "@/services/countriesApi";
import SearchBar from "@/components/SearchBar";

export default async function HomePage() {
  const countries = await getAllCountries();

  return (
    <main>
      <h1>QUE BONICO ES EL MUNDO</h1>

      <SearchBar countries={countries} />
    </main>
  );
}