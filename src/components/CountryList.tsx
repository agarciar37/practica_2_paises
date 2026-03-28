import { CountryType } from "@/types/country";
import CountryCard from "./CountryCard";

type Props = {
  countries: CountryType[];
};

export default function CountryList({ countries }: Props) {
  return (
    <div className="grid">
      {countries.map((c) => (
        <CountryCard key={c.name.common} country={c} />
      ))}
    </div>
  );
}