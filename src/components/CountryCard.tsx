import Link from "next/link";
import { Country } from "@/types/country";

type Props = {
  country: Country;
};

export default function CountryCard({ country }: Props) {
  return (
    <Link href={`/country/${encodeURIComponent(country.name.common)}`}>
      <div className="card">
        <img
          src={country.flags.png}
          alt={country.name.common}
          loading="lazy"
        />
        <h3>{country.name.common}</h3>
        <p>
          Población:{" "}
          {new Intl.NumberFormat("es-ES").format(country.population)}
        </p>
      </div>
    </Link>
  );
}