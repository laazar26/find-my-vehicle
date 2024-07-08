import { z } from "zod";

export const carBrands = [
  "Select brand",
  "VW",
  "BMW",
  "Audi",
  "Mercedes-Benz",
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Nissan",
  "Hyundai",
  "Kia",
  "Mazda",
] as const;

// Define the fuelTypes array
export const fuelTypes = [
  "Benzin",
  "Dizel",
  "Benzin + Gas (TNG)",
  "Benzin + Metan (CNG)",
  "Električni pogon",
  "Hibridni pogon",
] as const;

export const years = Array.from({ length: 2024 - 1930 + 1 }, (_, i) =>
  (1930 + i).toString()
) as unknown as [string, ...string[]];

export const powerValues = [
  "kW from",
  "25kW (34KS)",
  "35kW (48KS)",
  "44kW (60KS)",
  "55kW (75KS)",
  "66kW (90KS)",
  "74kW (101KS)",
  "80kW (109KS)",
  "85kW (116KS)",
  "96kW (131KS)",
  "110kW (150KS)",
  "125kW (170KS)",
  "147kW (200KS)",
  "184kW (250KS)",
  "222kW (302KS)",
  "262kW (356KS)",
  "294kW (402KS)",
  "333kW (453KS)",
] as const;

const CarBrandSchema = z.enum(carBrands);
const FuelTypeSchema = z.enum(fuelTypes);
const YearSchema = z.enum(years);
const PowerValueSchema = z.enum(powerValues);

export type CarBrand = z.infer<typeof CarBrandSchema>;
export type FuelType = z.infer<typeof FuelTypeSchema>;
export type Year = z.infer<typeof YearSchema>;
export type PowerValue = z.infer<typeof PowerValueSchema>;
