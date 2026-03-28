import axios from "axios";
import { CountryType } from "@/types/country";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getAllCountries = async (): Promise<CountryType[]> => {
  const res = await api.get(
    "/all?fields=name,flags,population,capital,subregion,languages,currencies"
  );
  return res.data;
};

export const getCountryByName = async (name: string): Promise<CountryType> => {
  const res = await api.get(
    `/name/${name}?fields=name,flags,population,capital,subregion,languages,currencies`
  );
  return res.data[0];
};