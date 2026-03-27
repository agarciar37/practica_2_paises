"use client";

import { useState } from "react";
import { Country } from "@/types/country";
import CountryList from "./CountryList";

type Props = {
  countries: Country[];
};

export default function SearchBar({ countries }: Props) {
  const [search, setSearch] = useState("");

  const filtered = countries.filter((c) =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Buscar país..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <CountryList countries={filtered} />
    </>
  );
}