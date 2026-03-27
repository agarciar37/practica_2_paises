import { getCountryByName } from "@/services/countriesApi";
import Link from "next/link";

type Props = {
  params: Promise<{ name: string }>;
};

export default async function CountryDetail({ params }: Props) {
  const { name } = await params;

  const country = await getCountryByName(name);

  const languages = country.languages
    ? Object.values(country.languages)
    : [];

  const currencies = country.currencies
    ? Object.values(country.currencies).map((c) => c.name)
    : [];

  return (
    <main className="detail-page">
      <Link href="/" className="back-link">
        ← Volver
      </Link>

      <h1>{country.name.official}</h1>

      <img src={country.flags.png} alt={country.name.common} />

      <p>
        <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
      </p>

      <p>
        <strong>Subregión:</strong> {country.subregion || "N/A"}
      </p>

      <p>
        <strong>Lenguajes:</strong> {languages.join(", ") || "N/A"}
      </p>

      <p>
        <strong>Monedas:</strong> {currencies.join(", ") || "N/A"}
      </p>
    </main>
  );
}