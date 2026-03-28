"use client";

import { useState } from "react";
import { CountryType } from "@/interfaces/country";
import CountryCard from "./CountryCard";

type Props = {
  countries: CountryType[];
};

export default function SearchBar({ countries }: Props) {
  const [text, setText] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Buscar país..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="grid">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.name.common}
            country={country}
          />
        ))}
      </div>
    </>
  );
}