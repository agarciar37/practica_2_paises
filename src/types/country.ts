export type Country = {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
  };
  population: number;
  capital?: string[];
  subregion?: string;
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string }>;
};